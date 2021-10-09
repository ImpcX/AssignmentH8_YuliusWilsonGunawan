import Backlog from './Backlog';
import Progress from './Progress';
import Evaluation from './Evaluation';
import Done from './Done';
import './component.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Main()
{
    const dispatch = useDispatch();
    const [data, setData] = useState("");

    const handleChange = (e) =>
    {
        setData(e.target.value);
    }

    const handleClick = () =>
    {
        dispatch({
            type: "BACKLOG",
            payload: data
        })
    }

    return(
        <div className="main">
            <h1>Kanban Board</h1>
            <hr />
            <input onChange={handleChange} placeholder=" New Task" />
            <br /><br />
            <button id="button" onClick={handleClick} className="btn btn-primary">Save to Backlog</button>
            <br /><br />
            <hr />
            <div className="container">
                <div className="row">
                    {/* 1 */}
                    <div id="backlog" className="col-sm">
                        <Backlog />
                    </div>
                    {/* 2 */}
                    <div id="progres" className="col-sm">
                        <Progress />
                    </div>
                    {/* 3 */}
                    <div id="evaluation" className="col-sm">
                        <Evaluation />
                    </div>
                    {/* 4 */}
                    <div id="done" className="col-sm">
                        <Done />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
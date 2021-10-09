import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './component.css';

function Backlog()
{
    const state = useSelector((state) => state.backlog);
    const dispatch = useDispatch();

    const backlog_filter = (string) =>
    {
        let temp = state.filter((item) => { return item !== string })
        console.log(temp)
        dispatch({
            type: "PROGRESS",
            payload: [[string] , temp]
        })
    }

    return(
        <div className="backlog">
            <div className="judul">
                <h3>Backlog</h3>
            </div>
            {state.map((list, i) =>
            (
                <div id="tampil-backlog" className="card-body">
                    <h3>{list}</h3>
                    <br />
                    <button className="btn btn-primary" onClick={() => backlog_filter(list)}>TAKE</button>
                </div>
                
            ))}
        </div>
    );
}

export default Backlog;
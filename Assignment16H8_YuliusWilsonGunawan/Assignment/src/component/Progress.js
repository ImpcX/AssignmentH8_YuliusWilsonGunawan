import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './component.css';

function Progress()
{
    const state = useSelector((state) => state.progress);
    const dispatch = useDispatch();

    const progress_filter = (string) =>
    {
        let temp = state.filter((item) => { return item !== string })
        console.log(temp)
        dispatch({
            type: "EVALUATION",
            payload: [[string] , temp]
        })
    }

    return(
        <div className="progres">
            <div className="judul">
                <h3>In Progress</h3>
            </div>
            {state.map((list, i) =>
            (
                <div id="tampil-progress" className="card-body">
                    <h3>{list}</h3>
                    <br />
                    <button className="btn btn-primary" onClick={() => progress_filter(list)}>EVALUATE</button>
                </div>   
            ))}
        </div>
        
    );
}

export default Progress;
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Evaluation()
{
    const state = useSelector((state) => state.evaluation);
    const dispatch = useDispatch();

    const evaluation_filter = (string) =>
    {
        let temp = state.filter((item) => { return item !== string })
        console.log(temp)
        dispatch({
            type: "DONE",
            payload: [[string] , temp]
        })
    }

    return(
        <div className="evaluation">
            <div className="judul">
                <h3>Evaluation</h3>
            </div>
            {state.map((list, i) =>
            {
                return(
                    <div id="tampil-evaluation" className="card-body">
                        <h3>{list}</h3>
                        <br />
                        <button className="btn btn-primary" onClick={() => evaluation_filter(list)}>DONE</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Evaluation;
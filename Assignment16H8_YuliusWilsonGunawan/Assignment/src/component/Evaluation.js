import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

function Evaluation()
{
    const state = useSelector((state) => state);

    return(
        <div className="evaluation">
            <div className="judul">
                <h3>Evaluation</h3>
            </div>
            {state.evaluation.map((list, i) =>
            {
                return(
                    <div id="tampil-evaluation" className="card-body">
                        <h3>{list}</h3>
                        <br />
                        <Button key={i} index={i} id="DONE" />
                    </div>
                );
            })}
        </div>
    );
}

export default Evaluation;
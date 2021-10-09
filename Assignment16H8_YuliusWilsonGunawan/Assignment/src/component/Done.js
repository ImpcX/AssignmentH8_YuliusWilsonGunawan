import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './component.css';

function Done()
{
    const dispatch = useDispatch();

    const state = useSelector((state) => state);

    return(
        <div className="done">
            <div className="judul">
                <h3>Done</h3>
            </div>
            {state.done.map((list, i) =>
            {
                return(
                    <div id="tampil-done" className="card-body">
                        <h3>{list}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default Done;
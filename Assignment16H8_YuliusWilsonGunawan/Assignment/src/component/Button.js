import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Button(props)
{
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    // Untuk Backlog

    const Tomboltake = (i) =>
    {
        let data_take = state.backlog;
        let temp = data_take.splice(i, 1);
        let data = temp.join();
        dispatch({
            type: "PROGRESS",
            payload: data
        })
    }

    // Untuk Progress

    const Tombolevaluate = (i) =>
    {
        let data_evaluate = state.progress;
        let temp = data_evaluate.splice(i, 1);
        let data = temp.join();
        dispatch({
            type: "EVALUATION",
            payload: data
        })
    }

    // Untuk Evaluation

    const Tomboldone = (i) =>
    {
        let data_done = state.evaluation;
        let temp = data_done.splice(i, 1);
        let data = temp.join();
        dispatch({
            type: "DONE",
            payload: data
        })
    }

    const choose = (i) =>
    {
        switch(props.id)
        {
            case "TAKE":
                return Tomboltake(i);
            case "EVALUATE":
                return Tombolevaluate(i);
            case "DONE":
                return Tomboldone(i);
            default:
                return "";
        }
    }

    return(
        <button className="btn btn-primary" onClick={() => choose(props.index)}>
            {props.id}
        </button>
    );
}

export default Button;
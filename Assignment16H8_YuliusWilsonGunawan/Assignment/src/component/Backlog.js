import React from "react";
import { useSelector } from "react-redux";
import Button from './Button';
import './component.css';

function Backlog()
{
    const state = useSelector((state) => state);

    return(
        <div className="backlog">
            <div className="judul">
                <h3>Backlog</h3>
            </div>
            {state.backlog.map((list, i) =>
            {
                return(
                    <div id="tampil-backlog" className="card-body">
                        <h3>{list}</h3>
                        <br />
                        <Button key={i} index={i} id="TAKE" />
                    </div>
                );
            })}
        </div>
    );
}

export default Backlog;
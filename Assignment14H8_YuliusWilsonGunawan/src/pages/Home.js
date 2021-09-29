import React from 'react';
import "../index.css";

export default function Home()
{
    return (

        <div className="container">
            <nav>
                <br />
                <h1>Testing example</h1>
                <hr />
            </nav>
            <div className="container">
                <h2>Why do we need Test ?</h2>
                <label>To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself.</label>
                <br /><br />
                <button className="btn btn-primary">
                    <a className="button-link" href="/Users">Users List</a>
                </button>
            </div>
            <br />
            <hr />
            <footer className="footer"> 
                <span>
                    &copy; 2021
                </span>
            </footer>
        </div>
    );
}

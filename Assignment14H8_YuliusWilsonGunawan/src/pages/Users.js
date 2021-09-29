import React from "react";
import { useHistory } from "react-router";
import '../index.css';

export default function Users()
{
    const history = useHistory();

    const pindah = () =>
    {
        history.push("/");
    }
    return(
        <div className="container">
            <nav>
                <br />
                <h1>Testing example</h1>
                <hr />
            </nav>
            <div className="container">
                <button onClick={pindah} className="btn btn-success">
                    Back to Home
                </button>
                <br /><br />
                <div className="table">
                    <table className="tabel">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nama</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Leanne Graham</td>
                                <td>Brat</td>
                                <td>Sincere@apriz.biz</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>Budi</td>
                                <td>Budi</td>
                                <td>Budi@budi.com</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>3</td>
                                <td>Binomo</td>
                                <td>Binomo</td>
                                <td>Binomo@binomo.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
import React, { useState } from "react";
import './Antri.css';

function Fungsi()
{
    const [nama, setNama] = useState([""]);
    const arr = [];
    const panah = "=>";

    const submit = e =>
    {
        e.preventDefault();
    }

    const click1 = () =>
    {
        var output = document.getElementById("tampil");
        var c1 = document.getElementById("nama").value;
        arr.push(c1 + panah);
        output.innerHTML = arr;
    }

    const click2 = () =>
    {
        var output = document.getElementById("tampil");
        arr.pop();
        if(arr.length === 0)
        {
            output.innerHTML = "[ Antrian Kosong !]";
        }else
        {
            output.innerHTML = arr;
        }
        
    }

    return(
        <div>
            <center>
                <form onSubmit={submit}>
                    <h1>Simulasi Antrian</h1>
                    <hr />
                    <h3>Masukkan Nama</h3>
                    <input type="text" id="nama" />
                    <br />
                    <br />
                    <button type="submit" onClick={click1}>Antrikan !</button>
                    <button type="submit" onClick={click2}>Majukan !</button>
                    <hr />
                </form>
                <br />
                <p className="tampil" id="tampil">[ Antrian Kosong !]</p>
            </center>
        </div>
    );
}

function Antriv2()
{
    return(
        <div>
            <Fungsi />
        </div>
    );
}

export default Antriv2;

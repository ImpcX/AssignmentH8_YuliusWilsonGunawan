import React, { useState } from 'react';
import './Clock.css';

function Clock_Function()
{
    function tick()
    {
        setDate(new Date())
    }
    const [date, setDate] = useState(new Date());

    setInterval(() => tick(), 1000)

    return(
        <div className="Clock">
            <h1>Realtime CLOCK (Function)</h1>
            <hr />
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Clock_Function;
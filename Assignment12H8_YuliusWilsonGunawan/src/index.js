import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Load from './Clock/Clock_Class';
import Load1 from './Clock/Clock_Function';

ReactDOM.render(
  <React.StrictMode>
    <Load />
    <br /><br />
    <Load1 />
  </React.StrictMode>,
  document.getElementById('root')
);


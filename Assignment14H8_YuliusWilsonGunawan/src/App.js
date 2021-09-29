import React from 'react';
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';

export default function App()
{
    return (
        <div className="container">
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route path="/Users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

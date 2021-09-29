import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './App';
import Users from './pages/Users';
function routes() {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/pages/Users" component={Users} />
            </div>
        </Router>
    );
}
export default routes;
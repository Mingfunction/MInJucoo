import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    // NavLink,
    Route,
}
    from 'react-router-dom'

import './App.css';

import GuardRouter from './GuardRouter/GuardRouter';
import Eticket from './Eticket/Eticket'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    {/* 这里不能加exact 加了匹配不到Home里的路由 */}
                    <Route path='/'  component={GuardRouter}></Route>
                    <Route path='eticket' component={Eticket}></Route>
                </Router>
            </div>
        );
    }
}

export default App;

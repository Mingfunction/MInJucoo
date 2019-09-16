import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    // NavLink,
    Route,
    Switch,
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
                        <Switch>
                            <Route path='/eticket' component={Eticket}></Route>
                            <Route path='/index/selectCity' component={()=><div>111</div>}></Route>
                            <Route path='/'  component={GuardRouter}></Route>
                        </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

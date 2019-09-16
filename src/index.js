import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import axios from 'axios'
// import {
//     Provider
// } from 'react-redux'
// import store from './store'
import * as serviceWorker from './serviceWorker';

axios.interceptors.request.use(function(config){
    console.log(config)
    return config
})
axios.interceptors.response.use(function({data}){
    console.log(data)
    return data
})

ReactDOM.render(
    <App></App>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

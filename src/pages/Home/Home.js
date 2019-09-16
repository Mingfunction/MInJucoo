//依赖
import React, { Component } from 'react';

//跳转模块

//模块
import HeadNav from '../../components/HeadNav/HeadNav'
import Banner from "../../components/Banner/Banner"
import "./Home.scss"

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <HeadNav></HeadNav>
                <Banner></Banner>
            </div>
        );
    }
}

export default Home;
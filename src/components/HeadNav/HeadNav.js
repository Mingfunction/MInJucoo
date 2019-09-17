//依赖
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

//跳转模块


//模块
import "./HeadNav.scss"

class HeadNav extends Component {
    pushRoute(page){
        console.log(this)
        this.props.history.push(page)
    }
    handleScroll(event){
        let scrollTop  = document.documentElement.scrollTop;
        if(!this.refs.scroll){
            return
        }
        if(scrollTop>10)
            this.refs.scroll.className = "weite"
        else{
            this.refs.scroll.className = ""
        }
        
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    render() {
        return (
            <header id="home-header" ref="scroll">
                <div className="head-Address" onClick={this.pushRoute.bind(this,"/index/selectCity")}>
                    <span className="icon-add"></span>
                    <span className="AddressTitle">全国</span>
                </div>
                <div className="head-search" onClick={this.pushRoute.bind(this,"/search/index")}>
                    <span className="icon-search"></span>
                    <span>搜索热门演出</span>
                </div>
                <div className="head-share" onClick={this.pushRoute.bind(this,"/Distributor/centre")}>
                    <img src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt=""/>
                </div>
            </header>
        );
    }
}

export default withRouter(HeadNav)
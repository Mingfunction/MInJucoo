//依赖
import React, { Component } from 'react';
import * as api from '../../api'

//跳转模块

//模块
import HeadNav from '../../components/HeadNav/HeadNav'
import Banner from "../../components/Banner/Banner"
import Labelitem from '../../components/Labelitem/Labelitem'
import Operation from '../../components/Operation/Operation'
import "./Home.scss"

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            homeData:{
                slide_list:[],
            }
        }
    }
    async componentDidMount() {
        const data = await api.getClassifyHome()
        this.setState({
            homeData: data
        })
    }
  //加上这一步，不会内存泄漏报错
    componentWillUnmount(){
        this.setState = (state , callback) => {
            return
        }
    }

    render() {
        const homeData = this.state.homeData
        console.log(homeData)
        return (
            <div id="Home">
                <HeadNav></HeadNav>
                <Banner slide={homeData.slide_list}></Banner>
                <section className={"advertion-wrap"}>
                    <Labelitem classify={homeData.classify_list}></Labelitem>
                    <Operation operation={homeData.operation_list}></Operation>
                </section>
            </div>
        );
    }
}

export default Home;
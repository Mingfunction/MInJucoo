//依赖
import React, { Component } from 'react';
import api from '../../api'

//跳转模块

//模块
import HeadNav from '../../components/HeadNav/HeadNav'
import Banner from "../../components/Banner/Banner"
import Labelitem from '../../components/Labelitem/Labelitem'
import Operation from '../../components/Operation/Operation'
import Vipbanner from "../../components/Vipbanner/Vipbanner"
import TourShow from "../../components/TourShow/TourShow"
import HotRecommend from "../../components/HotRecommend/HotRecommend"
import "./Home.scss"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeData: {
                slide_list: [],
            },
            HotRecommend:{},
            mainBanner: {
                autoplay:true,
                autoplayInterval:1000,
                infinite:true,
                className:"banner-warp",
            }
        }
    }
    async componentDidMount() {
        let data = await api()
        //console.log(data)
        this.setState({
            homeData: Object.assign(data[0], data[1]),
            HotRecommend:data[2],
        })
    }
    //加上这一步，不会内存泄漏报错
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }

    render() {
        const homeData = this.state.homeData;
        const mainBanner = this.state.mainBanner;
        const HotRecommendData = this.state.HotRecommend;
        //console.log(homeData)
        return (
            <div id="Home">
                <HeadNav></HeadNav>
                <Banner rotationData={homeData.slide_list} api={mainBanner}  ></Banner>
                <section className={"advertion-wrap"}>
                    <Labelitem classify={homeData.classify_list}></Labelitem>
                    <Vipbanner priorList={homeData.priorList}></Vipbanner>
                    <Operation operation={homeData.operation_list}></Operation>
                    <TourShow></TourShow>
                    <HotRecommend HotRecommendData={HotRecommendData}></HotRecommend>
                    <div className={"height"}></div>
                </section>
            </div>
        );
    }
}

export default Home;
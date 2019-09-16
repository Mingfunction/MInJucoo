//依赖
import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

//跳转模块


//模块
import "./Banner.scss";
import * as api from "../../api/index"

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: [], //轮播数组
        }
    }

    async componentDidMount() {
        const data = await api.GetBanner()
        console.log(data)
        this.setState({
            slide: data
        })
    }

    render() {
        return (
            <Carousel
                autoplay={false}
                infinite
                className="banner-warp"
            >
                {
                    this.state.slide.map((val,k)=>{
                        return(
                            <div className="bannerItem" key={k}>
                                <img src={val.image_url} alt=""/>
                            </div>
                        )
                    })
                }
            </Carousel>
        );
    }
}

export default Banner;


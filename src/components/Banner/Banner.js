//依赖
import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

//跳转模块


//模块
import "./Banner.scss";

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //轮播数组 设置长度，防止打开页面是没有长度不会自动轮播
            // slide: new Array(2)
            //slide: [],
            autoplay: true
        }
    }

    render() {
        const slide = this.props.slide
        return (
            <>
                {
                    slide.length > 0 ? <Carousel
                        autoplay={this.state.autoplay}
                        autoplayInterval={1000}
                        infinite
                        className="banner-warp"
                    >
                        {
                            slide.map((val, k) => {
                                return (
                                    <div className="bannerItem" key={k}>
                                        <img src={val.image_url} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Carousel> : null
                }

            </>

        );
    }
}

export default Banner;


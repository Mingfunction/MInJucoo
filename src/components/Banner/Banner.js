/*轮播图组件*/
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
        }
    }

    render() {
        const rotationData = this.props.rotationData;
        const api = this.props.api;
        //console.log(api)
        return (
            <>
                {
                    rotationData.length > 0 ?
                        <Carousel {...api}>
                            {
                                rotationData.map((val, k) => {
                                    return (
                                        <div className="bannerItem" key={k}>
                                            <img src={val.image_url || val.pic} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Carousel> 
                    : null
                }

            </>

        );
    }
}

export default Banner;


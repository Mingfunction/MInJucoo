/* 商品轮播图列表 */
// 依赖模块
import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import {withRouter} from 'react-router-dom'
import "./BannerList.scss"
import 'swiper/dist/css/swiper.min.css'

class BannerList extends Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            slidesPerView: 3, // 能看到的数量
            centeredSlides: false, // 居中？
            height: 80,
            spaceBetween: 5,
        })
    }
    pushRoute(page){
        // console.log(this)
        this.props.history.push(page.replace("https://m.juooo.com",""))
    }
    render() {
        const accept = this.props.accept;
        // console.log(accept)
        return (
            <div className='BannerList'>
                <div>{accept[0].city_name}</div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            accept.map((val,k)=>{
                                    if(k<1){
                                        return null
                                    }
                                    return(
                                        <div key={k} className="swiper-slide">
                                            <div className="img-warp" onClick={this.pushRoute.bind(this,val.schedular_url?val.schedular_url:val.url)}>
                                                <img src={val.pic} alt=""/>
                                            </div>
                                            <h3>{ val.schedular_name }</h3>
                                            <p> <span>￥{val.low_price}</span> <em>起</em> </p>
                                        </div>
                                    )
                                
                            })
                            
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter (BannerList)
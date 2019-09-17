/* 热门推荐模块 */
// 依赖模块
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

// 加载模块
import BannerList from '../BannerList/BannerList'
import "./HotRecommend.scss"

class HotRecommend extends Component {
    constructor(props){
        super(props)
        this.state = {
            bannerset:{

            }
        }
    }
    render() {
        // const bannerset = this.state.bannerset
        const HotRecommendData = this.props.HotRecommendData
        HotRecommendData.more_url = HotRecommendData.more_url?HotRecommendData.more_url.replace("https://m.juooo.com",""):HotRecommendData.more_url
        console.log(HotRecommendData)
        
        return (
            HotRecommendData.more_url?
                <div className={"hot-recommend"}>
                    <div className="list-title">
                        <h3>热门演出</h3>
                        <Link className={"link-to"} to={HotRecommendData.more_url}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                        </Link>
                        <BannerList></BannerList>
                    </div>
                </div>
            :null
        );
    }
}

export default HotRecommend;
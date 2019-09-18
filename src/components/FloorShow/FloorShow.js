/* 热门推荐模块 */
// 依赖模块
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

// 加载模块
import BannerList from '../BannerList/BannerList'
import "./FloorShow.scss"

class FloorShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            bannerset:{

            }
        }
    }
    render() {
        // const bannerset = this.state.bannerset
        const FloorShow = this.props.FloorShowData
        // console.log(FloorShow)
        
        return (
            FloorShow.search_url?
                <div className={"hot-recommend"}>
                    <div className="list-title">
                        <h3>{FloorShow.title}</h3>
                        <Link className={"link-to"} to={FloorShow.search_url.replace("https://m.juooo.com","")}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                        </Link>
                    </div>
                    <BannerList 
                        accept={FloorShow.list}
                        setStyle={this.state.bannerset}
                    ></BannerList>
                </div>
            :null
        );
    }
}

export default FloorShow;
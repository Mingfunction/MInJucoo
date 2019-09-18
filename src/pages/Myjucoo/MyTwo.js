import React from "react"
import "../css/MyTwo.css"
class  MyTwo extends React.Component{
    render(){
        return(
            <div className={"mine"}>
                <div className={"mine-body"}>
                    <div className={"mine-info"}>
                        <a href="">
                            <i className={"iconfont"}>dasd</i>
                        </a>
                        <div className={"min-info-main"}>
                            {/*橙子*/}
                            <div className={"min-info-main-head"}>
                                <div className={"min-info-main-head-pic"}>
                                    <img src={require("../images/rentou.png")} alt=""/>
                                    <span className={"mine-info-main-head-name"}>橙子</span>
                                    <span className={"mine-info-main-head-uid"}>ID:6833439</span>
                                </div>
                            </div>
                            {/*普通会员*/}
                            <div className={"mine-info-main-label"}>
                                <p>普通会员</p>
                            </div>
                            {/*账户余额*/}
                            <div className={"mine-info-main-cnt"}>
                                <a href="" className={"mine-info-main-cnt-item"}>
                                    <p className={"mine-info-main-cnt-item-num"}>0</p>
                                    <p className={"mine-info-main-cnt-item-name"}>余额</p>
                                    <div className={"separator"}></div>
                                </a>
                                <a href="" className={"mine-info-main-cnt-item"}>
                                    <p className={"mine-info-main-cnt-item-num"}>4</p>
                                    <p className={"mine-info-main-cnt-item-name"}>积分</p>
                                    <div className={"separator"}></div>
                                </a>
                                <a href="" className={"mine-info-main-cnt-item"}>
                                    <p className={"mine-info-main-cnt-item-num"}>4</p>
                                    <p className={"mine-info-main-cnt-item-name"}>积分</p>
                                    <div className={"separator"}></div>
                                </a>
                                <a href="" className={"mine-info-main-cnt-plus"}>
                                    <p className={"mine-info-main-cnt-plus-no"}>立即开通</p>
                                    <p className={"mine-info-main-cnt-plus-name"}>橙PLUS卡</p>
                                </a>
                            </div>
                            {/*vip会员*/}
                        </div>
                        {/*vip图片*/}
                        <a href="" className={"mine-vip"}>
                            <img src={require("../images/vip.png")} alt=""/>
                        </a>
                    </div>
                    <div className={"mine-setting"}>
                        <ul className={"mine-setting-list"}>
                            <li className={"mine-setting-list-item"}>
                                <a href="" >
                                    <i><img src={require("../images/dingdan.png")} alt=""/></i>
                                    <p>我的订单</p>
                                </a>
                            </li>
                            <li className={"mine-setting-list-item"}>
                                <a href="" >
                                    <i><img src={require("../images/piaojia.png")} alt=""/></i>
                                    <p>我的票夹</p>
                                </a>
                            </li>
                            <li className={"mine-setting-list-item"}>
                                <a href="" >
                                    <i><img src={require("../images/kabao.png")} alt=""/></i>
                                    <p>我的卡包</p>
                                </a>
                            </li>

                        </ul>
                        <ul className={"mine-setting-list"}>
                            <li className={"mine-setting-list-item"}>
                                <a href="" >
                                    <i><img src={require("../images/goupiaoren.png")} alt=""/></i>
                                    <p>实名购票人</p>
                                </a>
                            </li>
                            <li className={"mine-setting-list-item"}>
                                <a href="" >
                                    <i><img src={require("../images/dizhi.png")} alt=""/></i>
                                    <p>收货地址</p>
                                </a>
                            </li>
                            <li className={"mine-setting-list-item"}>
                                <a href="" >
                                    <i><img src={require("../images/yijian.png")} alt=""/></i>
                                    <p>意见反馈</p>
                                </a>
                            </li>
                            <li className={"mine-setting-list-item"}>
                                <a href="" >
                                    <i><img src={require("../images/kefu.png")} alt=""/></i>
                                    <p>客服帮助</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default MyTwo;
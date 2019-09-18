import React from 'react';
import "../css/My.css"

class My extends React.Component {
    render() {
        return (
            <div className="views login-bg">
                <div className="div_top">
                    <a href="" aria-hidden="true" className="icon">
                        <span className={"iconfont icon-back"}></span>
                    </a>
                </div>

                <div className="main">
                    <div className="login-wrap">
                        <h1 className="title login-title">欢迎来到聚橙网</h1>
                    </div>
                    {/*登录*/}
                    <div className="binded-iphone">
                        <div className="login-area">
                            <form>
                                <ul className="lg-list">
                                    <li className="lg-item">
                                        <input type="text" name="tel" placeholder="请输入手机号/邮箱" className="lg-input"/>
                                    </li>
                                    <li className="lg-item">
                                        <input type="password" name="pwd" placeholder="请输入密码" className="lg-input pwd-input"/>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div className="login-btn">
                            <a href="" disabled="disabled" className="btn lg-btn">登 录</a>
                        </div>
                        <div className="login-toggle">
                            <div className="tg-wrap tg-sms">
                                <span className="left tg-mail">忘记密码</span>
                                <span className="right tg-login">验证码登录/注册</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*其他登录方式*/}
                <div className="footer-wrap" >
                    <div className="footer-title">
                        <p className="footer-title-txt">其他登录方式</p>
                    </div>
                    <div className="footer-inner">
                        <div className="item">
                            <a href="" className="img-media">
                                <img src={require("../images/qq.png")} alt=""/>
                            </a>
                        </div>
                        <div className="item">
                            <a href="" className="img-media">
                                <img src={require("../images/weibo.png")} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default My;



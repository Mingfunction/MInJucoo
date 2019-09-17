//依赖
import React, { Component , Fragment , 
    // lazy , Suspense
} from 'react';
import { Route, NavLink } from 'react-router-dom'
// import axios from "axios"

//需要跳转的模块
import Teatre from '../Theatre/Teatre'
import Myjucoo from '../Myjucoo/Myjucoo'
import Home from '../Home/Home'
// import Eticket from "../Eticket/Eticket"

//加载的模块
import * as configure from '../../router/index'
import "./GuardRouter.css"

// const Teatre = lazy(()=>import("../Theatre/Teatre"))
// const Home = lazy(()=>import("../Home/Home"))
// const Myjucoo = lazy(()=>import("../Myjucoo/Myjucoo"))


class GuardRouter extends Component {
    constructor() {
        super()
        this.state = {
            HomeNavList: configure.HomeNavList,
            show: true
        }
    }
  
    render() {
        return (
            <Fragment>
                {/* <Suspense fallback={()=><div>111</div>}> */}
                <Route path={"/"} exact component={Home}></Route>
                <Route path='/theatre/theatreList' component={Teatre}></Route>
                <Route path='/myjuooo/myjuooo' component={Myjucoo}></Route>
                {/* </Suspense> */}
                <nav id="mian-nav" style={{ display: this.state.show?"flex":"none" }}>
                    {
                        this.state.HomeNavList.map((v, k) => {
                            return (
                                <div className="navItemLink" key={k}>
                                    <NavLink activeClassName={"activeNav"} to={v.path} exact={v.exact}>
                                        <span className={"icon" + v.SpanClass}></span>
                                        <p>{v.routerTitle}</p>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>
            </Fragment>
        )
    }
}

export default GuardRouter
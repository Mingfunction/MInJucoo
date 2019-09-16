//依赖
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import "./Labelitem.scss"

class Labelitem extends Component {
    pushRoute(page){
        this.props.history.push(page.replace("https://m.juooo.com",""))
    }
    render() {
        const classify = this.props.classify
        // console.log(classify)
        return (
            <div className={"label-item"}>
                {
                    classify ?
                        classify.map((val, k) => {
                            return (
                                <div className={"label-list"} onClick={this.pushRoute.bind(this,val.url)} key={val.category_id}>
                                    <img className={"labelimg"} src={val.pic} alt=""/>
                                    <span>{val.name}</span>
                            </div>
                            )
                        })
                    : null
                }
            </div>
        );
    }
}

export default withRouter(Labelitem)
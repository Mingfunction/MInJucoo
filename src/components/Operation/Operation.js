import React, { Component } from 'react';

import "./Operation.scss"

class Operation extends Component {
    render() {
        const operation = this.props.operation
        console.log(operation)
        return (
            <div className={"Operation"}>
                {
                    operation ?
                        operation.map((val, k) => {
                            return (
                                <div key={k} className={k < 2 ? "two-op" : "three-op"}>
                                    <div className={"op-title"}>
                                        <h3>{val.name}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: val.describe }}></p>
                                    </div>
                                    <div className={"op-img"}>
                                        <img src={val.pic} alt=""/>
                                    </div>
                                </div>
                            )
                        })
                        : null
                }
            </div>
        );
    }
}

export default Operation
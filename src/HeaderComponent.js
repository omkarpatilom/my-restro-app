import React, { Component } from 'react'
import { ButtonContext } from './components/BasicConstant'

export default class HeaderComponent extends Component {
    static contextType=ButtonContext;
    render() {
        const {id,role,changeID}=this.context
        return (
            <div>
                <div className="jumbotron text-center text-white" style={{ "marginBottom": "0" }}>
                    <h1>Restaurant Application</h1>
                     header context : {id} {role}
                     

                </div>
            </div>
        )
    }
}

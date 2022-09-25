import React, { Component } from 'react'
import { ButtonContext } from './components/BasicConstant'

export default class HeaderComponent extends Component {

    render() {
        
        return (
            <div>
                <div className="jumbotron text-center text-white" style={{ "marginBottom": "0" }}>
                    <h1>Restaurant Application</h1>
                </div>
            </div>
        )
    }
}

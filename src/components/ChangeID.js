import React, { Component } from 'react'
import { ButtonContext } from './BasicConstant'

export default class ChangeID extends Component {
    static contextType = ButtonContext
    constructor(props) {
        super(props)

        this.state = {
            propID: this.props.customerID
        }
       
    }
    render() {
        const { id, role, changeID } = this.context
        return (
            <div>

                


            </div>
        )
    }
}

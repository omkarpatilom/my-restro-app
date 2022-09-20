import React, { Component } from 'react'
import BodyComponent from './BodyComponent';
import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';


export default class ParentOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: "nikhil",
            flag: false,
            flag1: false
        }
    }
    showHide(e) {
        this.setState({ flag: true, flag1: true })
    }
    render() {
        let { flag1 } = this.state;
        return (
            <div>
                <RestroNavigation></RestroNavigation>
                <BodyComponent></BodyComponent>
                <RestroFooter></RestroFooter>
                
                





            </div>
        )
    }
}

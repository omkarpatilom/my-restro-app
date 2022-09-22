import React, { Component } from 'react'
import BodyComponent from './BodyComponent';
import img3 from '../images/pic3.jpg'

<img className="card-img-top" src={img3}
                                        alt="Card image cap" />

export default class ParentOne extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            first: "nikhil",
            flag: false
        }
    }

    componentDidMount() {
        const colorValue= this.context
    
        console.log(colorValue) //  "white" 
      }
      
    
    render() {
      
        return (
            <div style={{"backgroundImage":""}}><BodyComponent></BodyComponent>
            </div>
        )
    }
}

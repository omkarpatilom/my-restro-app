import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ChildOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: this.props.name
        }
    }

//     ul {
//     "list-style-type": "none",
//         "margin": "0";
//     "padding": "0";
//     "overflow": "hidden";
//     "backgroundColor": "#333";
// }
      
    
      
//       li a {
//     display: block;
//     color: white;
//     text - align: center;
//     padding: 14px 16px;
//     text - decoration: none;
// }


render() {
    return (
        <div>

            <ul style={{
                "listStyleType": "none",
                "margin": "0",
                "padding": "0",
                "overflow": "hidden",
                "backgroundColor": "#333"

            }}>
                <li style={{"float": "left"}}><a className="active" href="#home">Home</a></li>
                <li style={{"float": "left"}}><a href="#news">News</a></li>
                <li style={{"float": "left"}}><a href="#contact">Contact</a></li>
                <li style={{"float": "left"}}><a href="#about">About</a></li>
            </ul>

            ChildOne
            <br></br>
            {this.state.first}  {this.props.name}
        </div>
    )
}
}

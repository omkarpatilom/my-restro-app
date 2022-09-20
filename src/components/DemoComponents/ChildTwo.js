import React, { Component } from 'react'

export default class ChildTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: this.props.name
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Veg</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Non - Veg</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Drinks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Others</a>
                    </li>
                </ul>



                <br></br>Child Two<br></br>
                {this.state.first}  {this.props.name}
            </div>
        )
    }
}

import React, { Component } from 'react'

 class RestroNavigation extends Component {
    render() {
        return (
            <div>

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

            </div>
        )
    }
}
export default RestroNavigation
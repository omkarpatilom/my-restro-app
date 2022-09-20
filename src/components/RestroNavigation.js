import React, { Component } from 'react'

class RestroNavigation extends Component {
    render() {
        return (
            <div>

                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link"  href="/">DashBoard</a>
                    </li><li className="nav-item">
                        <a className="nav-link" href="/vegItemsList">Veg</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/nonVegItemsList">Non - Veg</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/drinkItemsList">Drinks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cart">Cart</a>
                    </li>
                </ul>

            </div>
        )
    }
}
export default RestroNavigation
import React, { Component } from 'react'

class RestroNavigation extends Component {
    logout(e) {
        e.preventDefault();
        window.location = '/login'
    }
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light text-white  bg-transparent">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#"><b>Give a Meaningfull Life</b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/dashboard">DashBoard</a>
                                </li><li className="nav-item">
                                    <a className="nav-link text-white" href="/vegItemsList">Veg</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/nonVegItemsList">Non - Veg</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/drinkItemsList">Drinks</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/cart">Cart</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="/allOrders">All Orders</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="/reviews">Reviews</a>
                                </li>
                            </ul>
                            <form className="d-flex">

                                <button className="btn btn-outline-success" type="submit" onClick={this.logout.bind(this)}>Logout</button>
                            </form>
                        </div>
                    </div>
                </nav>


            </div>
        )
    }
}
export default RestroNavigation
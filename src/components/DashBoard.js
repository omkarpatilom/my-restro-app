import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import APICalls from '../services/APICalls';
class DashBoard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            first: "",
            cities: [

                { id: 1, name: "AA" }, { id: 2, name: "BB" }, { id: 3, name: "CC" }, { id: 2, name: "DDx" }
            ],
            items: []

        }
        this.editEmployee = this.editEmployee.bind(this);
    }
    componentDidMount() {
        APICalls.getItems().then((res) => {
            this.setState({ items: res.data });
        });
    }



    editEmployee() {
        // this.props.history.push(`/create`);
        window.location.href = "/create";
    }
    render() {

        return (



            <div className='card'>
                {/* nav bar  start*/}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/menu">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contactUs">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/aboutUs">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/feedback">Feedback</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/billing">Billing</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                {/* nav bar end */}



                <h2>DASHBOARD</h2>

                

                <br></br><br></br><br></br>
                



            </div>



        )
    }
}

export default DashBoard
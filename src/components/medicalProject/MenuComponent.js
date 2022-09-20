import React, { Component } from 'react';

import APICalls from '../services/APICalls';
export default  class MenuComponent extends Component {

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
        this.goToOrderPage = this.goToOrderPage.bind(this);
    }
    componentDidMount() {
        APICalls.getAllItems().then((res) => {
            this.setState({ items: res.data });
        });
    }


    goToOrderPage() {
        window.location.href = "/order";
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



                <h2>Menu</h2>

                <div>

                    {/* <ul>
                        {
                            this.state.cities.map(

                                (vv) => 
                                    <li key={vv.id}>{vv.name}</li>

                                
                            )
                        }
                    </ul> */}
                </div>

                <br></br><br></br><br></br>
                <div className="row">
                    <div className="col-sm-8"><div className='container '>
                        <table className="table table-bordered ">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">name</th>
                                    <th scope="col">price</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.items.map(
                                        (itms, index) =>
                                            <tr key={index}>
                                                <th scope="row">{itms.itemID}</th>
                                                <td>{itms.itemName}</td>
                                                <td>{itms.price}</td>
                                            </tr>
                                    )

                                }


                            </tbody>
                        </table>
                    </div></div>
                    <div className="col-sm-4"><button type="button" className="btn btn-primary" onClick={this.goToOrderPage} >Order Your Favorite Item</button></div>
                </div>
            </div>



        )
    }
}

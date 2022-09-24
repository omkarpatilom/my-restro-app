import React, { Component } from 'react'
import { Link } from "react-router-dom";




class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            first: "",

        }
        this.editEmployee = this.editEmployee.bind(this);
    }


    navigateToContacts() {
        return <Link to="/create"></Link>;
    };

    editEmployee() {
        // this.props.history.push(`/create`);
        window.location = "/create";
    }
    render() {
        return (



            <div >
                <h2>Login Component</h2>
                <div className="row">
                    <div className="col">
                        <a href='/'>Link1</a><br></br>
                        <a href='/'>Link1</a><br></br>
                        <a href='/'>Link1</a><br></br>
                    </div>
                    <div className="col-10">
                        {/* start */}


                        <div className="container">




                            <div className="row">
                                <div className="col-6">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src={'/pic1.jpg'} alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={'/pic2.jpg'} alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={'/pic3.jpg'} alt="Third slide" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>



                                </div>
                                <div className="col-6">


                                    {/* FORM  start*/}
                                    <form>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form2Example1" className="form-control" />
                                            <label className="form-label" htmlFor="form2Example1">Email address</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="password" id="form2Example2" className="form-control" />
                                            <label className="form-label" htmlFor="form2Example2">Password</label>
                                        </div>


                                        <div className="row mb-4">
                                            <div className="col d-flex justify-content-center">

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                                </div>
                                            </div>

                                            <div className="col">

                                                <a href="#!">Forgot password?</a>
                                            </div>
                                        </div>


                                        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>


                                        <div className="text-center">
                                            <p>Not a member? <a href="#!">Register</a></p>
                                            <p>or sign up with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>
                                    </form>

                                    {/* FROM end */}
                                </div>
                            </div>
                        </div>




                        {/* END */}
                    </div>



                    <div className="col">
                        <a href='/'>Link1</a><br></br>
                        <a href='/'>Link1</a><br></br>
                        <a href='/'>Link1</a><br></br>
                    </div>
                </div>

            </div>



        )
    }
}

export default LoginComponent
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class BillingComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
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
                          <a className="nav-link " href="#">Billing</a>
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



      <h2>BillingComponent</h2>

      

      <br></br><br></br><br></br>

      
  </div>
      
    )
  }
}

export default BillingComponent
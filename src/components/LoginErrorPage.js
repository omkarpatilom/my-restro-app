import React, { Component } from 'react'
import RestroFooter from './RestroFooter'

export default class LoginErrorPage extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">

            <br></br><br></br><br></br>

          </div>
          <div class="col-sm-4"></div>
        </div>
        <div className='container'>

          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-6">


            </div>
            <div className="col-sm-2"></div>

          </div>

        </div>
        <div className='row'>
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="alert alert-danger" role="alert">
              Please Logn With correct Credentials. <a href="/login" className="alert-link"> Please click here to login again</a>.
            </div>
          </div>
          <div className="col-sm-3" ></div>

        </div>
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">

            <br></br><br></br><br></br>

          </div>
          <div class="col-sm-4"></div>
          <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
      
                  <br></br><br></br><br></br>
      
                </div>
                <div class="col-sm-4"></div>
              </div><div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
      
                  <br></br><br></br><br></br>
      
                </div>
                <div class="col-sm-4"></div>
              </div>
        </div>
        <RestroFooter></RestroFooter>
      </div>
    )
  }
}

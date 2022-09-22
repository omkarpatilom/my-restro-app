import React, { Component } from 'react'

export default class LoginErrorPage extends Component {
  render() {
    return (
      <div>

        <div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-6">
              <div className="alert alert-danger" role="alert">
                Please Logn With correct Credentials. <a href="/login" className="alert-link"> Please click here to login again</a>.
              </div>

            </div>
            <div className="col-sm-2"></div>

          </div>

        </div>

      </div>
    )
  }
}

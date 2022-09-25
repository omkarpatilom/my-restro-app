import React, { Component } from 'react';
import APICalls from '../services/APICalls';
import RestroFooter from './RestroFooter';

class FeedbackComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: "",
      mail: "",
      address: "",

      contact: "",
      desc: ""
    }
  }
  descChange(e) {
    this.setState({
      desc: e.target.value
    });
  }

  contactChange(e) {
    this.setState({
      contact: e.target.value
    });
  }

  fullNameChange(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  mailChange(e) {
    this.setState({
      mail: e.target.value
    });
  }

  userAddressChange(e) {
    this.setState({
      userAddress: e.target.value
    });
  }




  submitForm(e) {
    e.preventDefault();
    let hospitalObject = {
      feedbackName: this.state.fullName,
      mail: this.state.mail,
      address: this.state.address,
      contact: this.state.contact,
      feedbackDesc: this.state.desc
    }
    APICalls.createFeedback(hospitalObject).then(

      window.location='/dashboard'
    )
    

  }
  render() {


    return (
      <div>

        <br></br>
        <div className="container">
          <div className="row">
            <h4 className='text-center text-white'>Give Us Your Valuable Feedback</h4><br></br>
            <div className="card col-md-6 offset-md-3 offset-md-3">

              <div className="card-body">
                <form >
                  <div className="form-group">
                    <label> Full Name: </label>
                    <input placeholder="Full Name" name="fullName" className="form-control" value={this.state.fullName} onChange={this.fullNameChange.bind(this)} />
                  </div>
                  <br></br>
                  {/* <div className="form-group">
                    <label> Mail: </label>
                    <input placeholder="Email" name="mail" className="form-control" value={this.state.mail} onChange={this.mailChange.bind(this)} />
                  </div><br></br>

                  <div className="form-group">
                    <label> Address: </label>
                    <input placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.userAddressChange.bind(this)} />
                  </div><br></br>



                  <div className="form-group">
                    <label> Contact: </label>
                    <input placeholder="Contact" name="contact" className="form-control" value={this.state.contact} onChange={this.contactChange.bind(this)} />
                  </div><br></br>

                  <div className="form-group">
                    <label> Opinion: </label>
                    <input type="text" placeholder="Opinion" name="contact" className="form-control" value={this.state.contact} onChange={this.contactChange.bind(this)} />
                  </div><br></br> */}
                  <div className="form-group">
                    <label> Opinion: </label>
                    <textarea  type="text" placeholder="Opinion" name="desc" className="form-control" value={this.state.desc} onChange={this.descChange.bind(this)} />
                  </div><br></br>




                  <button className="btn btn-outline-primary" style={{ marginLeft: "100px" }} onClick={this.submitForm.bind(this)}>Save</button>

                </form>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div >
        <RestroFooter/>
      </div >
    )
  }
}

export default FeedbackComponent
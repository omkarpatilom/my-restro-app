import React, { Component } from 'react'

import APICalls from '../services/APICalls';

import { ButtonContext } from './BasicConstant';
import RestroFooter from './RestroFooter';

export default class Register extends Component {


  constructor(props) {
    super(props);
    this.state = {
      successMessage: "",
      itemName: "",
      itemQuantity: "",
      items: [],
      cusID: this.props.id,
      role: this.props.customerID,
      clicks: 0
    }

  }
  bloodGroupChange(e) {
    this.setState({
      bloodGroup: e.target.value
    });
  }

  ageChange(e) {
    this.setState({
      age: e.target.value
    });
  }
  contactChange(e) {
    this.setState({
      contact: e.target.value
    });
  }
  roleChange(e) {
    this.setState({
      role: e.target.value
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
  passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  }


  genderChange(e) {
    this.setState({
      gender: e.target.value
    });
  } submitForm(e) {
    e.preventDefault();
    let hospitalObject = {
      fullName: this.state.fullName,
      mail: this.state.mail,
      userAddress: this.state.userAddress,
      password: this.state.password,
      gender: this.state.gender,
      contact: this.state.contact,
      age: this.state.age,
      bloodGroup: this.state.bloodGroup,
      role: this.state.role,
      yearofest: 0,
      membername: "",
      regNo: ""
    }

    console.log(hospitalObject);
    APICalls.createUser(hospitalObject).then(
      (res) =>
        console.log(res.data.fullName)

    )
  }
  static contextType = ButtonContext;
  render() {
    const { cusID, role } = this.context
    // console.log('BodyComponent cusID=', cusID, ' role=', role);

    return (
      <div className='text-white ' >
        <h2 className='text-center'>Register Your self</h2><br>

        </br>

        <br></br>

        <div className="row">
          <div className="col-sm-5"></div>
          <div className="col-sm-3 ">

            <div className="card-body ">

              <form >
                <div className="form-group">
                  <label> Full Name: </label>
                  <input placeholder="Full Name" name="fullName" className="form-control" value={this.state.fullName} onChange={this.fullNameChange.bind(this)} />
                </div>
                <br></br>
                <div className="form-group">
                  <label> Mail: </label>
                  <input placeholder="Email" name="mail" className="form-control" value={this.state.mail} onChange={this.mailChange.bind(this)} />
                </div><br></br>


                <div className="form-group">
                  <label> Address: </label>
                  <input placeholder="Address" name="userAddress" className="form-control" value={this.state.userAddress} onChange={this.userAddressChange.bind(this)} />
                </div><br></br>
                <div className="form-group">
                  <label> Password: </label>
                  <input type="password" placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.passwordChange.bind(this)} />
                </div><br></br>


                <div className="form-group">
                  <label> Contact: </label>
                  <input placeholder="Contact" name="contact" className="form-control" value={this.state.contact} onChange={this.contactChange.bind(this)} />
                </div><br></br>





                <button className="btn btn-outline-primary" style={{ marginLeft: "100px" }} onClick={this.submitForm.bind(this)}>Save</button>

              </form>
            </div>
          </div>
          <div className="col-sm-5"></div>
        </div><RestroFooter />
      </div>
    )
  }
}





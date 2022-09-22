import React, { Component } from 'react'

import APICalls from '../services/APICalls';

import { ButtonContext } from './BasicConstant';

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
        </div>
      </div>
    )
  }
}

{/* <div className='container '>
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Add to cart</th>
                  
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
                         <td>
                            <select onChange={this.changeQuantity.bind(this)} >
                              <option  >select</option>
                              <option value="1" >1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>

                          </td>
                         
                          
                          <td>
                            <button onClick={() => this.addToCart(itms.itemID, itms.itemName, itms.price, this.state.clicks, 13)}>Add Item</button>
                          </td>
                           <td>
                            <div><button class="btn btn-primary" onClick={this.IncrementItem} onChange={this.changeQuantity.bind(this)}>+</button> Add
                              <button class="btn btn-primary" onClick={this.DecreaseItem}>-</button></div>
                          </td> 
                        </tr>
                    )
                  }
                </tbody>
              </table>
            </div> */}




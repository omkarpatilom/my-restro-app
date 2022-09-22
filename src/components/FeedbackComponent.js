import React, { Component } from 'react';

class FeedbackComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          fullName: "",
          mail: "",
          userAddress: "",
          password: "",
          gender: "",
          contact: "",
          age: "",
          bloodGroup: "",
          role: ""
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
      }  submitForm(e) {
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
          regNo:""
        }
    
        console.log(hospitalObject);
        
      }
      render() {
    
        const roles = ["user", "admin","NGO","Donar","Hospital"]
        const genders = ["Male", "Female"]
    
        return (
          <div>
           
            <br></br>
            <div className="container">
              <div className="row">
                <h4 className='text-center'>Give Us Your Valuable Feedback</h4><br></br>
                <div className="card col-md-6 offset-md-3 offset-md-3">
    
                  <div className="card-body">
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
                        <label> Contact: </label>
                        <input placeholder="Contact" name="contact" className="form-control" value={this.state.contact} onChange={this.contactChange.bind(this)} />
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
          </div >
        )
      }
    }

export default FeedbackComponent
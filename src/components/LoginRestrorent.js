import React, { Component } from 'react'
import APICalls from '../services/APICalls';
import UserProvider, { ButtonContext } from './BasicConstant'

import BodyComponent from './BodyComponent'
import LoginErrorPage from './LoginErrorPage';


export default class LoginRestrorent extends Component {
    // static contextType = ButtonContext;
    static contextType = ButtonContext;
    constructor(props) {
        super(props)

        this.state = {
            forward: false,
            hideFlag: true,
            username: "",
            password: "",
            cusID: "",
            role: "",
            message: "",
            id: "",
            showLoginPage: true,
            showLoginErrorPage: false
        }
        this.callMethod = this.callMethod.bind(this)
    }
    changeUsername(e) {
        this.setState({ username: e.target.value })
    }
    changePassword(e) {
        this.setState({ password: e.target.value })
    }

    authenticate() {

        console.log('Login req : ', this.state.username, "  ", this.state.password);
        APICalls.login(
            {
                "mail": this.state.username,
                "password": this.state.password
            }
        ).then(
            (resp) => {
                console.log(" API Login response ", resp.data.role, ' ', resp.data.message, ' ', resp.data.id);
                this.setState({
                    message: resp.data.message,
                    role: resp.data.role,
                    id: resp.data.id
                })

            }




        );

        console.log("1------------");
        this.callMethod();

        console.log("2------------");

        console.log("Login response ", this.state.role, ' ', this.state.message, ' ', this.state.id);

        // this.context.changeUsername(3)
    }

    callMethod() {

        console.log('callMethod start ');
        console.log('mesage ==>>', this.state.message);
        if (this.state.message === "success") {
            console.log("checking condition");
            this.state.forward = true; //used for going forward page
            this.state.showLoginErrorPage = false;
            this.state.hideFlag = false;
        }
        else if (this.state.message === "invalid credentials") {

            this.state.forward = false; //used for going forward page
            this.state.showLoginErrorPage = true;
            this.state.hideFlag = false;
        }
        else {
            this.state.showLoginErrorPage = false
            this.state.hideFlag = false;
            this.state.forward = true;
        }
        console.log('callMethod ends');

    }
    render() {
        // const { cusID, chanegUserName } = this.context;
        const hideFlag = this.state.hideFlag;
        const showLoginErrorPage = this.state.showLoginErrorPage;
        const forwardFlag = this.state.forward;
        let button;
        if (hideFlag) {
            button =
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <form>

                            <div className="form-outline mb-4">
                                <input type="username" id="form2Example1" name='username' value={this.state.username} className="form-control" onChange={this.changeUsername.bind(this)} />
                                <label className="form-label" htmlFor="form2Example1">Email address</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password" id="form2Example2" name='password' value={this.state.password} className="form-control" onChange={this.changePassword.bind(this)} />
                                <label className="form-label" htmlFor="form2Example2">Password</label>
                            </div>



                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.authenticate.bind(this)}>Sign in</button>


                            <div className="text-center align-center">
                                <p>Not a member? <a href="/register">Register</a></p>
                                <p>or sign up with:</p>
                                {/* <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f">ddd</i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google">eee</i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter">wwef</i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button> */}
                            </div>
                        </form>


                    </div>
                    <div className="col-sm-4"></div>
                </div>;
        } else if (showLoginErrorPage == true && hideFlag == false && forwardFlag == false) {

            button = <><LoginErrorPage></LoginErrorPage></>
        }
        else if (showLoginErrorPage == false && hideFlag == false && forwardFlag == true) {
            button = <>
                <UserProvider customerID={this.state.id} role={this.state.role}></UserProvider>
                <BodyComponent customerID={this.state.id} role={this.state.role}></BodyComponent></>;
        }




        return (
            < div className='text-white' > <br></br>
                {this.state.role} {this.state.message} {this.state.id}
                < br ></br >
                {button}
            </div >
        )

    }
}
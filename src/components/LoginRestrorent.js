import React, { Component } from 'react'
import APICalls from '../services/APICalls';
import UserProvider, { ButtonContext } from './BasicConstant'

import BodyComponent from './BodyComponent'
import DemoBodyComponent from './DemoBodyComponent';
import LoginErrorPage from './LoginErrorPage';


export default class LoginRestrorent extends Component {
    // static contextType = ButtonContext;
    // static contextType = ButtonContext;
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
            message: "",
            showLoginPage: true,
            showLoginErrorPage: false
        }

    }
    changeUsername(e) {
        e.preventDefault();
        this.setState({ username: e.target.value })
    }
    changePassword(e) {
        e.preventDefault();
        this.setState({ password: e.target.value })
    }

    authenticate(e) {
        e.preventDefault();
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
    }


    render() {
        // const { id, role } = this.context

        const resposneMessage = this.state.message;
        const resposneRole = this.state.role;
        const resposneID = this.state.id;

        let divv;
        if (resposneMessage === '' && this.state.showLoginPage == true) {

            divv =
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        login {this.state.role} {this.state.message} {this.state.id}

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

                            </div>
                        </form>


                    </div>
                    <div className="col-sm-4"></div>
                </div>;
        }
        if (resposneMessage === 'success' && resposneRole === 'user') {
            // this.setState({
            //     showLoginPage: false
            // })
            this.state.showLoginPage = false;
            divv = <div>
             
                    <DemoBodyComponent></DemoBodyComponent>

             
                    


            </div>;
        }

        // if (resposneMessage === 'success' && resposneRole === 'admin') {
        //     this.setState({
        //         showLoginPage: false
        //     })
        //     divv = <div>

        //         <UserProvider customerID={this.state.id} role={this.state.role}></UserProvider>
        //         <BodyComponent customerID={this.state.id} role={this.state.role}></BodyComponent>
        //     </div>;
        // }
        if (resposneMessage === 'Invalide Credentials') {
            // this.setState({
            //     showLoginPage: false
            // })
            this.state.showLoginPage = false;
            divv = <div>
                <LoginErrorPage></LoginErrorPage>

            </div>;
        }





        return (
            < div className='text-white' > <br></br>


                {divv}
            </div >
        )

    }
}
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class SampleFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            itemName: "",
            quantity: "",
            city: "",
            userName: "",
            employee:{}
        }

        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        // this.handleSizeChange = this.handleSizeChange.bind(this);
        // this.handleAcceptanceChange = this.handleAcceptanceChange.bind(this);


    }
    chageUserID=(event)=>{
        this.setState({
            userID:event.target.value
        });
    }
    changeLastNameHandler = (event) => {

        this.setState({
            userName: event.target.value


        })
    }
    handleChanges = (e) => {
        const bio = e.target.value;
        this.setState({
            age: bio
        });
    };
    handleColorChange = (e) => {
        const color = e.target.value;
        this.setState({ city: color });
    };
   
    handleFormSubmit = (event) => {
        // event.e.preventDefault();
        let employee = { userName: this.state.userName, age: this.state.age, city: this.state.city,userID: this.state.userID };
        // console.log('employee => ' + JSON.stringify(employee));
        // alert(employee.age+'  '+employee.userName+'   '+employee.city+' '+employee.userID);
         EmployeeService.createEmployee(employee).then(
         (resp)=>{
            this.state.employee=resp.data;
            console.log(this.state.employee.userID);
            this.props.history.push('/list');
         }


         );



    }

    render() {
        const cities = ['','Hyd', 'Pune', 'Nagpur', 'Akola', 'Morshi'];
        const sizes = ['Small', 'Medium', 'Large', 'XL', 'XXL', '3XL'];
        return (
            <div><h1>CreateEmployee</h1><br></br>

                <form onSubmit={this.handleFormSubmit}>
                    <ul>
                    <li>
                            <label>ID:</label>
                            <input name="userID" type="text" value={this.state.userID} onChange={this.chageUserID} />
                        </li>
                        <li>
                            <label>Name:</label>
                            <input name="userName" type="text" value={this.state.userName} onChange={this.changeLastNameHandler} />
                        </li>
                        <li>
                            <label>Age:</label>
                            <input name="age" value={this.state.age} onChange={this.handleChanges} />
                        </li>
                        <li>
                            <label>City:</label>
                            <select name="city" value={this.state.city} onChange={this.handleColorChange}>
                                {cities.map((color, i) => <option key={i} value={color.toLowerCase()}>{color}</option>)}
                            </select>
                        </li>
                        {/* <li>
                            <label>T-shirt Size:</label>
                            {sizes.map((size, i) =>
                                <label key={i}>
                                    {size}
                                    <input
                                        name="size"
                                        value={size.toUpperCase()}
                                        checked={this.state.size === size.toUpperCase()}
                                        onChange={this.handleSizeChange}
                                        type="radio" />
                                </label>
                            )}
                        </li>
                        <li>
                            <label>
                                I accept the agreement
                                <input name="acceptedAgreement" type="checkbox" value={this.state.acceptAgreement} onChange={this.handleChanges} />
                            </label>
                        </li> */}
                        <li>
                            <label>
                                SUBMIT
                                <button>Submit</button>
                            </label>
                        </li>
                    </ul>
                </form><br></br>










                <a href="/">Go to Dashboard</a>



            </div>
        )
    }
}

export default SampleFormComponent
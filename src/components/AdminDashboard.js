import React, { Component } from 'react'

import APICalls from '../services/APICalls';

import { ButtonContext } from './BasicConstant';
import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';

 class AdminDashboard extends Component {
  static contextType = ButtonContext;

  constructor(props) {
    super(props);
    this.state = {
      successMessage: "",
      itemName: "",
      itemQuantity: "",
      items: [],
      propID: this.props.customerID,
      propRole: this.props.customerRole,
      cusRole: "",
      clicks: 0
    }
    this.addToCart = this.addToCart.bind(this);

  }

  componentDidMount() {
    APICalls.getAllItems().then((res) => {
      this.setState({ items: res.data });
    });
  }

  changeQuantity(e) {
    e.preventDefault();
    this.setState({
      itemQuantity: e.target.value
    })
    console.log('changeQuantity');

    // this.addItem(e);
  }
  addItem(e) {
    console.log('addItem');
    e.preventDefault();
    const newVegItem = this.state.itemName;
    const newVegItemQ = this.state.itemQuantity;
    const obj = {
      "itemName": newVegItem,
      'itemQuantity': newVegItemQ

    };
    const newArray = this.state.items.slice(); // Create a copy
    newArray.push(obj); // Push the object
    this.setState({
      items: newArray
    });
    console.log(this.state.items);

    this.state.itemQuantity = '';
    this.state.itemQuantity = '';

  }
  addToCart(id, name, price, quantity, IDD) {
    // chanegID(this.state.propID);
    alert('==>',id, ' ', name, ' ', price, ' ', quantity, ' ', IDD);
    this.setState({
      hideFlag: false,
      hideThisWindow: false
    })

    APICalls.createOrder({
      "itemID": id,
      "itemName": name,
      "itemQuantity": quantity,
      "price": price,
      "cusID": IDD
    }).then(
      alert("Added:", IDD)
    );

  }
  logout(e) {
    e.preventDefault();
    window.location = '/login'
}
deleteByID(id){
  
  
  APICalls.deleteItemByID(id).then()
  window.location = '/adminDashboard'
}
  

  render() {
    


    return (
      <div className='text-white text-center' >
       
       <nav className="navbar navbar-expand-lg navbar-light text-white  bg-transparent">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#"><b>Give a Meaningfull Life</b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/adminDashboard">DashBoard</a>
                                </li><li className="nav-item">
                                    <a className="nav-link text-white" href="/vegItemsList">Veg</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/nonVegItemsList">Non - Veg</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/drinkItemsList">Drinks</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/createItem">Add Item</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="/allOrders">All Orders</a>
                                </li>
                                
                            </ul>
                            <form className="d-flex">

                                <button className="btn btn-outline-success" type="submit" onClick={this.logout.bind(this)}>Logout</button>
                            </form>
                        </div>
                    </div>
                </nav>


        <h2>ADMIN Dhashboard</h2>


        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-6">
            <div className=' container  '>
              <table className="table table-bordered text-white">
                <thead >
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">Delete</th>
                   

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
                          <button onClick={() => this.deleteByID(itms.itemID)}>Delete Item</button>
                           </td>

                        
                        </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <RestroFooter></RestroFooter>
      </div>
          ) 
    }
  }
  export default AdminDashboard
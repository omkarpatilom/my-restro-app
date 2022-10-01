import React, { Component } from 'react'

import APICalls from '../services/APICalls';
import { ButtonContext } from './BasicConstant';
import CartDetails from './CartDetails';
import NonVegItemList from './NonVegItemList';
import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';
import VegItemList from './VegItemList';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDashboardFlag: true,
      showCartFlag: false,
      showVegFlag: false,
      showNonVegFlag: false,
      showReviewFlag: false,
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
    alert('==>', id, ' ', name, ' ', price, ' ', quantity, ' ', IDD);
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
  goToCart(e) {
    e.preventDefault();
    console.log('goToCart :', this.state.propID);
    this.setState({
      showVegFlag: false,
      showDashboardFlag: false,
      showNonVegFlag: false,
      showCartFlag: true,
      showReviewFlag: false
    })
  }
  goToDashboard(e) {
    e.preventDefault();
    this.setState({
      showVegFlag: false,
      showDashboardFlag: true,
      showNonVegFlag: false,
      showCartFlag: false,
      showReviewFlag: false
    })
  }
  goToReview(e) {
    e.preventDefault();
    this.setState({
      showVegFlag: false,
      showDashboardFlag: false,
      showNonVegFlag: false,
      showCartFlag: false,
      showReviewFlag: true
    })
  }
  goToVeg(e) {
    e.preventDefault();
    this.setState({
      showVegFlag: true,
      showDashboardFlag: false,
      showNonVegFlag: false,
      showCartFlag: false,
      showReviewFlag: false

    })
  }
  goToNonVeg(e) {
    e.preventDefault();
    this.setState({
      showVegFlag: false,
      showDashboardFlag: false,
      showNonVegFlag: true,
      showCartFlag: false,
      showReviewFlag: false
    })
  }
  static contextType = ButtonContext;

  render() {

    return (
      <div >
        <RestroNavigation></RestroNavigation>
        {/* nav bar start */}
        {/* <nav className="navbar navbar-expand-lg navbar-light text-white  bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#"><b>Give a Meaningfull Life</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                <li className="nav-item">
                  <a className="nav-link text-white" onClick={this.goToDashboard.bind(this)}>DashBoard</a>
                </li><li className="nav-item">
                  <a className="nav-link text-white" href="/vegItemsList" onClick={this.goToVeg.bind(this)}>Veg</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" onClick={this.goToNonVeg.bind(this)}>Non - Veg</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/drinkItemsList">Drinks</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" onClick={this.goToCart.bind(this)}>Cart</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="/allOrders">All Orders</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="/reviews" onClick={this.goToReview.bind(this)}>Reviews</a>
                </li>
              </ul>
              <form className="d-flex">

                <button className="btn btn-outline-success" type="submit" onClick={this.logout.bind(this)}>Logout</button>
              </form>
            </div>
          </div>
        </nav> */}

        {/* nav bar end */}
        {this.state.showDashboardFlag ?
          <>
          
          
          <div className="row text-white text-center"  >
            <h2>User Dashboard</h2>
            <div className="col-sm-2"></div>
            <div className="col-sm-6">
              <div className=' container  '>
                <table className="table  text-white">
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
                    {this.state.items.map(
                      (itms, index) => <tr key={index}>
                        <th scope="row">{itms.itemID}</th>
                        <td>{itms.itemName}</td>
                        <td>{itms.price}</td>
                        <td>
                          <select onChange={this.changeQuantity.bind(this)}>
                            <option>select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select></td>

                        <td><button onClick={() => this.addToCart(itms.itemID, itms.itemName, itms.price, this.state.itemQuantity, this.props.customerID)}>Add Item</button></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              </div></div></>
          
          :
    ''
  }

        {
  this.state.showCartFlag ? <CartDetails userID={this.state.propID}></CartDetails> : ''
}

{
  this.state.showVegFlag ? <VegItemList></VegItemList> : ''
}
{
  this.state.showNonVegFlag ? <NonVegItemList></NonVegItemList> : ''
}



<RestroFooter></RestroFooter>
      </div >
    )
  }
}
export default Dashboard
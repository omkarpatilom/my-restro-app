import React, { Component } from 'react'

import APICalls from '../services/APICalls';


import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';

 class Dashboard extends Component {


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
  

  render() {
    


    return (
      <div className='text-white text-center' >
        <RestroNavigation></RestroNavigation>
        <h2>User Dashboard</h2>


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
                            </select></td>

                          <td><button onClick={() => this.addToCart(itms.itemID, itms.itemName, itms.price, this.state.itemQuantity, this.props.customerID)}>Add Item</button></td>
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
  export default Dashboard
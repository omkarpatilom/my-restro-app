import React, { Component } from 'react'

import APICalls from '../services/APICalls';

import { ButtonContext } from './BasicConstant';

export default class BodyComponent extends Component {


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

  componentDidMount() {
    APICalls.getAllItems().then((res) => {
      this.setState({ items: res.data });
    });
  }

  changeQuantity(e) {
    this.setState({
      itemQuantity: e.target.value
    })
  }
  addItem(e) {
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
    console.log(id, ' ', name, ' ', price, ' ', quantity, ' ', IDD);
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
      alert("Added")
    );

  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    console.log(this.state.clicks);
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
    console.log(this.state.clicks);
  }
  static contextType = ButtonContext;
  render() {
    const { cusID, role } = this.context
    // console.log('BodyComponent cusID=', cusID, ' role=', role);

    return (
      <div className='text-white text-center' >
        <h2>DASHBOARD</h2><br>

        </br> 
       
        <br></br>
        {this.state.successMessage}
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-6">
            <div className='container '>
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
                          {/* <td>
                            <div><button class="btn btn-primary" onClick={this.IncrementItem} onChange={this.changeQuantity.bind(this)}>+</button> Add
                              <button class="btn btn-primary" onClick={this.DecreaseItem}>-</button></div>
                          </td> */}
                        </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import APICalls from '../services/APICalls';

import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';

class CartDetails extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            emptyFlag: false,
            itemName: "",
            itemQuantity: "",
            items: [],
            cusID: 33
        }
    }

    componentDidMount() {
        APICalls.getAllOrdersByCusID(13).then((res) => {
            console.log("ddddd  ",res.data.length);
            // res.data.length=0;
            if (res.data.length > 0) {
                this.setState({
                    items: res.data,
                });
            } else {
                this.setState({ emptyFlag: true });
            }

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
        }).then();

    }
    payNow(id) {
        APICalls.payNow(id).then()



    }
    render() {
       
     
        return (
            <div className='text-white text-center'>
                <RestroNavigation></RestroNavigation>
                <h2>Cart Details</h2><br>
                </br>
              

                {this.state.emptyFlag ?

                    <div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <div className="alert alert-danger" role="alert">
                                    Your cart is empty. <a href="/dashboard" className="alert-link"> Please click here to order Some items</a>.
                                </div>

                            </div>
                            <div className="col-sm-2"></div>

                        </div>

                    </div>

                    :
                    <div className="row text-white ">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-6">
                           
                            <div className='container '>
                                <table className="table table-bordered text-white text-center">
                                    <thead>
                                        <tr>



                                            <th scope="col">orderID</th>
                                            <th scope="col">itemName</th>
                                            <th scope="col">totalPrice</th>
                                            <th scope="col">itemQuantity</th>
                                            <th scope="col">itemPrice</th>
                                            <th scope="col">totalPrice</th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.items.map(
                                                (itms, index) =>
                                                    <tr key={index}>
                                                        <td>{itms.orderID}</td>
                                                        <td>{itms.itemName}</td>
                                                        <td>{itms.totalPrice}</td>
                                                        <td>{itms.itemQuantity}</td>
                                                        <td>{itms.itemPrice}</td>
                                                        <td>{itms.totalPrice}</td>

                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table><br></br><br></br>
                                {/* <button onClick={() => this.payNow(this.state.cusID)}>Pay Now </button> */}
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>

                }

<RestroFooter/>
            </div>
        )
    }
}

export default CartDetails
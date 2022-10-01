import React, { Component } from 'react'
import APICalls from '../services/APICalls';
import Billing from './Billing';

import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';

class CartDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emptyFlag: false,
            showCartFlag:true,
            itemName: "",
            itemQuantity: "",
            items: [],
            cusID: this.props.userID
        }
        console.log('====================================');
        console.log("cart details state : ", this.state.cusID);
        console.log("cart details props : ", this.props.userID);
        console.log('====================================');
    }

    componentDidMount() {
        console.log('cart componentDidMount  props:', this.props.userID);
        // APICalls.getAllOrdersByCusID(this.props.userID).then((res) => {
            APICalls.getAllOrdersByCusID(13).then((res) => {

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

    deleteOrderByID(id) {
        APICalls.deleteOrderByID(id).then(
            alert('Order Deleted')
        )
        window.location='/cart';

    }

    payNowByUserId(id) {
        console.log('====================================');
        console.log(' cart payNowByUserId : ', id);
        console.log('====================================');

        this.setState({
            showCartFlag:false
        })
        APICalls.payNow(id).then()
    }
    render() {


        return (
            <div className='text-white text-center'>
                <RestroNavigation></RestroNavigation>



                {this.state.emptyFlag ?

                    <div>
                        <h2>Cart Details</h2><br>
                        </br>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <div className="alert alert-danger" role="alert">
                                    Your cart is empty. <a href="/dashboard" className="alert-link"> Please click here to order Some items</a>.
                                </div>

                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div> : ''}

                {
                this.state.showCartFlag ?
                    <>
                        <div className="row text-white ">
                            <h2>Cart Details</h2><br>
                            </br>
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
                                                <th scope="col">Delete</th>
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
                                                            <td><button onClick={() => this.deleteOrderByID(itms.orderID)}>Delete</button></td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table><br></br><br></br>
                                    {/* <button onClick={() => this.payNowByUserId(this.state.cusID)}>Pay Now </button> */}
                                </div>
                            </div>
                            <div className="col-sm-2"> <button onClick={() => this.payNowByUserId(this.state.cusID)}>Place order now</button></div>
                        </div>
                    </> :
                    <>
                       
                    <Billing  cusID={this.state.cusID}></Billing>
                    </>
                   
                }

                <RestroFooter />
            </div>
        )
    }
}

export default CartDetails
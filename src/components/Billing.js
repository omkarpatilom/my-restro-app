import React, { Component } from 'react'
import APICalls from '../services/APICalls';
import { ButtonContext } from './BasicConstant';
import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';

class Billing extends Component {
    static contextType = ButtonContext;
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            cusID:this.props.cusID,
            totalAmount:0
        }
    }

    componentDidMount() {
        console.log('====================================');
        console.log('Billing props :', this.props.cusID);
        console.log('Billing sates :', this.props.cusID);
        // console.log('Billing props :');
        console.log('====================================');
        APICalls.getBill(13).then(
            (resp)=>
            this.setState({
                items:resp.data.orders,
                totalAmount:resp.data.totalAmount
            })

        )

    }



    render() {

        return (
            <div className='text-white'>
                {/* <RestroNavigation></RestroNavigation> */}
                <h2 className='text-center'>Billing</h2><br>
                </br>

                <div className="row text-white">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6">

                       <div className='container '>
                            <table className="table table-bordered text-white text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">orderID</th>
                                        <th scope="col">userID</th>
                                        <th scope="col">itemID</th>
                                        <th scope="col">itemQuantity</th>
                                        <th scope="col">priceWithQuantity</th>
                                        

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.items.map(
                                            (itms, index) =>
                                                <tr key={index}>
                                                    <td>{itms.orderID}</td>
                                                    <td>{itms.userID}</td>
                                                    <td>{itms.itemID}</td>
                                                    <td>{itms.itemQuantity}</td>
                                                    <td>{itms.priceWithQuantity}</td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table><br></br><br></br>
                            Total : {this.state.totalAmount}
                        </div>
                    </div>
                    <div className="col-sm-2">


                    </div>
                </div>


                <RestroFooter />
            </div>
        )
    }
}

export default Billing
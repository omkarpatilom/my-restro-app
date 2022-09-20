import React, { Component } from 'react';
import APICalls from '../services/APICalls';
import OrderDetailsCoomponent from './OrderDetailsCoomponent';

const ShowTable = (props) => {
        const { formData } = props;
        let rows = []
        if (formData) {
            for (var i = 0; i < formData.length; i++) {
                rows.push(<tr key={i}><td>{formData[i].vegItemName}</td><td>{formData[i].vegItemQuantity}</td>
                <td>{formData[i].nonVegItemName}</td><td>{formData[i].nonVegItemQuantity}</td>
                <td>{formData[i].drinkItemName}</td><td>{formData[i].drinkItemQuantity}</td>
                </tr>)
            }
            
        }
        return (<div><h4>Ordered Items</h4>
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">Veg</th>
                        <th scope="col">Veg Quantity</th>
                        <th scope="col">Non veg</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Drinks</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody></table></div>);
    }

export default ShowTable
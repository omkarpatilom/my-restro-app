import React, { Component } from 'react'
import DrinkItemList from './DrinkItemList'
import NonVegItemList from './NonVegItemList'
import VegItemList from './VegItemList'
import APICalls from '../services/APICalls';

export default class BodyComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemName: "",
      itemQuantity: "",
      items: [],
    }
  }

  componentDidMount() {
    APICalls.getAllItems().then((res) => {
      this.setState({ items: res.data });
    });
  }

  addItem(e) {
            e.preventDefault();
            const newVegItem = this.state.itemName;
            const newVegItemQ = this.state.itemQuantity;
            const obj = {
                "itemName":newVegItem,
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
  render() {
    return (
      <div>

        <h2>DASHBOARD</h2><br>
        </br>
        <div className="row">
          <div className="col-sm-8"><div className='container '>
            <table className="table table-bordered ">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">name</th>
                  <th scope="col">price</th>


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
                        <td><button>Add Item</button></td>
                      </tr>
                  )

                }


              </tbody>
            </table>
          </div></div>
          <div className="col-sm-4"><button type="button" className="btn btn-primary" >Order Your Favorite Item</button></div>
        </div>

        {/* <VegItemList/>
        <NonVegItemList/>
        <DrinkItemList/> */}
      </div>
    )
  }
}

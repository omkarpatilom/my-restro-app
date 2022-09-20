import React, { Component } from 'react'
import RestroFooter from './RestroFooter'
import RestroNavigation from './RestroNavigation'
import APICalls from '../services/APICalls';

class DrinkItemList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemName: "",
      itemQuantity: "",
      items: [],
    }
  }
  componentDidMount() {
    APICalls.getAllIColdDrinktems().then((res) => {
      this.setState({ items: res.data });
    });
  }
  render() {
    return (
      <div><RestroNavigation/>
      Drinks<br></br>
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
                      </tr>
                  )

                }


              </tbody>
            </table>
          </div></div>
          <div className="col-sm-4"><button type="button" className="btn btn-primary" >Order Your Favorite Item</button></div>
        </div>
      <RestroFooter/></div>
    )
  }
}
export default DrinkItemList
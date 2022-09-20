import React, { Component } from 'react'
import DrinkItemList from './DrinkItemList'
import NonVegItemList from './NonVegItemList'
import VegItemList from './VegItemList'
import APICalls from '../services/APICalls';
import img1 from '../images/pic1.jpg'

export default class DemoBodyComponent extends Component {
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
  render() {
    return (
      <div className='container'>

        <h2>DASHBOARD</h2><br>
        </br>

        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card">
              <img src="https://www.tutorialspoint.com/avro/images/apache-avro-mini-logo.jpg"     className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="data:image/png;base64,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" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title2</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={img1}  className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title 3</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title4</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title5</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title6</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>













        </div>

      </div>




    )
  }
}

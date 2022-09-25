import React, { Component } from 'react'
import DrinkItemList from './DrinkItemList'
import NonVegItemList from './NonVegItemList'
import VegItemList from './VegItemList'
import APICalls from '../services/APICalls';
import img1 from '../images/pic1.jpg'
import img2 from '../images/pic2.jpg'
import img3 from '../images/pic3.jpg'
import RestroNavigation from './RestroNavigation';
import CartDetails from './CartDetails';
import {ButtonContext} from './BasicConstant';

export default class DemoBodyComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideFlag: true,
      cusID: 0,
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
    const cardImgsTop = {
      "width": "20%",

      "object-fit": "contain"

    }
    return (
      <div className='container'>
        <RestroNavigation></RestroNavigation>
        <h2>DASHBOARDdd</h2><br>
    
        </br>

        

        {this.state.cusID}




        {this.state.hideFlag ? <>
          <br></br><h1>Menus</h1><br></br><br></br>

          <div className="container-fluid p-0 m-0 
                align-items-center 
                justify-content-center d-flex"
            style={{ "minHeight": "100vh" }}>


            <div className="row w-100 p-0 w-0">
              <br></br><br></br>

              <div className="col-lg-4 mb-2">
                <div className="card mx-auto" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src={img1}
                    alt="Card image cap" />

                  <div className="card-body">
                    <h5 className="card-title">
                      1
                    </h5>
                    <p className="card-text">
                      Geeks for Geeks is the best place
                      to improve your computer science
                      knowledge.
                    </p>


                    <a href="#" className="btn btn-success">
                      Click me
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-2">
                <div className="card mx-auto" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src={img1}
                    alt="Card image cap" />

                  <div className="card-body">
                    <h5 className="card-title">
                      2
                    </h5>
                    <p className="card-text">
                      Geeks for Geeks is the best place
                      to improve your computer science
                      knowledge.
                    </p>


                    <a href="#" className="btn btn-success">
                      Click me
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-2">
                <div className="card mx-auto" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src={img1}
                    alt="Card image cap" />

                  <div className="card-body">
                    <h5 className="card-title">
                      3
                    </h5>
                    <p className="card-text">
                      Geeks for Geeks is the best place
                      to improve your computer science
                      knowledge.
                    </p>


                    <a href="#" className="btn btn-success">
                      Click me
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-2">
                <div className="card mx-auto" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src={img1}
                    alt="Card image cap" />

                  <div className="card-body">
                    <h5 className="card-title">
                      4
                    </h5>
                    <p className="card-text">
                      Geeks for Geeks is the best place
                      to improve your computer science
                      knowledge.
                    </p>


                    <a href="#" className="btn btn-success">
                      Click me
                    </a>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 mb-2">
                <div className="card  mx-auto" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src={img2}
                    alt="Card image cap" />

                  <div className="card-body">
                    <h5 className="card-title">
                      5
                    </h5>

                    <p className="card-text">
                      Geeks for Geeks is the best place
                      to improve your computer science
                      knowledge.
                    </p>


                    <a href="#" className="btn btn-success">
                      Click me
                    </a>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 mb-2">
                <div className="card  mx-auto" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src={img3}
                    alt="Card image cap" />

                  <div className="card-body">
                    <h5 className="card-title">
                      6
                    </h5>

                    <p className="card-text">
                      Geeks for Geeks is the best place
                      to improve your computer science
                      knowledge.
                    </p>


                    <a href="#" className="btn btn-success">
                      Click me
                    </a>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="col-lg-4 mb-2">
                <div className="card  mx-auto" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src={img3}
                    alt="Card image cap" />

                  <div className="card-body">
                    <h5 className="card-title">
                      7
                    </h5>

                    <p className="card-text">
                      Geeks for Geeks is the best place
                      to improve your computer science
                      knowledge.
                    </p>


                    <a href="#" className="btn btn-success">
                      Click me
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className="card  mx-auto" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src={img3}
                    alt="Card image cap" />

                  <div className="card-body">
                    <h5 className="card-title">
                      6
                    </h5>

                    <p className="card-text">
                      Geeks for Geeks is the best place
                      to improve your computer science
                      knowledge.
                    </p>


                    <a href="#" className="btn btn-success">
                      Click me
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className="card  mx-auto" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src={img3}
                    alt="Card image cap" />

                  <div className="card-body">
                    <h5 className="card-title">
                      6
                    </h5>

                    <p className="card-text">
                      Geeks for Geeks is the best place
                      to improve your computer science
                      knowledge.
                    </p>


                    <a href="#" className="btn btn-success">
                      Click me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </div></>

          : <CartDetails />}

        <br></br>


        <br></br>
        <br></br>



      </div>)
  }
}

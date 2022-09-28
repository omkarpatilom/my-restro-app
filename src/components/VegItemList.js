import React, { Component } from 'react'
import RestroFooter from './RestroFooter'
import RestroNavigation from './RestroNavigation'
import APICalls from '../services/APICalls';
import img1 from '../images/pic1.jpg'
import img2 from '../images/pic2.jpg'
import img3 from '../images/pic3.jpg'

import BodyComponent from './Dashboard';
import { ButtonContext } from './BasicConstant';

class VegItemList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hideFlag: true,
      itemName: "",
      itemQuantity: "",
      items: [],

      hideThisWindow: true
    }
  }

  addToCart(e) {

    console.log(e);
    this.setState({
      hideFlag: false,
      hideThisWindow: false,


    })

  }
  componentDidMount() {
    APICalls.getAllNonVegItems().then((res) => {
      this.setState({ items: res.data });
    });
  }
  static contextType=ButtonContext;
  render() {
    const {id,role,changeID}=this.context
    return (
      <div className=' text-center'>



        {this.state.hideThisWindow ?
          <>
          
          <RestroNavigation></RestroNavigation>
          {id} {role}
           <br></br><h1 className=' text-white'>VEGETERIAN BASKET</h1><br></br><br></br>
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
                        Dal Tadka
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>

                      <button value={1} className="btn btn-success" onClick={() => this.addToCart(1)}>Add to Cart</button>

                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-2">
                  <div className="card mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img1}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Dal Fry
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(2)}>Add to Cart</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-2">
                  <div className="card mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img1}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Dal Makhani
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(3)}>Add to Cart</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-2">
                  <div className="card mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img1}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Jira Rice
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(4)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <br></br><br></br><br></br><br></br>


                <div className="col-lg-4 mb-2">
                  <div className="card  mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img2}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Rice
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(5)}>Add to Cart</button>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 mb-2">
                  <div className="card  mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img3}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Wheet Roti
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(6)}>Add to Cart</button>
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
                        Veg Biryani
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(7)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-2">
                  <div className="card  mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img3}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Paneer Curry
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(8)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-2">
                  <div className="card  mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img3}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Paneer Butter Masala
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(9)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> </> : <BodyComponent />}
        <br></br>

        <RestroFooter />
      </div>
    )
  }
}
export default VegItemList
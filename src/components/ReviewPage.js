import React, { Component } from 'react'
import APICalls from '../services/APICalls';
import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';

class ReviewPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      desc: "",
      items: [],

      hideThisWindow: true
    }
  }


  componentDidMount() {
    APICalls.getAllFeedbacks().then((res) => {
      this.setState({ items: res.data });
    });
  }
  render() {

    return ( 
      <div className=' text-center' >
        <RestroNavigation></RestroNavigation>




        <br></br><h1 className=' text-white'>Reviews</h1><br></br><br></br>




        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h4></h4>
          </div>
          <div className="col-sm-2"></div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6" >

            {
              this.state.items.map(
                (itms, index) =>
                  <div class="card-columns" key={index}>
                    <div class="card bg-light mb-3">
                      <div class="card-body ">
                        <h4 className="card-title text-center">{itms.feedbackName}</h4>
                        <p className="card-text text-left">
                          <br></br>
                          {itms.feedbackDesc}
                          <br></br>                        </p>
                        <p><b></b></p><br></br>
                       
                      </div>
                    </div>
                    <br></br>
                  </div>


              )
            }

          </div>
          <div className="col-sm-3" ></div>
        </div><RestroFooter />
      </div >
    )
  }
}
export default ReviewPage
import React, { Component } from 'react';
import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';
class ContactUs extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className='card' >
        <RestroNavigation></RestroNavigation>




        <h2>CONTACT US</h2>



        <br>

        </br>


        <br></br>

        <h4> Our team is here to help you</h4>





        <br />
        <div className="row">
          <div className="col"></div>
          <div className="col">

            <div className="card" style={{ "width": "350px" }}>
              <img className='text-center rounded-circle' src={`${process.env.PUBLIC_URL}/images/collage.jpeg`} style={{ "width": "9", "height": "50" }} alt="logo" />

              <div className="card-body text-dark">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">
                  <b>1.Technical Support</b> <br></br>
                  Customer experiencing technical issues,
                  then please feel free to contact our Technical Support Team<br></br> @ 9999999999
                </p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div>
          </div>

          <div className="col"><div className="card" style={{ "width": "350px" }}>
            <img className='text-center' src={`${process.env.PUBLIC_URL}/images/collage.jpeg`} style={{ "width": "9", "height": "50" }} alt="logo" />

            <div className="card-body text-dark">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">
                <b>2.Pricing, Billing Issue</b> <br></br>
                Customer facing any issue regarding price and billing or need help in managing account the please free to call our Account Managing Team<br></br> @ 9999999999
              </p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div></div>

          <div className="col">
            <div className="card" style={{ "width": "350px" }}>
              <img className='text-center' src={`${process.env.PUBLIC_URL}/images/collage.jpeg`} style={{
                "width": "9", "height": "50",
                "borderRadius": "50%"
              }} alt="logo" />

              <div className="card-body text-dark">
                <h4 className="card-title">John Doe</h4>



                <p className="card-text">
                  <b> 3.Managing Staff</b> <br></br>
                  If customer need any information regarding our restaurant then please free to contact our Managing Staff<br></br> @ 9999999999
                </p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div></div>
          <div className="col"></div>
        </div>
        <br></br><br></br><br></br><br></br>



        <RestroFooter/>
      </div>




    )
  }
}

export default ContactUs
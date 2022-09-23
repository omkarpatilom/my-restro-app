import React, { Component } from 'react';
class ContactUs extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div  >




        <h2>CONTACT US</h2><br></br> <br></br>

        <h4> Our team is here to help you</h4>



        <br></br><br></br><br></br>

        <br />
        <div className="row">
          <div className="col">1 of 6</div>
          <div className="col">

            <div className="card" style={{ "width": "288px" }}>
              <img className='text-center rounded-circle' src={`${process.env.PUBLIC_URL}/images/collage.jpeg`} style={{ "width": "9", "height": "50" }} alt="logo" />

              <div className="card-body text-dark">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div>
          </div>
          <div className="col">
            space
          </div>
          <div className="col"><div className="card" style={{ "width": "288px" }}>
            <img className='text-center' src={`${process.env.PUBLIC_URL}/images/collage.jpeg`} style={{ "width": "9", "height": "50" }} alt="logo" />

            <div className="card-body text-dark">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div></div>
          <div className="col">
            cpave
          </div>
          <div className="col">
            <div className="card" style={{ "width": "288px" }}>
              <img className='text-center' src={`${process.env.PUBLIC_URL}/images/collage.jpeg`} style={{ "width": "9", "height": "50" }} alt="logo" />

              <div className="card-body text-dark">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div></div>
          <div className="col">6 of 6</div>
        </div>
        <br></br><br></br><br></br><br></br>
        <div id="demo" className="carousel slide" data-ride="carousel">

          
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

        
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img  alt="Los Angeles" src={`${process.env.PUBLIC_URL}/images/image-restro (1).jpeg`}/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/images/image-restro (2).jpeg`}alt="Chicago"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/images/image-restro (3).jpeg`} alt="New York"/>
            </div>
          </div>

         
          <a className="carousel-control-prev" href="/" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="/" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>

        </div>
      </div>




    )
  }
}

export default ContactUs
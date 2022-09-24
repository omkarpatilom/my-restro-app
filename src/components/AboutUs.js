import React, { Component } from 'react';
import RestroFooter from './RestroFooter';
import RestroNavigation from './RestroNavigation';
class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='text-white'>
        {/* nav bar  start*/}

        {/* nav bar end */}
<RestroNavigation></RestroNavigation>


        <h2>ABOUT US</h2>
        <h1>Hello World!</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>The columns will automatically stack on top of each other when the screen is less than 768px wide.</p>
        <div className="row">
          <div className="col-sm-1" style={{ "background-color": "lavender" }}>.col-sm-4</div>
          <div className="col-sm-10" style={{ "background-color": "red" }} >
            <p>Who we are? <br></br>
              We're one Team... <br></br>
              There's no "I" in SOONap_Coders. The only way we'll succeed is by solving problems together and sharing lessons along the way. As individuals we own our actions, support and respect each other and embrace our differences.</p>


          </div>
          <div className="col-sm-1" style={{ "background-color": "blue" }}>.col-sm-4</div>
        </div>

        <br></br><br></br>
        <div className="row">
          <div className="col-sm-2" style={{ "background-color": "lavender" }}>.col-sm-4</div>
          <div className="col-sm-8" style={{ "background-color": "red" }} >
            <img className='text-center' src={`${process.env.PUBLIC_URL}/images/collage.jpeg`} style={{ "width": "9", "height": "50" }}
              alt="logo" />
          </div>
          <div className="col-sm-2" style={{ "background-color": "blue" }}>.col-sm-4</div>
        </div>
        <br></br><br></br><br></br>
        <div className="row">
          <div className="col-sm-2" style={{ "background-color": "lavender" }}>.col-sm-4</div>
          <div className="col-sm-8" style={{ "background-color": "red" }} >
            <p>


              The SOONap_Coders Restaurant brings an exotic oriental fragrance in Pune – India. The restaurant was initially set up with on binding and 10 workers in India in the year 2016 as a Start Up.
              Its interior design represents elegant and precisely measured fusion between ottoman art and custom designed objects. You are lead to the inner space through ottoman arcs and hanging wooden ornaments, that brings you to warm and cozy space with authentic Turkish carpets covering the walls and small tables surrounded with cushions sitting. That atmosphere gives you the unmistakable sensation of an oriental bazaar – where owners always invite you to sit down in carpet cover room, for a tea and chat, before discussing a purchase.Various shades of torques, earthly tones, exposed wood and tender tinge of gray are the palate notes that hold this place atmosphere in the warmth embrace of comfort. Every detail of the interior design is inspired by the Orient and the ottoman art. The lightning solution features custom made lamps in the shape of fez or nargile base. The floors are covered with mosaic tiles with ottoman and Iznik motifs. The decorative cooper elements on the walls and counter tops are from traditional folk- life style. But there is again the eclectic fusion of eras – the exposed, sculpture- like, pluming on the roof, the clean, simple lines of the chair design and the table bases.
            </p>


          </div>
          <div className="col-sm-2" style={{ "background-color": "blue" }}>.col-sm-4</div>
        </div>

        <br></br><br></br><br></br>
        <div className="row">
          <div className="col-sm-2" style={{ "background-color": "lavender" }}>.col-sm-4</div>
          <div className="col-sm-8" style={{ "background-color": "red" }} >

            <h4>Restaurant Timings:</h4>
            <p className='text-center'>


              Week Days - Open<br></br>
              Tue-Thurs : 9:00 AM  to 11:00 PM<br></br>
              Delivery : 10:00 AM to 10:30 PM<br></br>
              <br></br>
              Weekends - Open<br></br>
              Fri-Sun : 10:00 AM to 12:30 PM<br></br>
              Delivery: 10:30 AM to 12:00 PM <br></br>
              <br></br>
              Mon - Closed


            </p>


          </div>
          <div className="col-sm-2" style={{ "background-color": "blue" }}>.col-sm-4</div>
        </div>









        <RestroFooter/>

      </div>


    )
  }
}

export default AboutUs
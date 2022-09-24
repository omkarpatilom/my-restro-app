import React, { Component } from 'react'
import SmallIconsCopmonent from './SmallIconsCopmonent'

class RestroFooter extends Component {
  render() {
    return (


      // <div classNameName="footer">
      //     <h3>@CopyRight</h3>
      // </div>

      // <footer className="footer mt-auto py-3 bg-light">
      //     <div className="container">
      //         <span className="text-muted">Place sticky footer content here.</span>
      //     </div>
      // </footer>

      // <div classNameName="card text-center">
      //     <div classNameName="card-footer text-muted">
      //         @CopyRight
      //     </div>
      // </div>
      // <div classNameName="card text-center" style={{"width": "18rem"}}>
      //     <div classNameName="card-body">
      //         <h5 classNameName="card-title">Special title treatment</h5>
      //         <p classNameName="card-text">With supporting text below as a natural lead-in to additional content.</p>
      //         <a href="#" classNameName="btn btn-primary">Go somewhere</a>
      //     </div>
      // </div>

      // <div classNameName="card text-center">
      //     <div classNameName="card-footer text-muted" >
      //         2 days ago
      //     </div>
      // </div>


      // <footer className="page-footer font-small cyan darken-3">


      //     <div className="container">


      //         <div className="row">


      //             <div className="col-md-12 py-5">
      //                 <div className="mb-5 flex-center">


      //                     <a className="fb-ic">
      //                         <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      //                     </a>

      //                     <a className="tw-ic">
      //                         <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      //                     </a>

      //                     <a className="gplus-ic">
      //                         <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      //                     </a>

      //                     <a className="li-ic">
      //                         <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      //                     </a>

      //                     <a className="ins-ic">
      //                         <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      //                     </a>

      //                     <a className="pin-ic">
      //                         <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
      //                     </a>
      //                 </div>
      //             </div>


      //         </div>


      //     </div>


      //     <div className="footer-copyright text-center py-3">© 2020 Copyright:
      //         <a href="/"> MDBootstrap.com</a>
      //     </div>


      // </footer>


      // 1111111111111111
      //     <footer className="page-footer  blue pt-4">


      //       <div className="container-fluid text-center text-md-left">


      //         <div className="row">


      //           <div className="col-md-6 mt-md-0 mt-3">


      //             <h5 className="text-uppercase">Footer Content</h5>
      //             <p>All funds raised by Sightsavers may be pooled together and allocated towards eye care, education and social inclusion initiatives across India.
      //               © 2021 Sightsavers is registered in India as a "Royal Commonwealth Society for the Blind" | Registration No. E4330.</p>

      //           </div>





      //           <div className="col-md-3 mb-md-0 mb-3">


      //             <h5 className="text-uppercase">Links</h5>

      //             <ul className="list-unstyled">
      //               <li>
      //                 <a href="/aboutUs">About Us</a>
      //               </li>
      //               <li>
      //                 <a href="/contactUs">Contact Us</a>
      //               </li>
      //               <li>
      //                 <a href="/feedback">Give us a feedback</a>
      //               </li>

      //             </ul>

      //           </div>


      //           {/* <div className="col-md-3 mb-md-0 mb-3">


      //   <h5 className="text-uppercase">Links</h5>

      //   <ul className="list-unstyled">
      //     <li>
      //       <a href="#!">Link 1</a>
      //     </li>
      //     <li>
      //       <a href="#!">Link 2</a>
      //     </li>
      //     <li>
      //       <a href="#!">Link 3</a>
      //     </li>
      //     <li>
      //       <a href="#!">Link 4</a>
      //     </li>
      //   </ul>

      // </div> */}


      //         </div>


      //       </div>



      //       <div className="footer-copyright text-center py-3">© 2020 Copyright:
      //         <a href="/">www.google.com</a>
      //       </div>

      //     </footer>



      <footer className="w-100 py-4 flex-shrink-0 text-white">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">FB.</h5>
              <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">Bootstrapious.com</a></p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li><a href="/aboutUs">About Us</a></li>
                <li><a href="/contactUs">contact Us</a></li>
                <li><a href="/feedback">FeedBack</a></li>
                
              </ul>
            </div>
            
            <div className="col-lg-4 col-md-6 text-white">
              <h5 className="text-white mb-3">Please follow us on :</h5>
              <p className="small  text-white">our social media channels</p>
              <SmallIconsCopmonent></SmallIconsCopmonent> <br></br>
              <form action="#">
                <div className="input-group mb-3">
                  <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>


    )
  }
}
export default RestroFooter

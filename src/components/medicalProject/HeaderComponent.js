import React, { Component } from 'react';


class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      // <Navbar bg="light" variant="light">
      //   <Container>
      //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //     <Nav className="me-auto">
      //       <Nav.Link href="#home">Home</Nav.Link>
      //       <Nav.Link href="#features">Features</Nav.Link>
      //       <Nav.Link href="#pricing">Pricing</Nav.Link>
      //     </Nav>
      //   </Container>
      // </Navbar>
      <div className="card text-center" style={{"backgroundColor": "coral"}}>
        <div className="card-header">

          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4"><h1>RESTAURANT DETAILS</h1></div>
            <div className="col-sm-4">
              <button className='btn btn-primary'>Log Out</button>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default HeaderComponent
import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (


            // <div className="footer">
            //     <h3>@CopyRight</h3>
            // </div>

            // <footer class="footer mt-auto py-3 bg-light">
            //     <div class="container">
            //         <span class="text-muted">Place sticky footer content here.</span>
            //     </div>
            // </footer>

            // <div className="card text-center">
            //     <div className="card-footer text-muted">
            //         @CopyRight
            //     </div>
            // </div>
            <footer className="footer">
                <span className="text-muted text-center text-dark">All Rights Reserved 2020 @JavaGuides</span>
            </footer>


        )
    }
}

export default FooterComponent
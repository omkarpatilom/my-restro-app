import React, { Component } from 'react'

export default class GetAllComponent extends Component {
    render() {
        return (



            <div >
                <h2>GetAllComponent</h2>
                <div className="row">
                    <div className="col">
                        <a href='/'>Link1</a><br></br>
                        <a href='/'>Link1</a><br></br>
                        <a href='/'>Link1</a><br></br>
                    </div>
                    <div className="col-10">
                        {/* start */}


                        DATA COMES HERE



                        {/* END */}
                    </div>



                    <div className="col">
                        <a href='/'>Link1</a><br></br>
                        <a href='/'>Link1</a><br></br>
                        <a href='/'>Link1</a><br></br>
                    </div>
                </div>

            </div>



        )
    }
}

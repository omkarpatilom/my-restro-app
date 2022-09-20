import React, { Component } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

export default class ParentOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: "nikhil",
            flag: false,
            flag1: false
        }
    }
    showHide(e) {
        this.setState({ flag: true, flag1: true })
    }
    render() {
        let { flag1 } = this.state;
        return (
            <div>
                Parent
                <button onClick={this.showHide.bind(this)}>Show/Hide</button><br></br>
                <br></br>

                {(() => {
                    if (flag1) {
                        return <button>Logout</button>;
                    } else {
                        return <button>Login</button>;
                    }
                })()}

{
                    (this.state.flag) ? <ChildOne name={this.state.first} /> : <ChildTwo name={this.state.first} />
                }
                <br></br>





            </div>
        )
    }
}

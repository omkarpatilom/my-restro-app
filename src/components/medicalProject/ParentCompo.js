import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentCompo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first: "",
      flag:false
    }
  }
  getRenderTable() {
    console.log("getRenderTable",this.state.first);
    this.setState({
      first: "ankur",
      flag:true
    });
 
   
  }
  render() {

    return (
      <div>
      <div>ParentCompo<br>
      </br>
        <p>Name:  {this.state.first}</p>
        <button onClick={this.getRenderTable.bind(this)}>
          CLick TO send Data</button>
      </div>
      {this.state.flag==true?   <ChildComp par={this.state.first}></ChildComp>:''}
   
      </div>
    )
  }
}

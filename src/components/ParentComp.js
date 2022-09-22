import React, { Component } from 'react'
import ChildComp from './ChildComp';
//  const Authcontxt=React.createContext();
class ParentComp extends Component {
    state={
        "name":"ankur",
        "age":12
    }
  render() {
    const {name,age}=this.state
    return (
      <div>ParentComp


            <ChildComp></ChildComp>
      </div>
    )
  }
}



export default ParentComp

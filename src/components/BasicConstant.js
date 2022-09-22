
import React, { Component } from 'react'
export const ButtonContext = React.createContext();
export const UserConsumer = ButtonContext.Consumer;
export default class UserProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cusID: this.props.customerID,
      role:this.props.role
    }
    console.log('Userprovide states ', this.state.cusID,' role ',this.state.role);
  }
  // chanegUserName = (newUser) => {
  //   console.log(newUser);
  //   this.setState(({ cusID: newUser }))

  // }
  render() {
    const { children } = this.props
    const { cusID , role} = this.state
    const { chanegUserName } = this
    return (
      <div>

        <ButtonContext.Provider value={{ cusID, role }}>
          {children}

        </ButtonContext.Provider>
      </div>
    )
  }
}


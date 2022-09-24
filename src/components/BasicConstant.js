
import React, { Component } from 'react'
export const ButtonContext = React.createContext();
export const UserConsumer = ButtonContext.Consumer;
export default class UserProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      role:0
    }
    console.log('Userprovide states ', this.state.id,' role ',this.state.role);
  }
  // chanegUserName = (newUser) => {
  //   console.log(newUser);
  //   this.setState(({ cusID: newUser }))

  // }
  render() {
    const { children } = this.props
    const { id  , role} = this.state
    
    return (
      <div>

        <ButtonContext.Provider value={{ id, role }}>
          {children}

        </ButtonContext.Provider>
      </div>
    )
  }
}


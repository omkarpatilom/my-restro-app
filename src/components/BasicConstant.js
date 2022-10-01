
import React, { Component } from 'react'
export const ButtonContext = React.createContext();
export const UserConsumer = ButtonContext.Consumer;
export default class UserProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "22",
      role:"nonew"
    }

    this.changeID=this.changeID.bind(this)
    console.log('Userprovide states ', this.state.id,' role ',this.state.role);
  }
  changeID = (newId) => {
    console.log('calling changeID ',newId);
    this.setState(({ id: newId }))

  }
  render() {
    const { children } = this.props
    const { id  , role} = this.state
    const{changeID}=this
    
    return (
      <div>
        
        <ButtonContext.Provider value={{ id, role,changeID }}>
          {children}

        </ButtonContext.Provider>
      </div>
    )
  }
}


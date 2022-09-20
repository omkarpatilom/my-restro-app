import React, { Component } from 'react'
import RestroFooter from './RestroFooter'
import RestroNavigation from './RestroNavigation'

class CartDetails extends Component {
  render() {
    return (
      <div>
        <RestroNavigation/>
        CartDetails
        <RestroFooter/>
        </div>
    )
  }
}
export default CartDetails
import React, { Component } from 'react'
import MenuItem from './menuItem'

class Menu extends Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export { MenuItem }

export default Menu

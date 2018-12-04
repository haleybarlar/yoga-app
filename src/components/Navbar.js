import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


class Navbar extends Component {

  state = {
    activeItem: ''
  }

  handleItemClick = (event, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu secondary>
          <Menu.Item exact name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} as={NavLink} to="/"/>
          <Menu.Item name='All Poses' active={activeItem === 'allposes'} onClick={this.handleItemClick} as={NavLink} to="/student/index"/>
          <Menu.Item name='My Class' active={activeItem === 'myclass'} onClick={this.handleItemClick} as={NavLink} to="/student/class"/>
        </Menu>
      </div>
    )
  }
}

export default Navbar;

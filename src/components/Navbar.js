import React, { Component } from 'react';
import Student from './Student.js'
import StudentForm from './StudentForm.js'
import PoseIndex from './PoseIndex.js'
import HomeContainer from './HomeContainer.js'
import MyClass from './MyClass.js'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";


class Navbar extends Component {

  state = {
    activeItem: 'home'
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
          <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} as={NavLink} to="/"/>
          <Menu.Item name='All Poses' active={activeItem === 'allposes'} onClick={this.handleItemClick} as={NavLink} to="/student/index"/>
          <Menu.Item name='My Class' active={activeItem === 'myclass'} onClick={this.handleItemClick} as={NavLink} to="/student/class"/>
          <Menu.Item name='Display Poses' active={activeItem === 'display'} onClick={this.handleItemClick} as={NavLink} to="/student/display"/>
        </Menu>
      </div>
    )
  }
}

export default Navbar;

import React, { Component } from 'react';
import StudentForm from './StudentForm.js'
import PoseIndex from './PoseIndex.js'
import HomeContainer from './HomeContainer.js'
import MyClass from './MyClass.js'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";


class Filter extends Component {

  state = {
    changeValue: ""
  }

  handleChange = (event) => {
    this.setState({
      changeValue: event.target.textContent
    }, () => this.props.handleChange(event, this.state.changeValue))
  }


  render() {
    let levelOptions = [
      {
        text: 'Beginner',
        value: 'Beginner',
      },
      {
        text: 'Intermediate',
        value: 'Intermediate',
      },
      {
        text: 'Advanced',
        value: 'Advanced',
      }
    ]

    return (
      <div>
        <Dropdown placeholder='Level' fluid selection options={levelOptions} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Filter;

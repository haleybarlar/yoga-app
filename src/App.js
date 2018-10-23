import React, { Component } from 'react';
import './App.css';
import Student from './components/Student.js'
import StudentForm from './components/StudentForm.js'
import PoseIndex from './components/PoseIndex.js'
import HomeContainer from './components/HomeContainer.js'
import Navbar from './components/Navbar.js'
import MyClass from './components/MyClass.js'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";


class App extends Component {

  state = {
    poses: [],
    filteredPoses: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/poses')
    .then(resp => resp.json())
    .then(data => this.setState ({
      poses: data.data
    }))
  }

  handleChange = (event, value) => {
    const newArray = [...this.state.poses]
    const filteredPoses = newArray.filter(pose => pose.attributes.level.includes(value.toLowerCase().toString()))
    if (value === undefined) {
      this.setState({
        poses: newArray
      })
    } else {
      this.setState({
        filteredPoses: filteredPoses
      })
    }
  }

  render() {

    return (
      <div>
        <Navbar poses={this.state.poses} />

          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/index" render={() => < PoseIndex poses={this.state.poses} />} />
            <Route path="/student" render={() => < Student poses={this.state.poses} handleChange={this.handleChange} filteredPoses={this.state.filteredPoses}/>} />
          </Switch>
      </div>
    )
  }
}

export default App;

// <Switch>
//   <Route exact path="/poseindex" render={() => < PoseIndex poses={this.state.poses}/>} />
//   <Route exact path="/student" render={() => < Student poses={this.state.poses}/>} />
//   <Route path="/" component={HomeContainer} />
// </Switch>

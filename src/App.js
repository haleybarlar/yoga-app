import React, { Component } from 'react';
import './App.css';
import Student from './components/Student.js'
import PoseIndex from './components/PoseIndex.js'
import HomeContainer from './components/HomeContainer.js'
import Navbar from './components/Navbar.js'
import { Route, Switch } from "react-router-dom";


class App extends Component {

  state = {
    poses: [],
    filteredPoses: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/poses')
    .then(resp => resp.json())
    .then(data => this.setState ({
      poses: data.data,
      filteredPoses: data.data
    }))
  }

  handleChange = (event, value) => {
    const newArray = [...this.state.poses]
    const filteredPoses = newArray.filter(pose => pose.attributes.level.includes(value.toLowerCase().toString()))
    if (value === undefined || value === "BeginnerBeginnerIntermediateAdvanced") {
      this.setState({
        poses: newArray
      })
    } else {
      this.setState({
        filteredPoses: filteredPoses
      })
    }
  }

  handleSearch = (event, value) => {
    const newArray = [...this.state.poses]
    const filteredPoses = newArray.filter(pose => pose.attributes.sanskrit.toLowerCase().includes(value.toLowerCase()))
    if (value === undefined || value === "") {
      this.setState({
        poses: newArray
      })
    } else {
      this.setState({
        filteredPoses: filteredPoses
      })
    }
  }

  addNewPose = (pose, img) => {

    let data = {
      sanskrit: pose,
      image: img
    }

    fetch('http://localhost:3000/api/v1/poses', {
    method: "POST",
    headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => this.setState ({
      poses: data.data,
      filteredPoses: data.data
    }))
  }

  render() {

    return (
      <div>
        <Navbar poses={this.state.poses} />

          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/index" render={() => < PoseIndex poses={this.state.poses} />} />
            <Route path="/student" render={() => < Student poses={this.state.poses} handleChange={this.handleChange} filteredPoses={this.state.filteredPoses} addNewPose={this.addNewPose} handleSearch={this.handleSearch}/>} />
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

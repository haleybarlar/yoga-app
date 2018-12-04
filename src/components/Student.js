import React, { Component } from 'react';
import StudentForm from './StudentForm.js';
import PoseIndex from './PoseIndex.js';
import ClassDisplay from './ClassDisplay.js';
import MyClass from './MyClass.js';
import { Route, Switch } from "react-router-dom";


class Student extends Component {

  state = {
    favoritePoses: [],
    poses: this.props.poses,
    filteredPoses: this.props.filteredPoses
  }

  addToFavorite = (event, pose) => {
    // console.log("yo");
    const newFavorite = [...this.state.favoritePoses]
    if(!newFavorite.includes(pose)) {
      newFavorite.push(pose)
      this.setState({
        favoritePoses: newFavorite
      })
    }
  }

  removePose = (event, pose) => {
    const newFavorite = [...this.state.favoritePoses]
    const goAway = newFavorite.filter(onepose => onepose !== pose)
    this.setState({
      favoritePoses: goAway
    }, () => {
      console.log(this.state.favoritePoses);
    })
  }

  render() {

    return (
      <div>

        <Switch>
          <Route path="/student/class" render={() => <MyClass favoritePoses={this.state.favoritePoses} removePose={this.removePose}/>} />
          <Route path="/student/index" render={() => <PoseIndex poses={this.props.poses} addToFavorite={this.addToFavorite} handleChange={this.props.handleChange} filteredPoses={this.props.filteredPoses} addNewPose={this.props.addNewPose} handleSearch={this.props.handleSearch} favoritePoses={this.state.favoritePoses}/>} />
          <Route path="/student/display" render={() => <ClassDisplay poses={this.props.poses} favoritePoses={this.state.favoritePoses}/>} />
          <Route path="/display" render={() => <ClassDisplay poses={this.state.poses} />} />
          <Route path="/student/studentform" render={() => <StudentForm />} />
        </Switch>

      </div>
    )
  }
}


export default Student

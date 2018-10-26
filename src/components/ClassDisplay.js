import React, { Component } from 'react';
import DisplayPoseCard from './DisplayPoseCard'
import './ClassDisplay.css'

class ClassDisplay extends Component {

  state = {
    counter: 0,
    poses: [],
    currentPose: null,
    toggle: false
  }

  componentDidMount() {
    this.setState({poses: this.props.poses, currentPose: this.props.favoritePoses[0]})

    this.interval = setInterval(() => {
      if (this.state.counter < 49){
        this.setState({
          counter: this.state.counter + 1,
          currentPose: this.props.favoritePoses[this.state.counter]
        })
      } else {
        this.setState({
          counter: 0
        })
      }
    }, 7000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  moveForward = (event) => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  moveBackward = (event) => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    if (this.state.poses !== null && this.state.poses !== undefined) {
      return (
        <div className="display-div">
          <div className="main-div">
            <DisplayPoseCard pose={this.state.currentPose} moveForward={this.moveForward} moveBackward={this.moveBackward} pause={this.pause}/>
          </div>
        </div>
      )
    }
  }
}


export default ClassDisplay

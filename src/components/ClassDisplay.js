import React, { Component } from 'react';
import DisplayPoseCard from './DisplayPoseCard'

class ClassDisplay extends Component {

  state = {
    counter: 0,
    poses: [],
    currentPose: null
  }

  componentDidMount() {
    this.setState({poses: this.props.poses, currentPose: this.props.poses[0]})

    this.interval = setInterval(() => {
      if (this.state.counter < 49){
        this.setState({
          counter: this.state.counter + 1,
          currentPose: this.props.poses[this.state.counter]
        })
      } else {
        this.setState({
          counter: 0
        })
      }
      }, 3000)

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render() {
    if (this.state.poses !== null && this.state.poses !== undefined) {
      return (<div>
                <h1>ClassDisplay</h1>
                <DisplayPoseCard pose={this.state.currentPose}/>
                </div>)
    } 
  }
}


export default ClassDisplay

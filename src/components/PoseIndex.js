import React, { Component } from 'react';
import IndexPoseCard from './IndexPoseCard.js'
import Filter from './Filter.js'

class PoseIndex extends Component {


  addToFavorite = (event, prop) => {
    this.props.addToFavorite(event, prop)
  }

  render() {
    console.log(this.props.poses);
    let poses = this.props.poses.map(pose => <IndexPoseCard key={pose.id} pose={pose} addToFavorite={this.addToFavorite}/>)

    return (
      <div>
        <h1>Pose Index</h1>
        <Filter handleChange={this.props.handleChange}/>
        {poses}
      </div>
    )
  }
}


export default PoseIndex

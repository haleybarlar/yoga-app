import React, { Component } from 'react';
import { Image, Item } from 'semantic-ui-react'


class DisplayPoseCard extends Component {
  render() {
    if(this.props.pose === null) {
      return <h1>Loading</h1>
    } else if (this.props.pose === undefined) {
      return <h1>Loading</h1>
    } else {
      return <img src={this.props.pose.attributes.image}/>
    }
  }
}


export default DisplayPoseCard

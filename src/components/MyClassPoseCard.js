import React, { Component } from 'react';
import { Image, Item, Button, List, Divider } from 'semantic-ui-react'

class MyClassPoseCard extends Component {

  state = {
    currentPose: this.props.pose
  }

  removePose = (event) => {
    this.props.removePose(event, this.state.currentPose)
  }

  render() {

    return (

      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button onClick={this.removePose}>Remove</Button>
          </List.Content>
          <Image avatar src={this.props.pose.attributes.image} />
          <List.Content>{this.props.pose.attributes.sanskrit} ({this.props.pose.attributes.english})</List.Content>
        </List.Item>
      <Divider />
      </List>
    )
  }
}


export default MyClassPoseCard

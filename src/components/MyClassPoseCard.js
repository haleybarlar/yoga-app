import React, { Component } from 'react';
import { Image, Button, List, Divider, Icon } from 'semantic-ui-react'

class MyClassPoseCard extends Component {

  state = {
    currentPose: this.props.pose
  }

  removePose = (event) => {
    this.props.removePose(event, this.state.currentPose)
  }

  render() {

    return (
      <div id="pose-card">
        <List divided verticalAlign='middle'>
          <List.Item>
            <List.Content floated='right'>
              <Button onClick={this.removePose}><Icon name="x"/>Remove</Button>
            </List.Content>
            <Image avatar src={this.props.pose.attributes.image} />
            <List.Content>{this.props.pose.attributes.sanskrit} ({this.props.pose.attributes.english})</List.Content>
          </List.Item>
        <Divider />
        </List>
      </div>
    )
  }
}


export default MyClassPoseCard

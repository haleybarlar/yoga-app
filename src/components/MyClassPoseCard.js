import React, { Component } from 'react';
import { Image, Item, Button } from 'semantic-ui-react'

class MyClassPoseCard extends Component {

  state = {
    currentPose: this.props.pose
  }

  removePose = (event) => {
    this.props.removePose(event, this.state.currentPose)
  }

  render() {
    console.log(this.props.pose);

    return (
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src={this.props.pose.attributes.image} />
          <Item.Content>
            <Item.Header>{this.props.pose.attributes.sanskrit} ({this.props.pose.attributes.english})</Item.Header>
            {/*<Item.Meta>Description</Item.Meta>*/}
            <br></br>
            <Button onClick={this.removePose}>Remove</Button>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}


export default MyClassPoseCard

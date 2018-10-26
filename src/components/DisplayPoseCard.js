import React, { Component } from 'react';
import { Image, Item, Button, Icon, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";


class DisplayPoseCard extends Component {
  render() {
    if(this.props.pose === null) {
      return <h3>Add some <Link to="/student/index">poses</Link> to your class!</h3>
    } else if (this.props.pose === undefined) {
      return <h3>Add some <Link to="/student/index">poses</Link> to your class!</h3>
    } else {
      return (
        <div>
          <Card>
            <Image src={this.props.pose.attributes.image} />
            <Card.Content>
              <Card.Header>{this.props.pose.attributes.sanskrit} ({this.props.pose.attributes.english})</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Button icon labelPosition='left' onClick={this.props.moveBackward}>
                <Icon name='left arrow' />
                Back
              </Button>
              <Button icon labelPosition='right' onClick={this.props.moveForward}>
                <Icon name='right arrow' />
                Next
              </Button>
            </Card.Content>
          </Card>
        </div>
      )
    }
  }
}

export default DisplayPoseCard

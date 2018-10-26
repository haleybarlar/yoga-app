import React, { Component } from 'react';
import { Image, Item, Button, List, Divider, Container } from 'semantic-ui-react'

class IndexPoseCard extends Component {

  state = {
    currentPose: this.props.pose,
    clicked: false
  }

  handleClick = (event) => {
    if (this.state.clicked === false) {
      this.setState({
        clicked: true
      })
    }
    this.props.addToFavorite(event, this.state.currentPose)
  }

  render() {

    return (

      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button onClick={this.handleClick}>Add to class</Button>
          </List.Content>
          <Image avatar src={this.props.pose.attributes.image} />
          <List.Content>{this.props.pose.attributes.sanskrit} ({this.props.pose.attributes.english})</List.Content>
          {this.state.clicked === true ? <Item.Meta>Ya added it</Item.Meta> : null}
        </List.Item>
      <Divider />
      </List>

    )
  }
}


export default IndexPoseCard

import React, { Component } from 'react';
import { Image, Item, Button } from 'semantic-ui-react'

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
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src={this.props.pose.attributes.image} />
          <Item.Content>
            <Item.Header>{this.props.pose.attributes.sanskrit} ({this.props.pose.attributes.english})</Item.Header>
            {this.state.clicked === true ? <Item.Meta>Ya added it</Item.Meta> : null}

            <br></br>
            <Button onClick={this.handleClick}>Add to Class</Button>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}


export default IndexPoseCard

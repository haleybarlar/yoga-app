import React, { Component } from 'react';
import { Image, Button, List, Divider, Icon } from 'semantic-ui-react'

class IndexPoseCard extends Component {

  componentDidMount() {
    this.handleMatch()
  }

  state = {
    currentPose: this.props.pose,
    clicked: false,
    match: false
  }

  handleClick = (event) => {
      this.setState({
        clicked: !this.state.clicked
      })
    this.props.addToFavorite(event, this.state.currentPose)
  }

  handleMatch = () => {
    const match = this.props.favoritePoses.filter(pose => pose.id === this.state.currentPose.id)
    if (match && match.length > 0) {
      this.setState({
        match: true
      })
    }
  }

  render() {

    return (

      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            {this.state.clicked || this.state.match ? <Button id={this.state.currentPose.id} onClick={this.handleClick}><Icon name="checkmark"/>Added </Button> : <Button onClick={this.handleClick}><Icon name="add"/>Add to class</Button>}
          </List.Content>
          <Image avatar src={this.props.pose.attributes.image} />
          <List.Content>{this.props.pose.attributes.sanskrit} ({this.props.pose.attributes.english})</List.Content>
        </List.Item>
      <Divider />
      </List>
    )
  }
}


export default IndexPoseCard

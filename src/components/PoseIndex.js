import React, { Component } from 'react';
import IndexPoseCard from './IndexPoseCard.js'
import Filter from './Filter.js'
import Search from './Search.js'
import { Link } from "react-router-dom";
import { Button, Modal, Form, Container } from 'semantic-ui-react'
import './PoseIndex.css'

class PoseIndex extends Component {

  state = {
    open: false,
    pose: "",
    image: ""
  }

  addToFavorite = (event, prop) => {
    this.props.addToFavorite(event, prop)
  }

  show = size => () => {
    this.setState({ size, open: true })
  }

  close = () => {
    this.setState({ open: false })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      pose: event.target.pose.value,
      image: event.target.image.value
    }, () => {
      this.props.addNewPose(this.state.pose, this.state.image)
    })
  }

  render() {

    const { open, size } = this.state

    let poses = this.props.filteredPoses.map(pose => <IndexPoseCard favoritePoses={this.props.favoritePoses} key={pose.id} pose={pose} addToFavorite={this.addToFavorite}/>)

    return (
      <div className="index-div">
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Add a pose</Modal.Header>
          <Modal.Content>
            <Form success onSubmit={this.handleSubmit}>
              <Form.Input label='Pose Name' placeholder='Down Dog' name='pose' />
              <Form.Input label='Image' placeholder='Image(URL)' name='image' />
              <Button>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

        <div className="header">
          <h1>Pose Index</h1>
          <Form>
            <Form.Group >
              <Filter handleChange={this.props.handleChange}/>
              <Search handleSearch={this.props.handleSearch}/>
            </Form.Group>
          </Form>

        </div>
        <div className="background-opacity">
          <Container className="index-container" style={{overflow: 'auto', maxHeight: 550, padding: 10}}>
            {poses}
          </Container>
        </div>
        <div className="button-div">
          <Link to="/student/class">
            <Button content='See your class' icon='right arrow' labelPosition='right' />
          </Link>
        </div>
      </div>
    )
  }
}

export default PoseIndex

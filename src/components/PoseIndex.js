import React, { Component } from 'react';
import IndexPoseCard from './IndexPoseCard.js'
import Filter from './Filter.js'
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

    let poses = this.props.filteredPoses.map(pose => <IndexPoseCard key={pose.id} pose={pose} addToFavorite={this.addToFavorite}/>)

    return (
      <div className="index-div">
      <Container className="index-container">
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
        <h1>All poses</h1>
        <Form>
        <h3>Filter by skill level or add to your class</h3>
        <Filter handleChange={this.props.handleChange}/>
        <Button onClick={this.show('tiny')} >Add A Pose</Button>
        <Link to="/student/class">
          <Button size="medium">See Your Class</Button>
        </Link>
        </Form>
        </div>
        {poses}

      </Container>
      </div>
    )
  }
}

export default PoseIndex

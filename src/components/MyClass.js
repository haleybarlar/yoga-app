import React, { Component } from 'react';
import { Image, Item, Container, Button } from 'semantic-ui-react'
import MyClassPoseCard from './MyClassPoseCard.js'
import { Link } from "react-router-dom";

class MyClass extends Component {

  render() {

    const favoritePoses = this.props.favoritePoses.map(pose => <MyClassPoseCard key={pose.id} pose={pose} removePose={this.props.removePose}/>)

    return (
      <div className="index-div">

        <Container className="index-container">
          <div className="header">
            <h1>Your Class</h1>
              <Link to="/student/display">
                <Button size="medium">Play your class</Button>
              </Link><br></br><br></br>
              {favoritePoses.length === 0 ? <p>Add poses to your class by going to the <Link to="/student/index">index</Link></p> : favoritePoses}
          </div>


      </Container>
      </div>
    )
  }
}


export default MyClass

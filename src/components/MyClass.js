import React, { Component } from 'react';
import { Container, Button, Modal } from 'semantic-ui-react'
import MyClassPoseCard from './MyClassPoseCard.js'
import { Link } from "react-router-dom";
import './MyClass.css'
import { Carousel } from 'react-responsive-carousel';

class MyClass extends Component {

  render() {

    const favoritePoses = this.props.favoritePoses.map(pose => <MyClassPoseCard key={pose.id} pose={pose} removePose={this.props.removePose}/>)

    return (
      <div className="index-div">
        <div className="header" >
          <h1>Your Class</h1>
            {favoritePoses.length > 0 ?
              <Modal trigger={<Button icon='play' content='Play'/>}>
                <Modal.Content>
                  <div className="main-div">
                    {this.props.favoritePoses && this.props.favoritePoses.length > 0 ?
                      <Carousel
                        showStatus={false}
                        width={600}
                      >
                       {this.props.favoritePoses.map(pose => <div><img className="carousel-img" alt="#" src={pose.attributes.image}/><p className="legend">{pose.attributes.sanskrit}</p></div>)}
                     </Carousel>
                     :
                     <h3>Add some <Link to="/student/index">poses</Link> to your class!</h3>
                    }
                  </div>
                </Modal.Content>
              </Modal>
              :
              null}
        </div>
        <Container className="index-container" id="myclass" style={{overflow: 'auto', maxHeight: 550, padding: 10}}>
          {favoritePoses.length === 0 ? <div><h1>There's nothing here!</h1><p>Add poses to your class by going to the <Link to="/student/index">index</Link></p></div> : favoritePoses}
        </Container>
      </div>
    )
  }
}


export default MyClass

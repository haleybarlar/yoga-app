import React, { Component } from 'react';
import './ClassDisplay.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

class ClassDisplay extends Component {

  state = {
    counter: 0,
    poses: [],
    currentPose: null,
    toggle: false
  }

  componentDidMount() {
    this.setState({
      poses: this.props.poses,
      currentPose: this.props.favoritePoses[0]
    })
  }

  render() {
    if (this.props.poses) {
    return (
      <div className="main-div">
        {this.props.favoritePoses && this.props.favoritePoses.length > 0 ?
          <Carousel
            showStatus={false}
            width={600}
            autoPlay={true}
            interval={1000}
          >
           {this.props.favoritePoses.map(pose => <div><img className="carousel-img" alt="#" src={pose.attributes.image}/><p className="legend">{pose.attributes.sanskrit}</p></div>)}
         </Carousel>
         :
         <h3>Add some <Link to="/student/index">poses</Link> to your class!</h3>
        }
      </div>
    )
  }
}}


export default ClassDisplay

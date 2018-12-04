import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './HomeContainer.css'
import { Button } from 'semantic-ui-react'

class HomeContainer extends Component {


  render() {
    return (
      <div className="background">
        <h1 id="yoga-cycle">Yoga Cycle</h1>
        <h1>Select poses and generate sequences</h1>
        <Link to="/student/index">
          <Button size="huge">Let's go</Button>
        </Link>

      </div>
    )
  }
}

export default HomeContainer;

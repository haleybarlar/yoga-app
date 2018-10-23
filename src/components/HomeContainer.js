import React, { Component } from 'react';
import Student from './Student.js'
import StudentForm from './StudentForm.js'
import PoseIndex from './PoseIndex.js'
import ClassDisplay from './ClassDisplay.js'
import { Route, NavLink, HashRouter, Switch, Link } from "react-router-dom";
import './HomeContainer.css'

import { Button } from 'semantic-ui-react'

class HomeContainer extends Component {


  render() {
    return (
      <div className="background">

        <Link to="/student/studentform">
          <Button size="huge">STUDENT</Button>
          <Button size="huge">TEACHER</Button>
        </Link>

      </div>
    )
  }
}

export default HomeContainer;

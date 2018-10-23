import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react'


class StudentForm extends Component {

  render() {

    let lengthOptions = [
      {
        text: '5 minutes',
        value: '5 minutes',
      },
      {
        text: '15 minutes',
        value: '15 minutes',
      },
      {
        text: '30 minutes',
        value: '30 minutes',
      },
      {
        text: '45 minutes',
        value: '45 minutes',
      },
      {
        text: '60 minutes',
        value: '60 minutes',
      }
    ]

    let levelOptions = [
      {
        text: 'Beginner',
        value: 'Beginner',
      },
      {
        text: 'Intermediate',
        value: 'Intermediate',
      },
      {
        text: 'Advanced',
        value: 'Advanced',
      }
    ]

    return (
      <div>
        <Dropdown placeholder='Class Length' fluid selection options={lengthOptions} />
        <Dropdown placeholder='Level' fluid selection options={levelOptions} />
        <Button>Leggo</Button>
      </div>
    )
  }
}


export default StudentForm

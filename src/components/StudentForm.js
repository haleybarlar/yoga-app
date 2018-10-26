import React, { Component } from 'react';
import { Dropdown, Button, Form, Message } from 'semantic-ui-react'


class StudentForm extends Component {

  render() {

    return (
      <Form success>
        <Form.Input label='Pose Name' placeholder='Down Dog' />
        <Form.Input label='Image' placeholder='Image(URL)' />
        <Message success header='Added' content="You're all signed up for the newsletter" />
        <Button>Submit</Button>
      </Form>
    )
  }
}


export default StudentForm

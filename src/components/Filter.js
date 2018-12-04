import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'


class Filter extends Component {

  state = {
    changeValue: ""
  }

  handleChange = (event) => {
    this.setState({
      changeValue: event.target.textContent
    }, () => this.props.handleChange(event, this.state.changeValue))
  }


  render() {
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
      <Dropdown placeholder='Find by level' fluid selection options={levelOptions} onChange={this.handleChange}/>
    )
  }
}

export default Filter;

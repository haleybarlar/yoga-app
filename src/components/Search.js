import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

class Search extends Component {

  state = {
    changeValue: ""
  }

  handleChange = (event) => {
    this.setState({
      changeValue: event.target.value
    }, () => this.props.handleSearch(event, this.state.changeValue))
  }

  render() {

    return (
      <Input onChange={this.handleChange} placeholder="Find by name" icon="search"></Input>
    )
  }
}

export default Search;

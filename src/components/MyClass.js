import React, { Component } from 'react';
import { Image, Item } from 'semantic-ui-react'
import MyClassPoseCard from './MyClassPoseCard.js'




class MyClass extends Component {

  

  render() {
    console.log(this.props.favoritePoses);
    console.log('hello');

    const favoritePoses = this.props.favoritePoses.map(pose => <MyClassPoseCard key={pose.id} pose={pose} removePose={this.props.removePose}/>)

    return (
      <div>
        <h1>My Class</h1>
        {favoritePoses}

      </div>
    )
  }
}


export default MyClass

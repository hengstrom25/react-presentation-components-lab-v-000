// Code SimpleComponent Here
<<<<<<< HEAD
import React, {Component} from 'react';
  
export default class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }
  
  handleClick = () => {
    this.state.mood === 'happy' ? (this.setState({ mood: 'sad'})) : (this.setState({ mood: 'happy'}))
  }
  
  render () {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
      )
  }
  
}
=======

class SimpleComponent {
  
  const mood = happy
  
  render () {
    return (
      )
  }
  
}
>>>>>>> 4cff3e8cf7b4a32233c546e11339e9dff8917e74

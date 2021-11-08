
import image from './myP.png';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    fullName : "Morgan Freeman",
    bio : "Morgan Freeman (born June 1, 1937)",
    profession : " an American actor, director, and narrator .",
    profileImage : <img src="myP" alt="myP.png" />
  };
 
  render() {
    return (
      <div>
        <h1> This is {this.state.fullName}</h1>
        <h3> - {this.state.bio}</h3>
        <h2> He is {this.state.profession} </h2>
      <div> {this.state.profileImage} </div>
      
      </div>
      
    )
  }
}

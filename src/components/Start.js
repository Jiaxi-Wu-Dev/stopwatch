/* Start button should have a function that increases per Second
setInterval seems like a good method to use for this  
Step1 Get something to show on App.js - DONE
Step2 Create a function that increments - DONE
Step2b be able to console.log something - DONE
Looking at https://reactjs.org/docs/faq-functions.html, it seems like functions go before the render method
Step3 Show the incremental Number on screen - DONE
Step3b Show a number on screen - DONE
Looking at https://www.youtube.com/watch?v=4ORZ1GmjaMc, learned more about state and how it works
https://github.com/airbnb/react-sketchapp/issues/248 for setState and setInterval */

import React, { Component } from "react";

class Start extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      timer: 0
    };
    this.incrementOne = this.incrementOne.bind(this);
  }

  incrementOne() {
    this.setState({
      time: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000)
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.timer} </h1>
 
        <button
          className="start"
          onClick={this.incrementOne.bind(this, "start")}
        >
          START
        </button>
      </div>
    );
  }
}

export default Start;

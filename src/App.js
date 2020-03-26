/* Create three buttons Reset, Start, Pause */
// Move the state shared by the buttons to App.js

import React from "react";
import "./App.css";
import Pause from "./components/Pause";

class App extends React.Component {
  constructor() {
    super();
    // Don't call this.setState() here!
    this.state = {
      time: 0,
      timer: 0,
      start: false
    };
  }

  incrementOne = () => {
    this.setState({
      time: setInterval(() => {
        this.setState({ timer: this.state.timer + 1, 
                        start:true});
      }, 1000)
    });
  }

  pauseCounter = () => {
    this.setState({start: true})
    if ((this.state.start = true)) {
    this.state.start = false;
    clearTimeout(this.state.time);
  }
}

  resetCounter = () => {
    
  }

  render() {
    return (
      <div>
        <div>
          <h1> {this.state.timer} </h1>
          <button className="start" onClick={this.incrementOne}>
            START
          </button>
        </div>
        <div>
          <button className="start" onClick={this.pauseCounter}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}

export default App;

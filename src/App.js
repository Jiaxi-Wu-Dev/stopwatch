/* Create three buttons Reset, Start, Pause */
// Move the state shared by the buttons to App.js

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      timer: 0,
      start: false
    };
  }

  // increments the counter
  incrementOne = () => {
    this.setState({
      time: setInterval(() => {
        this.setState({ timer: this.state.timer + 1, start: true });
      }, 1000)
    });
  };
  // pauses the counter
  pauseCounter = () => {
    // set state = true and then toggle it on and off to pause the counter
    this.setState({ start: true });
    if ((this.state.start = true)) {
      this.state.start = false;
      clearTimeout(this.state.time);
      // trying to make pause start and stop the counter, so far pressing start does the trick
    } else {
      this.setState({
        time: setInterval(() => {
          this.setState({ timer: this.state.timer + 1, start: true });
        }, 1000)
      });
    }
  };
  // resets the counter
  // set timer back to zero
  resetCounter = () => {
    this.setState({ timer: 0 });
  };

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
          <button className="pause" onClick={this.pauseCounter}>
            PAUSE
          </button>
        </div>
        <div>
          <button className="reset" onClick={this.resetCounter}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default App;

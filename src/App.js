/* Create three buttons Reset, Start, Pause */
// Move the state shared by the buttons to App.js

import React from "react";
import "./App.css";
import Start from "./components/Start";
import Pause from "./components/Pause";

class App extends React.Component {
  constructor() {
    super();
    // Don't call this.setState() here!
    this.state = {
      time: 0,
      timer: 0
    };
  }

  incrementOne = () => {
    this.setState({
      time: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000)
    });
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
        <Pause />
      </div>
    );
  }
}

export default App;

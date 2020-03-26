/* Start button should have a function that increases per Second
setInterval seems like a good method to use for this  
Step1 Get something to show on App.js - DONE
Step2 Create a function that increments - DONE
Step2b be able to console.log something - DONE
Looking at https://reactjs.org/docs/faq-functions.html, it seems like functions go before the render method
Step3 Show the incremental Number on screen - DONE
Step3b Show a number on screen - DONE
Looking at https://www.youtube.com/watch?v=4ORZ1GmjaMc, learned more about state and how it works
https://github.com/airbnb/react-sketchapp/issues/248 for setState and setInterval
Step4 create pause function - DONE
Step5 create reset function - DONE */

//Create three buttons Reset, Start, Pause
// Move the state shared by the buttons to App.js
// started building all my components in App.js because thats where the root state is kept

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
  // https://github.com/airbnb/react-sketchapp/issues/248
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

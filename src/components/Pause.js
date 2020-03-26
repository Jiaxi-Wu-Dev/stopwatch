// Create a pause component that pauses the count from start.js

import React, { Component } from 'react';


class Pause extends Component {
    state = { 

     }

     pause(){

     }
  

    render() { 
        return (<div>
            <button className="pause" onClick={this.pause}></button>
        </div>);
    }
}
 
export default Pause;
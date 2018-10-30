import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
      <p id="display"></p>
      <div className="drum-pad">Q</div>
      <div className="drum-pad">W</div>
      <div className="drum-pad">E</div>
      <div className="drum-pad">A</div>
      <div className="drum-pad">S</div>
      <div className="drum-pad">D</div>
      <div className="drum-pad">Z</div>
      <div className="drum-pad">X</div>
      <div className="drum-pad">C</div>
      </div>
    );
  }
}

export default App;

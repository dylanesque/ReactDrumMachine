import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
      <p id="display">I am the display!</p>
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

//  Within each .drum-pad, there should be an HTML5 audio element which has a src attribute
// pointing to an audio clip, a class name of clip, and an id corresponding to the inner
// text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

// When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

// When I press the trigger key associated with each .drum-pad, the audio clip contained in
// its child audio element should be triggered (e.g. pressing the Q key should trigger the
// drum pad which contains the string "Q", pressing the W key should trigger the drum pad
// which contains the string "W", etc.).

// When a .drum-pad is triggered, a string describing the associated audio clip is displayed
// as the inner text of the #display element (each string must be unique).


export default App;

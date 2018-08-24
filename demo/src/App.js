import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stepper from 'react-ui-stepper'

const CIRCLE_COLORS = {
  DONE: {
    border: '#25BCEB',
    background: '#ffffff',
    font: '#25BCEB'
  },
  UNDONE: {
    border: '#C7C7C7',
    background: '#ffffff',
    font: '#C7C7C7'
  },
  LAST: {
    border: '#60D172',
    background: '#ffffff',
    font: '#60D172'
  },
  CURRENT: {
    border: '#25BCEB',
    background: '#25BCEB',
    font: '#ffffff'
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Stepper steps={10} selected={3} maxSteps={5} colors={CIRCLE_COLORS} />
      </div>
    );
  }
}

export default App;

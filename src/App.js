import React, { Component } from 'react'
import Header from './Header'
import Events from './Events'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header>Weekend Project</Header>
        <Events/>
      </div>
    );
  }
}

export default App;

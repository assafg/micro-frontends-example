import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleNav(view) {
    window.parent.postMessage({ type: 'APP_MESSAGE', actionType: 'NAVIGATION', payload: view }, '*');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleNav.bind(this, 'dashboard')}>Dashboard</button>
        <button onClick={this.handleNav.bind(this, 'settings')}>Settings</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const views = {
  dashboard: 'http://localhost:5000',
  settings: 'http://localhost:4200',
}

class App extends Component {
  render() {
    return (
      <div className="main">
        <iframe id="nav-bar-iframe" src="http://localhost:4000" />
        <iframe id="dashboard-iframe" src={views[this.props.view]} />
      </div>
    );
  }
}

export default App;

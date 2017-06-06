import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    handleMessage(message) {
        if (message && message.data.type == 'APP_MESSAGE') {
            switch (message.data.actionType) {
                case 'STORE_NOTIFICATION':
                    this.setState(message.data.payload);
                    break;
            }
        }
    }

    componentWillMount() {
        window.addEventListener("message", this.handleMessage.bind(this));
        window.parent.postMessage({type: 'APP_MESSAGE', actionType: 'STORE_REQUEST', payload: 'dashboard'}, '*');
    }

    handleNav(view) {
        window.parent.postMessage({type: 'APP_MESSAGE', actionType: 'NAVIGATION', payload: {view}}, '*');
    }

    render() {
        return (
            <div className="App">
                {JSON.stringify(this.state)}
            </div>
        );
    }
}

export default App;

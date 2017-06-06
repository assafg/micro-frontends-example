import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        window.name = 'dashboard';
    }

    handleMessage(message) {
        if (message && message.data.type == 'APP_MESSAGE') {
            switch (message.data.actionType) {
                case 'STORE_NOTIFICATION':
                    console.log('dash SN', message.data.payload);
                    break;
            }
        }
    }

    componentWillMount() {
        window.addEventListener("message", this.handleMessage);
        window.parent.postMessage({type: 'APP_MESSAGE', actionType: 'STORE_REQUEST', payload: 'dashboard'}, '*');
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.handleMessage)
    }

    openVideo() {
        const view = 'YouTube';
        const query = {v: 'MBz5yzGj4Uk'};
        window.parent.postMessage({type: 'APP_MESSAGE', actionType: 'NAVIGATION', payload: {view, query}}, '*');
        window.parent.postMessage({
            type: 'APP_MESSAGE',
            actionType: 'STORE_UPDATE',
            payload: {ns: 'global', key: 'videoId', value: 'MBz5yzGj4Uk'}
        }, '*');
    }

    render() {
        return (
            <div className="App">
                <h1>A fancy dashboard with a button</h1>
                <button onClick={this.openVideo}>Open Video</button>
            </div>
        );
    }
}

export default App;

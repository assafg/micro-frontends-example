import React, { Component } from 'react';
import _  from 'lodash'
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {hidden: 'hidden'};
    }

    handleMessage(message) {
        if (message && message.data.type == 'APP_MESSAGE') {
            switch (message.data.actionType) {
                case 'STORE_NOTIFICATION':
                    this.setState(Object.assign({}, message.data.payload, {hidden: ''}));
                    break;
            }
        }
    }

    componentWillMount() {
        window.addEventListener("message", this.handleMessage.bind(this));
        window.parent.postMessage({type: 'APP_MESSAGE', actionType: 'STORE_REQUEST', payload: 'dashboard'}, '*');
    }

    goToMainPage() {
        window.parent.postMessage({
            type: 'APP_MESSAGE',
            actionType: 'STORE_UPDATE',
            payload: {ns: 'global', key: 'reportId', value: null}
        }, '*');
    }

    render() {
        if (_.get(this.state, 'storage.global.reportId'))
            return (
                <div className={"App " + this.state.hidden}>
                    <a href="#" onClick={this.goToMainPage.bind(this)}>Back</a>
                    <h2>{this.state.storage.global.reportId} Report</h2>
                </div>
            );
        else
            return (
                <div className={"App " + this.state.hidden}>
                    <h2>Reports Main Page</h2>
                </div>
            );
    }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
        window.parent.postMessage({
            type: 'APP_MESSAGE',
            actionType: 'STORE_UPDATE',
            payload: {ns: 'global', key: 'videoId', value: 'MBz5yzGj4Uk'}
        }, '*');
        window.parent.postMessage({type: 'APP_MESSAGE', actionType: 'NAVIGATION', payload: {view, query}}, '*');
    }

    openReport (report) {
        const view = 'Reports';
        window.parent.postMessage({
            type: 'APP_MESSAGE',
            actionType: 'STORE_UPDATE',
            payload: {ns: 'global', key: 'reportId', value: report}
        }, '*');
        window.parent.postMessage({type: 'APP_MESSAGE', actionType: 'NAVIGATION', payload: {view}}, '*');
    }

    render() {
        const padStyle = {paddingTop: '20px', paddingBottom: '10px'};
        return (
            <div className="App">
                <h1>A fancy dashboard</h1>
                <hr/>
                <h4 style={padStyle}>Open YouTube with a video</h4>
                <Button onClick={this.openVideo}>Open Video</Button>
                <br/>
                <h4 style={padStyle}>Open a report in the reports tab </h4>
                <Button onClick={this.openReport.bind(this, 'Revenue')}>Open Revenue Report</Button>
                <Button onClick={this.openReport.bind(this, 'Expense')}>Open Expense Report</Button>
                <Button onClick={this.openReport.bind(this, 'Staff')}>Open Staff Report</Button>
            </div>
        );
    }
}

export default App;

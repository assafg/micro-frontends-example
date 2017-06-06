import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import combinedReducers from './redux/reducers';
import App from './App.container';
import registerServiceWorker from './registerServiceWorker';
import { navigateTo, storageUpdate } from './redux/actions';
import './index.css';

// store
const store = createStore(combinedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function sendStoreNotification(store, target) {

    const msg = {
        type: 'APP_MESSAGE',
        actionType: 'STORE_NOTIFICATION',
        payload: store.getState().toJS()
    };

    const frames = window.frames;

    if (!target) {
        for (var i = 0; i < frames.length; i++) {
            frames[i].postMessage(msg, '*');
        }
    }
    else
        frames[target].postMessage(msg, '*');

}

store.subscribe(() => {
    sendStoreNotification(store);
});

window.addEventListener("message", (message) => {
    if (!message || message.data.type !== 'APP_MESSAGE') {
        return;
    }

    switch (message.data.actionType) {
        case 'NAVIGATION':
            store.dispatch(navigateTo(message.data.payload));
            break;
        case 'STORE_UPDATE':
            store.dispatch(storageUpdate(message.data.payload));
            break;
        case 'STORE_REQUEST':
            sendStoreNotification(store, message.data.payload);
            break;
        default:
            console.log('Message not handled', message);
    }
}, false);

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();

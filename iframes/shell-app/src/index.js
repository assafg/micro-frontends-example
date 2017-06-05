import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import combinedReducers from './redux/reducers';
import App from './App.container';
import registerServiceWorker from './registerServiceWorker';
import { navigateTo } from './redux/actions';
import './index.css';

// store
const store = createStore(combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.addEventListener("message", (message) => {
  if (!message || message.data.type !== 'APP_MESSAGE') {
    return;
  }

  switch(message.data.actionType) {
    case 'NAVIGATION': 
      store.dispatch(navigateTo(message.data.payload));
      break;
    default:
      console.log('Message not handled', message);
  }
}, false);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

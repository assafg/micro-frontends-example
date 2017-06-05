import { createStore, combineReducers } from 'redux';

const view = (state = {current: 'dashboard'}, action) => {
    switch(action.type) {
      case 'NAVIGATION': 
        return Object.assign({}, state, {current: action.payload});
    }
    return state;
}

export default combineReducers({
  view,
})

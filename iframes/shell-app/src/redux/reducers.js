import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable'

const view = (state = fromJS({current: 'Dashboard'}), action) => {
    switch (action.type) {
        case 'NAVIGATION':
            const newState = state.withMutations(s => s.set('current', action.payload.view).set('query', action.payload.query));
            return newState;
    }
    return state;
};

const storage = (state = fromJS({}), action) => {
    switch (action.type) {
        case 'STORE_UPDATE':
            return state.setIn([action.payload.ns, action.payload.key], action.payload.value);
    }
    return state;
};

export default combineReducers({
    view,
    storage
})

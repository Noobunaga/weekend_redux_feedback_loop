import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


// import redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Test data for order
const feedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}

// const initialState = {}

// Reducer to keep order in global state
const feelingsReducer = (state = [], action) => {
    if(action.type === "ADD_NEW_FEELINGS") {
        console.log(`Feelings is picked is ${action.payload}`);
        return action.payload;
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
    }),
    applyMiddleware(logger)
);

// TODO: add Provider to App
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
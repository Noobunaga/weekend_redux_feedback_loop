import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


// Reducer to keep order in global state
const feelingsReducer = (state = [], action) => {
    if(action.type === "ADD_NEW_FEELINGS") {
        console.log(`Feelings is picked is ${action.payload}`);
        return action.payload;
    }
    return state;
};

const understandingReducer = (state = [], action) => {
    if(action.type === "ADD_NEW_UNDERSTANDING") {
        console.log(`Understanding is picked is ${action.payload}`);
        return action.payload;
    }
    return state;
};

const supportReducer = (state = [], action) => {
    if(action.type === "ADD_NEW_SUPPORT") {
        console.log(`Support is picked is ${action.payload}`);
        return action.payload;
    }
    return state;
};

const commentsReducer = (state = [], action) => {
    if(action.type === "ADD_NEW_COMMENTS") {
        console.log(`Comment left is ${action.payload}`);
        return action.payload;
    }
    return state;
};

const thanksReducer = (state = [], action) => {
    if(action.type === "ADD_NEW_FEEDBACK") {
        console.log(`Thanks for leaving ${action.payload}`);
        return action.payload;
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        thanksReducer,
    }),
    applyMiddleware(logger)
);

// TODO: add Provider to App
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
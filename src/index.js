import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ 
     }),
     applyMiddleware(sagaMiddleware, logger)
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));

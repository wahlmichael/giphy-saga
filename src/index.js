import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'; 
import axios from 'axios';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* searchGiphy(action){
    try{
      yield axios.get('/search',{
          params: {
              searchTerm: action.payload,
          }
      });
    } catch {
     console.log('Error in searchGiphy');
    }
  }

  function* rootSaga() {
    yield takeEvery('SEARCH_PLANT', searchGiphy);
   }

const store = createStore(
    combineReducers({ 
     }),
     applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));

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
 /*      const response=yield axios.get('/api/search',{
          params: {
              searchTerm: action.payload,
          }
      }); */
      const response=yield axios.get(`/api/search/${action.payload}`);
      yield put({type: 'GET_GIFS', payload: response.data.data});
    } catch {
     console.log('Error in searchGiphy');
    }
  }

  function* rootSaga() {
    yield takeEvery('SEARCH_GIPHY', searchGiphy);
   }

const getGifs=(state=[],action)=>{
  if(action.type==='GET_GIFS'){
    return action.payload;
  }
  return state;
}

const store = createStore(
    combineReducers({ 
      getGifs,
     }),
     applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));

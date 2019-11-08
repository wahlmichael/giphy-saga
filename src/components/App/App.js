import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import { Route, HashRouter as Router } from 'react-router-dom';

import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Search}/>
          <Route exact path="/favorites" component={Favorites}/>
        </div>
      </Router>
    );
  }
  
}

export default App;

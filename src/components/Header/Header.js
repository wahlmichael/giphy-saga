import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Router>
      <div className="headerDiv">
        <h1>Giphy Search!</h1>
          <ul>
            <li>
              <Link to= "/">Search</Link>
            </li>
            <li>
              <Link to= "/favorites">Favorites</Link>
            </li>
          </ul>
      </div>
      </Router>
    );
  }
}

export default Header;
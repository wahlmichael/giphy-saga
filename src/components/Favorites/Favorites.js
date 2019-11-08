import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Favorites extends Component {
  render() {
    return (
      <div>
        <h1>Favorite Gifs</h1>
      </div>
    );
  }
}

export default withRouter(Favorites);
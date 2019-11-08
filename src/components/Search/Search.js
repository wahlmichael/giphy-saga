import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Search extends Component {
  render() {
    return (
      <div>
        <h1>Search for some Gifs</h1>
      </div>
    );
  }
}

export default withRouter(Search);
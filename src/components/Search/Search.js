import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

class Search extends Component {
  state= {
    search: '',
  }

  searchFunction = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  submitSearch = () => {
    // this.props.dispatch({type: "SEARCH_GIPHY", payload: this.state.search})
    console.log('hit submit')
  }

  render() {
  
    return (
      <div>
        <h1>Search for some Gifs</h1>

        <input placeholder="search" value={this.state.search} onChange ={this.searchFunction}/>
        <button onClick={this.submitSearch}>Submit</button>
      </div>
    );
  }
}

export default connect()(withRouter(Search));
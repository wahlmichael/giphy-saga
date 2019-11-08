import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

const mapReduxStateToProps = reduxState => ({
  reduxState,
});

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
    this.props.dispatch({type: "SEARCH_GIPHY", payload: this.state.search});
    console.log('hit submit')
  }

  render() {
  
    return (
      <div>
        <h1>Search for some Gifs</h1>

        <input placeholder="search" value={this.state.search} onChange ={this.searchFunction}/>
        <button onClick={this.submitSearch}>Submit</button>
        
        {this.props.reduxState.getGifs.map((gifObject) => {
          return <img src={gifObject.images.original.url}></img>
        })}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(withRouter(Search));
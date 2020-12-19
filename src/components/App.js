import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtubeApi from '../apis/youtube';


class App extends Component {
  onTermSubmit = term => {
    youtubeApi.get('search', {
      params: {
        q: term
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    )
  }
}

export default App;
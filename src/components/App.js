import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtubeApi from '../apis/youtube';
import VideoList from './VideoList';


class App extends Component {
  state = { videos: [], selectedVideo: null };


  onTermSubmit = async (term) => {
    const response = await youtubeApi.get('search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  }


  onVideoSelect = video => {
    console.log('from the App!', video);
  }


  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    )
  }
}

export default App;
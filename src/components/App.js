import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';


const KEY = 'AIzaSyCN6e98GjAfa_d4E4mISSn8uCP6g5b1DvE';

class App extends React.Component {

  state = {response : []};
  onTermSubmit = async (term) => {
    
    const res = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      },
    });
    this.setState({response: res.data.items});
    
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <p>{this.state.response.length}</p>

        <VideoList videos={this.state.response}/>
      </div>
    );
  }
}

export default App;

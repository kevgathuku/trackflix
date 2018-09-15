import React, { Component } from 'react';
import './App.css';

import MovieList from './components/MovieList';

const movies = [{

}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Trending TV Shows</h1>
        </header>
        <section>
          <MovieList />
        </section>
      </div>
    );
  }
}

export default App;

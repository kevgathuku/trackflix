import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MovieList from "./components/MovieList";
import { popularTvShowsFetch } from "./actions";
import "./App.css";

export class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(popularTvShowsFetch());
  }

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

// If the mapDispatchToProps function is not provided,
// the default implementation just injects dispatch into your component’s props.
export default connect()(App);

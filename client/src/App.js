// @flow
import React from "react";
import { connect } from "react-redux";

import type { Action, ShowProps } from "./types";
import MovieList from "./components/MovieList";
import { tvShowsFetchAction } from "./actions";
import "./App.css";

type Props = {
  fetchTvShows: Function,
  shows: Array<ShowProps>
};

export class App extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchTvShows();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Trending TV Shows</h1>
        </header>
        <section>
          <MovieList shows={this.props.shows} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shows: state.discoveredShows
  };
};

type Dispatch = (action: Action) => any;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTvShows: () => dispatch(tvShowsFetchAction)
});

// If the mapDispatchToProps function is not provided,
// the default implementation just injects dispatch into your component’s props.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

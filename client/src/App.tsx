import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ShowProps } from "./types";
import { AppState } from "./reducer";
import MovieList from "./components/MovieList";
import { popularTvShowsFetch } from "./actions";
import "./App.css";

type AppProps = {
  fetchTvShows: Function;
  shows: Array<ShowProps>;
};

export class App extends React.Component<AppProps> {
  componentWillMount() {
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

const mapStateToProps = (state: AppState) => {
  return {
    shows: state.discoveredShows
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTvShows: () => dispatch(popularTvShowsFetch())
});

// If the mapDispatchToProps function is not provided,
// the default implementation just injects dispatch into your component’s props.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

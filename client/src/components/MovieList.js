import React from "react";

import MovieCard from "./MovieCard"

export default class MovieList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cf pa2">
          {this.props.shows.map(show => <MovieCard show={show} key={show.id} />)}
        </div>
      </React.Fragment>
    );
  }
}

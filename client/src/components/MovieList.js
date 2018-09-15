import React from "react";

import MovieCard from "./MovieCard"

export default class MovieList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="f3 fw4 pa3 mv0">TV Shows</h2>
        <div className="cf pa2">
          {this.props.shows.map(show => <MovieCard show={show} key={show.id} />)}
        </div>
      </React.Fragment>
    );
  }
}

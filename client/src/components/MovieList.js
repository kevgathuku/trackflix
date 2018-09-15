import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MovieCard from "./MovieCard";

const MovieList = ({ shows }) => (
  <div className="cf pa2">
    {(shows || []).map(show => (
      <MovieCard show={show} key={show.id} />
    ))}
  </div>
);

MovieList.propTypes = {
  shows: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    shows: state.discoveredShows
  };
};

export default connect(mapStateToProps)(MovieList);

import React from "react";

import MovieCard from "./MovieCard";

const MovieList = ({ shows }) => (
  <div className="cf pa2">
    {(shows || []).map(show => (
      <MovieCard show={show} key={show.id} />
    ))}
  </div>
);

export default MovieList;

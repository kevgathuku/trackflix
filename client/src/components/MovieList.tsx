import * as React from "react";

import MovieCard from "./MovieCard";
import { ShowProps } from "../types";

interface MovieListProps {
  shows: Array<ShowProps>;
}

const MovieList: React.SFC<MovieListProps> = ({ shows }) => (
  <div className="cf pa2">
    {(shows || []).map(show => (
      <MovieCard show={show} key={show.id} />
    ))}
  </div>
);

export default MovieList;

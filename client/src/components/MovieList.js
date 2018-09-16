// @flow
import * as React from "react";

import MovieCard from "./MovieCard";
import type { ShowProps } from "../types";

type Props = {
  shows: Array<ShowProps>
};

const MovieList = ({ shows }: Props) => (
  <div className="cf pa2">
    {(shows || []).map(show => (
      <MovieCard show={show} key={show.id} />
    ))}
  </div>
);

export default MovieList;

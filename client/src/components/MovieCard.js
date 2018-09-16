// @flow
import * as React from "react";

import type { ShowProps } from "../types";

type Props = {
  show: ShowProps
};

export default class MovieCard extends React.Component<Props> {
  render() {
    return (
      <div className="fl w-50 w-25-m w-20-l pa2">
        <a
          href="https://www.themoviedb.org/?language=en"
          className="db link dim tc"
        >
          <img
            src={`https://image.tmdb.org/t/p/w342${
              this.props.show.poster_path
            }`}
            alt={this.props.show.name}
            className="w-100 db outline black-10"
          />
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">Title</dt>
            <dd className="ml0 black truncate w-100">{this.props.show.name}</dd>
          </dl>
        </a>
      </div>
    );
  }
}

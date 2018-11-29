import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Button } from "@storybook/react/demo";
import MovieCard from "../src/components/MovieCard";

const stories = storiesOf("MovieImage", module);

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs);

const sampleShow = {
  backdrop_path: "/mmxxEpTqVdwBlu5Pii7tbedBkPC.jpg",
  name: "The Flash",
  poster_path: "/fki3kBlwJzFp8QohL43g9ReV455.jpg",
  vote_average: 6.7,
};

stories.add("with sample show", () => <MovieCard show={sampleShow} />);

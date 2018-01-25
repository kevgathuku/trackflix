// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "tachyons/css/tachyons.min.css";

import MovieList from "../react-components/MovieList";

let getShows = () => {
  return window.gon.all_shows;
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("react-root")) {
    ReactDOM.render(
      <MovieList shows={getShows()} />,
      document.getElementById("react-root")
    );
  }
});

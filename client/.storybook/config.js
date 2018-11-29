import { configure } from "@storybook/react";

require("tachyons");
require("../src/index.css");

function loadStories() {
  require("../stories/MovieCard.story.js");
  require("../stories/SampleButton.story.js");
  // You can require as many stories as you need.
}
configure(loadStories, module);

// Run this example by adding <%= javascript_pack_tag "hello_elm" %> to the
// head of your layout file, like app/views/layouts/application.html.erb.
// It will render "Hello Elm!" within the page.

import Elm from "../Main";
import "tachyons/css/tachyons.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("root");

  document.body.appendChild(target);
  Elm.Main.embed(target);
});


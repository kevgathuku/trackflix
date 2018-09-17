import axios from "axios";
import * as qs from "qs";

import { trakt } from "./trakt";

require("dotenv").config();

const BASE_API_URL = "https://api.themoviedb.org/3";

const requiredParams = qs.stringify({
  api_key: process.env.TMDB_API_KEY
});

export const discoverTvShows = () => {
  return axios
    .get(`${BASE_API_URL}/discover/tv?${requiredParams}`)
    .then(response => {
      console.log("response", response.data);
      return { data: response.data };
    })
    .catch(error => {
      console.error(error);
      return { error };
    });
};

export const traktAuth = () => {
  return { authURL: trakt.get_url() };
};

export const traktRedirect = request => {
  const { code, state } = request.query;
  console.log("code", code);
  console.log("state", state);

  // TODO: Return actual error response with correct statusCode
  if (!code) return { error: "Invalid data" };

  return trakt
    .exchange_code(code, state)
    .then(result => {
      console.log("result", result);
      // contains tokens & session information
      // API can now be used with authorized requests
      return trakt.sync
        .watched({
          type: "shows"
        })
        .then(watchedShows => {
          console.log("watchedShows", watchedShows);
          return { watchedShows };
        });
    })
    .catch(error => {
      console.error(error);
      return { error };
    });
};

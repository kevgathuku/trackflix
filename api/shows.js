const axios = require("axios");
const qs = require("qs");

require("dotenv").config();

const BASE_API_URL = "https://api.themoviedb.org/3";

const requiredParams = qs.stringify({
  api_key: process.env.TMDB_API_KEY
});

const discoverTvShows = () => {
  return axios
    .get(`${BASE_API_URL}/discover/tv?${requiredParams}`)
    .then(response => {
      console.log("response", response.data);
      return { data: response.data };
    })
    .catch(error => {
      console.error(error);
      return { error: error };
    });
};

module.exports = { discoverTvShows };

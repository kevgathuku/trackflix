const Trakt = require('trakt.tv');

require("dotenv").config();

const options = {
  client_id: process.env.TRAKT_CLIENT_ID,
  client_secret: process.env.TRAKT_CLIENT_SECRET,
  redirect_uri: null,   // defaults to 'urn:ietf:wg:oauth:2.0:oob'
  api_url: null,        // defaults to 'https://api.trakt.tv'
  useragent: null,      // defaults to 'trakt.tv/<version>'
  pagination: true      // defaults to false, global pagination (see below)
};

export const trakt = new Trakt(options);

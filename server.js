const Path = require("path");
const Hapi = require("hapi");
const namespace = require("hapijs-namespace");
const Inert = require("inert");

const api = require("./api/shows");

// Create a server with a host and port
const server = Hapi.server({
  host: "0.0.0.0",
  port: process.env.PORT || 8000,
  routes: {
    cors: true,
    files: {
      relativeTo: Path.join(__dirname, "client", "build")
    }
  }
});

namespace(server, "/api", [
  {
    method: "GET",
    path: "/discover",
    config: {
      description: "Discover TV shows",
      handler: api.discoverTvShows
    }
  }
]);

server.route({
  method: "GET",
  path: "/ping",
  handler: function(request, h) {
    return "PONG";
  }
});

async function start() {
  try {
    await server.register(Inert);

    server.route({
      method: "GET",
      path: "/{param*}",
      handler: {
        directory: {
          path: ".",
          redirectToSlash: true,
          index: true
        }
      }
    });

    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
}

start();

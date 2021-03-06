const axios = require("axios");

let BASE_URL;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:8000/api";
} else {
  BASE_URL = "https://trackflix.herokuapp.com/api";
}

export async function fetchPopularShows() {
  try {
    const response = await axios.get(`${BASE_URL}/discover`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

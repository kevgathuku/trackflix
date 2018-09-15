import { ActionTypes } from "./actions";

const initialState = {
  loading: false,
  discoveredShows: [
    {
      original_name: "The Big Bang Theory",
      genre_ids: [35],
      name: "The Big Bang Theory",
      popularity: 326.089,
      origin_country: ["US"],
      vote_count: 3210,
      first_air_date: "2007-09-24",
      backdrop_path: "/nGsNruW3W27V6r4gkyc3iiEGsKR.jpg",
      original_language: "en",
      id: 1418,
      vote_average: 6.8,
      overview:
        "The Big Bang Theory is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
      poster_path: "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg"
    },
    {
      original_name: "American Horror Story",
      genre_ids: [18, 9648, 10765],
      name: "American Horror Story",
      popularity: 145.95,
      origin_country: ["US"],
      vote_count: 816,
      first_air_date: "2011-10-05",
      backdrop_path: "/ilKE2RPD8tkynAOHefX9ZclG1yq.jpg",
      original_language: "en",
      id: 1413,
      vote_average: 7.1,
      overview:
        "An anthology horror drama series centering on different characters and locations, including a house with a murderous past, an asylum, a witch coven, a freak show, a hotel, a farmhouse in Roanoke and a cult.",
      poster_path: "/7htwyZzjIUFIIkGQ6HhMgv2kVmM.jpg"
    },
    {
      original_name: "Marvel's Iron Fist",
      genre_ids: [80, 18, 10759, 10765],
      name: "Marvel's Iron Fist",
      popularity: 83.111,
      origin_country: ["US"],
      vote_count: 652,
      first_air_date: "2017-03-17",
      backdrop_path: "/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg",
      original_language: "en",
      id: 62127,
      vote_average: 6.1,
      overview:
        "Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny.",
      poster_path: "/nv4nLXbDhcISPP8C1mgaxKU50KO.jpg"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TV_SHOWS_FETCH:
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
}

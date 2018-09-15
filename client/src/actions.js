export const ActionTypes = {
  TV_SHOWS_FETCH: "TV_SHOWS_FETCH",
  TV_SHOWS_FETCHED: "TV_SHOWS_FETCHED"
};

export const discoverTvShows = () => ({
  type: ActionTypes.TV_SHOWS_FETCH
});

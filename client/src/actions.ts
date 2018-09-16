export const enum ActionTypes {
  TV_SHOWS_FETCH = "TV_SHOWS_FETCH",
  TV_SHOWS_FETCHED = "TV_SHOWS_FETCHED"
};

export const popularTvShowsFetch = () => ({
  type: ActionTypes.TV_SHOWS_FETCH
});

export const popularTvShowsFetched = ({
  data = [],
  error = null
} = {}) => ({
  type: ActionTypes.TV_SHOWS_FETCHED,
  data,
  error,
});

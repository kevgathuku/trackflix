import { ActionTypes } from "./actions";

const initialState = {
  loading: false,
  error: null,
  discoveredShows: []
};

export default (state = initialState, action) => {
  const { data, error = null } = action;
  switch (action.type) {
    case ActionTypes.TV_SHOWS_FETCH:
      return Object.assign({}, state, {
        loading: true
      });
    case ActionTypes.TV_SHOWS_FETCHED:
      return Object.assign({}, state, {
        discoveredShows: data,
        error
      });
    default:
      return state;
  }
};

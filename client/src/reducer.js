import { ActionTypes } from "./actions";

const initialState = {
  loading: false,
  tvShowsResponse: {
    error: "",
    data: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TV_SHOWS_FETCH:
      return Object.assign({}, state, {
        loading: true,
      });
    case ActionTypes.TV_SHOWS_FETCHED:
      const {
        payload: { error = "", data = [] },
      } = action;
      return Object.assign({}, state, {
        loading: false,
        tvShowsResponse: {
          error,
          data,
        },
      });
    default:
      return state;
  }
};

export default reducer;

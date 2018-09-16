import { ActionTypes } from "./actions";

type State = {
  +loading: boolean,
  +error?: string,
  +discoveredShows: Array<ShowProps>
};

const initialState: State = {
  loading: false,
  error: null,
  discoveredShows: []
};

const reducer = (state = initialState, action): State => {
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

export default reducer;

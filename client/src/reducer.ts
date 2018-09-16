import { Reducer } from 'redux'

import { ActionTypes } from "./actions";
import { ShowProps } from "./types";

export interface AppState {
  loading: boolean;
  error?: string;
  discoveredShows: Array<ShowProps>;
}

const initialState: AppState = {
  loading: false,
  error: undefined,
  discoveredShows: []
};

const reducer: Reducer<AppState> = (state = initialState, action) => {
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

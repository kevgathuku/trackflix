import { ActionTypes } from "./actions";
import type { Action, ShowProps } from "./types";

export type State = {
  +loading: boolean,
  +tvShowsResponse: {
    error: string,
    data: Array<ShowProps>
  }
};

const initialState: State = {
  loading: false,
  tvShowsResponse: {
    error: "",
    data: []
  }
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.TV_SHOWS_FETCH:
      return Object.assign({}, state, {
        loading: true
      });
    case ActionTypes.TV_SHOWS_FETCHED:
      const {
        payload: { error = '', data= [] }
      } = action;
      return Object.assign({}, state, {
        loading: false,
        tvShowsResponse: {
          error,
          data
        }
      });
    default:
      return state;
  }
};

export default reducer;

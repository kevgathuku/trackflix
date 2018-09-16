import deepFreeze from "deep-freeze";

import appReducer from "./reducer";
import { ActionTypes } from "./actions";
import type { State } from "./reducer";

describe("Reducer", () => {
  it("returns initial state by default", () => {
    const data = [{ name: "Show 1" }, { name: "Show 2" }];
    const error = "Error!!!!!";
    const action = {
      type: "non-existent",
      data,
      error
    };

    const stateBefore: State = {
      loading: false,
      error: null,
      discoveredShows: []
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const stateAfter = appReducer(stateBefore, action);

    expect(stateBefore).toEqual(stateAfter);
  });

  it("ActionTypes.TV_SHOWS_FETCH", () => {
    const action = {
      type: ActionTypes.TV_SHOWS_FETCH
    };

    const stateBefore = {
      loading: false
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const stateAfter = appReducer(stateBefore, action);

    expect(stateAfter.loading).toBeTruthy();
  });

  it("ActionTypes.TV_SHOWS_FETCHED", () => {
    const data = [{ name: "Show 1" }, { name: "Show 2" }];
    const error = "Error!!!!!";
    const action = {
      type: ActionTypes.TV_SHOWS_FETCHED,
      payload: {
        data,
        error
      }
    };

    const stateBefore = {
      loading: true,
      error: null,
      discoveredShows: []
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const stateAfter = appReducer(stateBefore, action);

    expect(stateAfter.loading).toBeFalsy();
    expect(stateAfter.tvShowsResponse.data).toEqual(data);
    expect(stateAfter.tvShowsResponse.error).toEqual(error);
  });
});

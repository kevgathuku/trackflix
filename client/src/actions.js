// @flow

import type { TvShowResponseType, TvShowsFetchedAction } from "./types";

export const ActionTypes = {
  TV_SHOWS_FETCH: "TV_SHOWS_FETCH",
  TV_SHOWS_FETCHED: "TV_SHOWS_FETCHED"
};

export const tvShowsFetchAction = {
  type: ActionTypes.TV_SHOWS_FETCH
};

export const popularTvShowsFetched = (
  action: TvShowResponseType
): TvShowsFetchedAction => {
  const { data, error } = action;

  return {
    type: ActionTypes.TV_SHOWS_FETCHED,
    payload: {
      data,
      error
    }
  };
};

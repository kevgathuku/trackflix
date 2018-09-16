// @flow
import type { Action, ShowProps } from "./types";

export const ActionTypes = {
  TV_SHOWS_FETCH: "TV_SHOWS_FETCH",
  TV_SHOWS_FETCHED: "TV_SHOWS_FETCHED"
};

export const popularTvShowsFetch = (): Action => ({
  type: ActionTypes.TV_SHOWS_FETCH
});

type ResponseType = {
  data?: Array<ShowProps>,
  error?: string
};

export const popularTvShowsFetched = ({ data = [] }: ResponseType = {}) => ({
  type: ActionTypes.TV_SHOWS_FETCHED,
  data
});

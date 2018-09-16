// @flow

export type ShowProps = {
  poster_path: string,
  name: string,
  id: number
};

export type TvShowResponseType = { data: ShowProps[], error: string };

// Actions
type TvShowsFetchAction = {
  +type: string,
  payload?: TvShowResponseType
};

export type TvShowsFetchedAction = {
  +type: string,
  payload: TvShowResponseType
};

export type Action = TvShowsFetchAction | TvShowsFetchedAction;

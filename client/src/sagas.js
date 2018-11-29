import { takeLatest, call, put } from "redux-saga/effects";

import * as api from "./api";
import { ActionTypes, popularTvShowsFetched } from "./actions";

function* fetchPopularTvShows() {
  try {
    const { results } = yield call(api.fetchPopularShows);
    yield put(popularTvShowsFetched({ data: results, error: "" }));
  } catch (e) {
    yield put(popularTvShowsFetched({ data: [], error: e }));
  }
}

/*
  takeLatest does not allow concurrent fetches
  If the same action gets dispatched while a fetch is already pending,
  that pending fetch is cancelled and only the latest one will be run.
*/
export default function* appSagas(): Saga<void> {
  yield takeLatest(ActionTypes.TV_SHOWS_FETCH, fetchPopularTvShows);
}

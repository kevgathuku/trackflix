import { takeLatest, call, put } from "redux-saga/effects";

import * as api from "./api";
import { ActionTypes, popularTvShowsFetched } from "./actions";

function* fetchPopularTvShows(_action) {
  try {
    const { results, ...meta} = yield call(api.fetchPopularShows);
    yield put(popularTvShowsFetched({ data: results }));
  } catch (e) {
    yield put(popularTvShowsFetched({ error: e }));
  }
}

/*
  takeLatest does not allow concurrent fetches
  If the same action gets dispatched while a fetch is already pending,
  that pending fetch is cancelled and only the latest one will be run.
*/
export default function* appSagas() {
  yield takeLatest(ActionTypes.TV_SHOWS_FETCH, fetchPopularTvShows);
}

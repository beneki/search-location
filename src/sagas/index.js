import { put, takeEvery } from "redux-saga/effects";
import getSuggestedLocations from "./requests/getSuggestedLocationsAsync";
import { fetchDataSuccess, fetchDataFailed } from "../actions/";
import { FETCH_DATA } from "../actions/consts";
import { START } from "../actions/commonActionTypes";

function* fetchLocationData(action) {
  try {
    const resultList = yield getSuggestedLocations(action.payload);

    yield put(fetchDataSuccess(resultList));
  } catch (error) {
    yield put(fetchDataFailed(error));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_DATA + START, fetchLocationData);
}

export default rootSaga;

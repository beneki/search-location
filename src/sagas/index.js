import { put, takeEvery } from "redux-saga/effects";
import getSuggestedLocationsAsync from "./requests/getSuggestedLocationsAsync";
import { fetchDataSuccess, fetchDataFailed } from "../actions/";
import { FETCH_DATA } from "../actions/consts";
import { START } from "../actions/commonActionTypes";

function* fetchLocationData(action) {
  try {
    const customRequest = new getSuggestedLocationsAsync();
    const resultList = yield customRequest.getSuggestedLocations(
      action.payload
    );

    yield put(fetchDataSuccess(resultList));
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log("error is : " + error);
    yield put(fetchDataFailed());
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_DATA + START, fetchLocationData);
}

export default rootSaga;

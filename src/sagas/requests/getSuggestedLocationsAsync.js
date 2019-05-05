import "whatwg-fetch";
import { fetchDataFailed } from "../../actions/";
import { put } from "redux-saga/effects";

export default function* getSuggestedLocations(searchStr) {
  try {
    const response = yield fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${searchStr}`
    );

    return yield response.json();
  } catch (error) {
    yield put(fetchDataFailed(error));
  }
}

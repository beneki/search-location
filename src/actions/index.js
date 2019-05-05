import { ADD_LOCATION, OMIT_LOCATION, FETCH_DATA } from "./consts";
import { START, SUCCESS, ERROR } from "./commonActionTypes";

const fetchDataStart = payload => ({
    type: FETCH_DATA + START,
    payload
  }),
  fetchDataSuccess = payload => ({
    type: FETCH_DATA + SUCCESS,
    payload
  }),
  fetchDataFailed = payload => ({
    type: FETCH_DATA + ERROR,
    payload
  }),
  addLocation = payload => ({
    type: ADD_LOCATION,
    payload
  }),
  omitLocation = payload => ({
    type: OMIT_LOCATION,
    payload
  });

export {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailed,
  addLocation,
  omitLocation
};

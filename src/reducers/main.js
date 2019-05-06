import { ADD_LOCATION, OMIT_LOCATION, FETCH_DATA } from "./../actions/consts";
import { START, SUCCESS, ERROR } from "../actions/commonActionTypes";
import { fetchDataStart, fetchDataSuccess } from "../actions";

const initialState = {
  suggested: {
    isLoading: false,
    error: null,
    items: []
  },
  locationHistory: [],
  loading: false
};

const reducerHandler = (state, payload) => {
  const addLocation = () => ({
      ...state,
      locationHistory: [
        ...[...state.locationHistory, payload]
          .reduce((m, t) => m.set(t.place_id, t), new Map())
          .values()
      ]
    }),
    omitLocation = () => ({
      ...state,
      locationHistory: state.locationHistory.filter(itm => itm !== payload)
    }),
    fetchDataStart = () => ({
      ...state,
      suggested: { ...state.suggested, isLoading: true }
    }),
    fetchDataSuccess = () => ({
      ...state,
      suggested: { ...state.suggested, isLoading: false, items: payload }
    }),
    fetchDataError = () => ({
      ...state,
      suggested: { ...state.suggested, isLoading: false, error: payload }
    });

  return {
    [ADD_LOCATION]: addLocation,
    [OMIT_LOCATION]: omitLocation,
    [FETCH_DATA + START]: fetchDataStart,
    [FETCH_DATA + SUCCESS]: fetchDataSuccess,
    [FETCH_DATA + ERROR]: fetchDataError
  };
};

const pickReducer = (state = initialState, action) => {
  const reducer = reducerHandler(state, action.payload)[action.type];
  return reducer ? reducer() : state;
};
export default pickReducer;

import { ADD_LOCATION, OMIT_LOCATION, FETCH_DATA } from "./../actions/consts";
import { START, SUCCESS, ERROR } from "../actions/commonActionTypes";

const initialState = {
  suggested: {
    isLoading: false,
    error: null,
    items: []
  },
  locationHistory: [],
  loading: false
};

const addLocationToHistory = (state, payload) => {
    if (!state.locationHistory.includes(payload)) {
      state.locationHistory.push(payload);
    }
    return state;
  },
  omitLocationFromHistory = (state, payload) => ({
    ...state,
    locationHistory: state.locationHistory.includes(payload)
      ? state.locationHistory.filter(loc => loc !== payload)
      : state.locationHistory
  }),
  getSuggestedDataStart = (state, payload) => ({
    ...state,
    suggested: { ...state.suggested, isLoading: true }
  }),
  getSuggestedDataSucceed = (state, payload) => ({
    ...state,
    suggested: { ...state.suggested, isLoading: false, items: payload }
  }),
  getSuggestedDataFailed = (state, payload) => ({
    ...state,
    suggested: { ...state.suggested, isLoading: false, error: payload }
  });

const reducerHandler = {
  [ADD_LOCATION]: addLocationToHistory,
  [OMIT_LOCATION]: omitLocationFromHistory,
  [FETCH_DATA + START]: getSuggestedDataStart,
  [FETCH_DATA + SUCCESS]: getSuggestedDataSucceed,
  [FETCH_DATA + ERROR]: getSuggestedDataFailed
};

export default (state = initialState, action) => {
  const reducer = reducerHandler[action.type];
  return reducer ? reducer(state, action.payload) : state;
};

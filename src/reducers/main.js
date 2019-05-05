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

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_LOCATION:
      return {
        ...state,
        locationHistory: [...state.locationHistory, payload]
      };
      break;
    case OMIT_LOCATION:
      return {
        ...state,
        locationHistory: state.locationHistory.filter(itm => itm !== payload)
      };
      break;
    case FETCH_DATA + START:
      return {
        ...state,
        suggested: { ...state.suggested, isLoading: true }
      };
      break;
    case FETCH_DATA + SUCCESS:
      return {
        ...state,
        suggested: { ...state.suggested, isLoading: false, items: payload }
      };
      break;
    case FETCH_DATA + ERROR:
      return {
        ...state,
        suggested: { ...state.suggested, isLoading: false, error: payload }
      };
      break;
    default:
      return state;
      break;
  }
};

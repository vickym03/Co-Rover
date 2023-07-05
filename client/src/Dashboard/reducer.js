import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAILED,
} from "./actions";

const initialState = {
  dashboardData: [],
  loading: false,
  // error: undefined,
};

export default function dashboardReducers(state = initialState, action) {
  switch ((action, action.type)) {
    case GET_DASHBOARD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboardData: action.payload.data,
        loading: false,
      };

    case GET_DASHBOARD_FAILED:
      return {
        ...state,
        // error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

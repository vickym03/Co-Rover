import {
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
} from "./actions";

const initialState = {
  refreshData: undefined,
  loading: false,
  logoutData: undefined,
  error: undefined,
};

export default function authReducer(state = initialState, action) {
  switch ((action, action.type)) {
    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        refreshData: action.payload,
        loading: false,
      };

    case REFRESH_TOKEN_FAILED:
      return {
        ...state,
        error: action.message,
        loading: false,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutData: action.payload.data,
        loading: false,
      };

    case LOGOUT_FAILED:
      return {
        ...state,
        error: action.message,
        loading: false,
      };

    default:
      return state;
  }
}

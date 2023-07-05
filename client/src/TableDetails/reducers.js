import {
  ADD_USERS_REQUEST,
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  RESET_ADD_USERS,
} from "./actions";

const initialState = {
  addUser: undefined,
  loading: false,
  userData: [],
  error: undefined,
  adduserStatus: false,
};

export default function addUsersReducer(state = initialState, action) {
  switch ((action, action.type)) {
    case ADD_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_USERS_SUCCESS:
      //   console.log("state reducer", action.payload)
      console.log("action.payload.data", action.payload.data);
      return {
        ...state,
        addUser: action.payload.data,
        loading: false,
        adduserStatus: true,
      };

    case ADD_USERS_FAILED:
      return {
        ...state,
        error: action.message,
        loading: false,
        adduserStatus: false,
      };

    case RESET_ADD_USERS:
      return {
        ...state,
        addUser: undefined,
      };

    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        userData: action.payload.data,
        loading: false,
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        error: action.message,
        loading: false,
      };

    default:
      return state;
  }
}

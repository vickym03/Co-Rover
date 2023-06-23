import { ADD_USERS_REQUEST, ADD_USERS_SUCCESS, ADD_USERS_FAILED, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from "../actions";

const initialState = {
    addUser: undefined,
    loading: false,
    login: undefined,
    error: undefined,
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
            return {
                ...state,
                addUsers: action.payload,
                loading: false,
            };

        case ADD_USERS_FAILED:
            return {
                ...state,
                error: action.message,
                loading: false,
            };




        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_USERS_SUCCESS:
            return {
                ...state,
                login: action.payload.data,
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

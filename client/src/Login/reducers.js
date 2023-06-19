import { REGISTER_USERS_REQUEST, REGISTER_USERS_SUCCESS, REGISTER_USERS_FAILED, LOGIN_USERS_REQUEST, LOGIN_USERS_SUCCESS, LOGIN_USERS_FAILED } from "./actions";

const initialState = {
    register: undefined,
    loading: false,
    login: undefined,
    error: undefined,
};

export default function usersReducer(state = initialState, action) {

    switch ((action, action.type)) {

        case REGISTER_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case REGISTER_USERS_SUCCESS:
            //   console.log("state reducer", action.payload)
            return {
                ...state,
                register: action.payload,
                loading: false,
            };

        case REGISTER_USERS_FAILED:
            return {
                ...state,
                error: action.message,
                loading: false,
            };




        case LOGIN_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case LOGIN_USERS_SUCCESS:
            return {
                ...state,
                login: action.payload.data,
                loading: false,
            };

        case LOGIN_USERS_FAILED:
            return {
                ...state,
                error: action.message,
                loading: false,
            };


        default:
            return state;
    }
}

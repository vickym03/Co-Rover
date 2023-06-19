import { call, put, takeLatest } from "redux-saga/effects";
import { REGISTER_USERS_REQUEST,getRegisterSuccess, getRegisterFailed, LOGIN_USERS_REQUEST, getLoginSuccess, getLoginFailed } from "./actions";
import { UserApi } from "../core/UserApi";

function* registerUsers(action) {
    const { payload, error } = yield call(UserApi.registerApi, action)
    if (payload) {
        console.log("saga pay", payload)
        yield put(getRegisterSuccess(payload))
    } else {
        yield put(getRegisterFailed(error))
    }

}

function* loginUsers(action) {

  const { payload, error } = yield call(UserApi.loginApi, action);
    if (payload) {
        console.log("saga pay", payload)
        yield put(getLoginSuccess(payload));
    } else {
        yield put(getLoginFailed(error));
    }
}

export const registerUsersSaga = [takeLatest(REGISTER_USERS_REQUEST, registerUsers)];

export const registerloginSaga = [takeLatest(LOGIN_USERS_REQUEST, loginUsers)];


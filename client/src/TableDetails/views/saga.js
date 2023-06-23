
import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_USERS_REQUEST, addUserSuccess, addUserFailed, GET_USERS_REQUEST, getUsersSuccess, getUsersFailed } from "../actions";
import { UserApi } from "../../core/UserApi";

function* addUsers(action) {
  const { payload, error } = yield call(UserApi.addUserApi, action)
  if (payload) {
    console.log("saga pay", payload)
    yield put(addUserSuccess(payload))
  } else {
    yield put(addUserFailed(error))
  }

}

function* loginUsers(action) {

  const { payload, error } = yield call(UserApi.loginApi, action);
  if (payload) {
    console.log("saga pay", payload)
    yield put(getUsersSuccess(payload));
  } else {
    yield put(getUsersFailed(error));
  }
}

export const addUserSaga = [takeLatest(ADD_USERS_REQUEST, addUsers)];

export const registerloginSaga = [takeLatest(GET_USERS_REQUEST, loginUsers)];


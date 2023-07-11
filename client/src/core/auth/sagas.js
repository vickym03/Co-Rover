import { call, put, takeLatest } from "redux-saga/effects";

import { UserApi } from "../UserApi";

import {
  REFRESH_TOKEN_REQUEST,
  refreshTokenFailed,
  refreshTokenSuccess,
} from "./actions";

function* refreshToken(action) {
  
  const { payload, error } = yield call(UserApi.refreshTokenApi, action);
  if (payload) {
    yield put(refreshTokenSuccess(payload));
  } else {
    yield put(refreshTokenFailed(error));
  }
}

// function* logoutToken(action) {
//    console.log("getUserData", action)
//   const { payload, error } = yield call(UserApi.getUserDataApi, action);
//   if (payload) {
//     // console.log("saga pay", payload)
//     yield put(getUsersSuccess(payload));
//   } else {
//     console.log("error");
//     yield put(getUsersFailed(error));
//   }
// }

export const refreshTokenSaga = [
  takeLatest(REFRESH_TOKEN_REQUEST, refreshToken),
];

// export const getUserDataSaga = [takeLatest(GET_USERS_REQUEST, getUserData)];

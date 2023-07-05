import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_DASHBOARD_REQUEST,
  dashboardFailed,
  dashboardSuccess,
} from "./actions";
import { UserApi } from "../core/UserApi";

function* dashboardData(action) {
  const { payload, error } = yield call(UserApi.getDashboardApi, action);
  if (payload) {
    yield put(dashboardSuccess(payload));
  } else {
    yield put(dashboardFailed(error));
  }
}

export const dashboardSaga = [takeLatest(GET_DASHBOARD_REQUEST, dashboardData)];

import { all } from "@redux-saga/core/effects";

import { registerUsersSaga,registerloginSaga } from "./Login/saga";

export default function* rootSaga() {
  yield all([...registerUsersSaga,...registerloginSaga]);
}

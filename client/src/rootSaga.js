import { all } from "@redux-saga/core/effects";

import { registerUsersSaga, registerloginSaga } from "./Login/saga";
import { addUserSaga, getUserDataSaga } from "./TableDetails/saga";
import { dashboardSaga } from "./Dashboard/sagas";
import { refreshTokenSaga } from "./core/auth/sagas";

export default function* rootSaga() {
  yield all([
    ...registerUsersSaga,
    ...registerloginSaga,
    ...addUserSaga,
    ...getUserDataSaga,
    ...dashboardSaga,
    ...refreshTokenSaga,
  ]);
}

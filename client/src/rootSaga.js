import { all } from "@redux-saga/core/effects";

import { registerUsersSaga,registerloginSaga } from "./Login/saga";
import { addUserSaga } from "./TableDetails/views/saga";

export default function* rootSaga() {
  yield all([...registerUsersSaga,...registerloginSaga, ...addUserSaga]);
}

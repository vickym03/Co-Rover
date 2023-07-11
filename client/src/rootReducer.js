import { combineReducers } from "redux";
import usersReducer from "./Login/reducers";
import addUsersReducer from "./TableDetails/reducers";
import dashboardReducers from "./Dashboard/reducer";
import authReducer from "./core/auth/reducer";

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  addUsersReducer: addUsersReducer,
  dashboardReducers: dashboardReducers,
  authReducer:authReducer
});

export default rootReducer;

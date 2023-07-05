import { combineReducers } from "redux";
import usersReducer from "./Login/reducers";
import addUsersReducer from "./TableDetails/reducers";
import dashboardReducers from "./Dashboard/reducer";

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  addUsersReducer: addUsersReducer,
  dashboardReducers: dashboardReducers,
});

export default rootReducer;

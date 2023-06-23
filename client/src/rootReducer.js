import { combineReducers } from "redux";
import usersReducer from "./Login/reducers";
import addUsersReducer from "./TableDetails/views/reducers";

const rootReducer = combineReducers({
   usersReducer:usersReducer,
   addUsersReducer:addUsersReducer
});

export default rootReducer
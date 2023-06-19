import { combineReducers } from "redux";
import usersReducer from "./Login/reducers";

const rootReducer = combineReducers({
   usersReducer:usersReducer
});

export default rootReducer
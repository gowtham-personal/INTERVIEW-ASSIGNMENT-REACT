import { combineReducers } from "redux";
import authReducer from "../screens/auth/authReducers";

const rootReducer = combineReducers({
  authReducer
});
export default rootReducer;

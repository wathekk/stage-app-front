import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import stages from "./stages";

export default combineReducers({
  alert,
  auth,
  stages,
});

import fileReducer from "./file";
import loginReducer from "./login";
import { combineReducers } from "redux";

export default combineReducers({
  fileState: fileReducer,
  logineState: loginReducer,
});

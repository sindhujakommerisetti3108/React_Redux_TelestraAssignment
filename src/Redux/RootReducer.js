import { combineReducers } from "redux";
import UserListReducer from "./UserListReducer";

const RootReducer = combineReducers({
  data: UserListReducer
});
export default RootReducer;

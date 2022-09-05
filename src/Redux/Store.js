import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [ReduxThunk];
const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default Store;

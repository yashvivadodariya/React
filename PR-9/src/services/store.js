import { applyMiddleware, compose, createStore } from "redux";
import { menuReducer } from "./reducers/menuReducer";
import { thunk } from "redux-thunk";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  menuReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
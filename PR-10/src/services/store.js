import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { menuReducer } from "./reducers/menuReducer";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  menuReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
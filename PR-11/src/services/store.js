import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { menuReducer } from "./reducers/menuReducer";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  auth: authReducer, 
});

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
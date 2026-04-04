import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loading = () => ({ type: "AUTH_LOADING" });
export const errorMsg = (msg) => ({ type: "AUTH_ERROR", payload: msg });

export const registerSuccess = (user) => ({
  type: "REGISTER_SUCCESS",
  payload: user,
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const logoutSuccess = () => ({
  type: "LOGOUT",
});

// REGISTER
export const registerAsync = (email, password) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(registerSuccess(res.user));
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginSuccess(res.user));
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};

export const logoutAsync = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logoutSuccess());
  };
};
import db from "../firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

/* ACTIONS */

export const loading = () => ({ type: "LOADING" });
export const errorMsg = (msg) => ({ type: "ERROR", payload: msg });

export const getAllMenu = (data) => ({
  type: "GET_ALL_MENU",
  payload: data,
});

export const getMenu = (data) => ({
  type: "GET_MENU",
  payload: data,
});

export const addMenu = () => ({ type: "ADD_MENU" });

export const updateMenu = () => ({ type: "UPDATE_MENU" });

export const deleteMenu = (id) => ({
  type: "DELETE_MENU",
  payload: id,
});

/* HELPER */
const snapshotToArray = (snapshot) => {
  const arr = [];
  snapshot.forEach((docSnap) => {
    arr.push({ ...docSnap.data(), id: docSnap.id });
  });
  return arr;
};

/* ================== FIREBASE ================== */

// GET ALL
export const getAllMenuAsync = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const snapshot = await getDocs(collection(db, "menus"));
      dispatch(getAllMenu(snapshotToArray(snapshot)));
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};

// GET SINGLE
export const getMenuAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const snap = await getDoc(doc(db, "menus", id));
      if (snap.exists()) {
        dispatch(getMenu({ ...snap.data(), id: snap.id }));
      }
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};

// ADD
export const addMenuAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const ref = await addDoc(collection(db, "menus"), data);

      await setDoc(doc(db, "menus", ref.id), {
        ...data,
        id: ref.id,
      });

      dispatch(addMenu());
      dispatch(getAllMenuAsync());
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};

// UPDATE
export const updateMenuAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await setDoc(doc(db, "menus", data.id), data);
      dispatch(updateMenu());
      dispatch(getAllMenuAsync());
      return true;
    } catch (err) {
      dispatch(errorMsg(err.message));
      return false;
    }
  };
};

// DELETE
export const deleteMenuAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await deleteDoc(doc(db, "menus", id));
      dispatch(deleteMenu(id));
      dispatch(getAllMenuAsync());
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};
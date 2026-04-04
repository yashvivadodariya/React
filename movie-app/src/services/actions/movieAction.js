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

export const loading = () => ({ type: "LOADING" });
export const errorMsg = (msg) => ({ type: "ERROR", payload: msg });

export const getAllMovie = (data) => ({
  type: "GET_ALL_MOVIE",
  payload: data,
});

export const getMovie = (data) => ({
  type: "GET_MOVIE",
  payload: data,
});

export const addMovie = () => ({ type: "ADD_MOVIE" });

export const updateMovie = () => ({ type: "UPDATE_MOVIE" });

export const deleteMovie = (id) => ({
  type: "DELETE_MOVIE",
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

// GET ALL
export const getAllMovieAsync = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const snapshot = await getDocs(collection(db, "movies")); // 🔥 collection change
      dispatch(getAllMovie(snapshotToArray(snapshot)));
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};

// GET SINGLE
export const getMovieAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const snap = await getDoc(doc(db, "movies", id));
      if (snap.exists()) {
        dispatch(getMovie({ ...snap.data(), id: snap.id }));
      }
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};

// ADD
export const addMovieAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const ref = await addDoc(collection(db, "movies"), data);

      await setDoc(doc(db, "movies", ref.id), {
        ...data,
        id: ref.id,
      });

      dispatch(addMovie());
      dispatch(getAllMovieAsync());
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};

// UPDATE
export const updateMovieAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await setDoc(doc(db, "movies", data.id), data);
      dispatch(updateMovie());
      dispatch(getAllMovieAsync());
      return true;
    } catch (err) {
      dispatch(errorMsg(err.message));
      return false;
    }
  };
};

// DELETE
export const deleteMovieAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await deleteDoc(doc(db, "movies", id));
      dispatch(deleteMovie(id));
      dispatch(getAllMovieAsync());
    } catch (err) {
      dispatch(errorMsg(err.message));
    }
  };
};
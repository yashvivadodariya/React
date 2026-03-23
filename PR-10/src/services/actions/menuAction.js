import { API } from "../api";

// LOADING
export const loading = () => ({
  type: "LOADING"
});

// ERROR
export const errorMsg = (msg) => ({
  type: "ERROR",
  payload: msg
});

// GET ALL
export const getAllMenuAsync = () => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      let res = await API.get("/menus");

      dispatch({
        type: "GET_ALL_MENU",
        payload: res.data
      });

    } catch (error) {
      dispatch(errorMsg(error.message));
    }
  }
};

// ADD
export const addMenuAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      let res = await API.post("/menus", data);

      dispatch({
        type: "ADD_MENU",
        payload: res.data
      });

    } catch (error) {
      dispatch(errorMsg(error.message));
    }
  }
};

// DELETE
export const deleteMenuAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      await API.delete(`/menus/${id}`);

      dispatch({
        type: "DELETE_MENU",
        payload: id
      });

    } catch (error) {
      dispatch(errorMsg(error.message));
    }
  }
};

// GET SINGLE
export const getMenuAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      let res = await API.get(`/menus/${id}`);

      dispatch({
        type: "GET_MENU",
        payload: res.data
      });

    } catch (error) {
      dispatch(errorMsg(error.message));
    }
  }
};

// UPDATE
export const updateMenuAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      await API.put(`/menus/${data.id}`, data);

      dispatch({
        type: "UPDATE_MENU",
        payload: data
      });

    } catch (error) {
      dispatch(errorMsg(error.message));
    }
  }
};
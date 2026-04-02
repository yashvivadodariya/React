const initialState = {
  user: null,
  loading: false,
  error: "",
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "AUTH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        loading: false,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
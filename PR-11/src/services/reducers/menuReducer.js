const initialState = {
  menus: [],
  menu: null,
  loading: false,
  error: "",
  isCreated: false,
  isUpdated: false,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {

    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "GET_ALL_MENU":
      return {
        ...state,
        menus: action.payload,
        loading: false,
        isCreated: false,
        isUpdated: false,
      };

    case "GET_MENU":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };

    case "ADD_MENU":
      return {
        ...state,
        isCreated: true,
        loading: false,
      };

    case "UPDATE_MENU":
      return {
        ...state,
        menu: null,
        isUpdated: true,
        loading: false,
      };

    case "DELETE_MENU":
      return {
        ...state,
        menus: state.menus.filter(m => m.id !== action.payload),
      };

    default:
      return state;
  }
};
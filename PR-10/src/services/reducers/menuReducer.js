const initialState = {
  menus: [],
  menu: null,
  loading: false,
  error: ""
};

export const menuReducer = (state = initialState, action) => {

  switch (action.type) {

    case "LOADING":
      return {
        ...state,
        loading: true
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "GET_ALL_MENU":
      return {
        ...state,
        loading: false,
        menus: action.payload
      };

    case "ADD_MENU":
      return {
        ...state,
        loading: false,
        menus: [...state.menus, action.payload]
      };

    case "DELETE_MENU":
      return {
        ...state,
        menus: state.menus.filter(m => m.id !== action.payload)
      };

    case "GET_MENU":
      return {
        ...state,
        menu: action.payload
      };

    case "UPDATE_MENU":
      return {
        ...state,
        menus: state.menus.map(m =>
          m.id === action.payload.id ? action.payload : m
        )
      };

    default:
      return state;
  }
};
const initialState = {
  movies: [],
  movie: null,
  loading: false,
  error: "",
  isCreated: false,
  isUpdated: false,
};

export const movieReducer = (state = initialState, action) => {
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

    case "GET_ALL_MOVIE":
      return {
        ...state,
        movies: action.payload,
        loading: false,
        isCreated: false,
        isUpdated: false,
      };

    case "GET_MOVIE":
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };

    case "ADD_MOVIE":
      return {
        ...state,
        isCreated: true,
        loading: false,
      };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movie: null,
        isUpdated: true,
        loading: false,
      };

    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(m => m.id !== action.payload),
      };

    default:
      return state;
  }
};
import { MovieType } from "../../@types/declare";

interface State {
  loading: boolean;
  movies: MovieType[];
  errorMessage: null | string;
}

type Action =
  | { type: "SEARCH_MOVIES_REQUEST" }
  | {
      type: "SEARCH_MOVIES_SUCCESS";
      payload: Array<MovieType>;
    }
  | { type: "SEARCH_MOVIES_FAILURE"; error: string };

export const initialState: State = {
  loading: true,
  movies: [],
  errorMessage: null,
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

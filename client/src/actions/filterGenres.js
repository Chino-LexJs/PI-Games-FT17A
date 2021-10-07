import { FILTER_GENRES } from "./index";

export function filterGenres(id) {
  return function (dispatch) {
    return dispatch({ type: FILTER_GENRES, payload: id });
  };
}

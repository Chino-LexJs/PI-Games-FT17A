import { GET_GENRES } from "./index";
import axios from "axios";

export function getGenres() {
  return async function (dispatch) {
    return axios
      .get("http://localhost:3001/genres")
      .then((res) => {
        dispatch({ type: GET_GENRES, payload: res.data.data });
      })
      .catch((err) => {
        return err;
      });
  };
}

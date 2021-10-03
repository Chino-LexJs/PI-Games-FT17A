import { GET_ALL_GAMES } from "./index";
import axios from "axios";

export function getAllGames() {
  return async function (dispatch) {
    return axios
      .get("http://localhost:3001/videogames")
      .then((res) => {
        dispatch({ type: GET_ALL_GAMES, payload: res.data.data });
      })
      .catch((err) => {
        return err;
      });
  };
}

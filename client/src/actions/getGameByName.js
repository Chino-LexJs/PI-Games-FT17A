import { GET_GAME_BY_NAME } from "./index";
import axios from "axios";

export function getGameByName(name) {
  return async function (dispatch) {
    return axios
      .get(`http://localhost:3001/videogames/${name}`)
      .then((res) => {
        dispatch({ type: GET_GAME_BY_NAME, payload: res.data.data });
      })
      .catch((err) => {
        return err;
      });
  };
}
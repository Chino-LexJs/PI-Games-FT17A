import { GET_DETAIL_GAME } from "./index";
import axios from "axios";

export function getDetailGame(id) {
  return async function (dispatch) {
    return axios
      .get(`http://localhost:3001/videogame/${id}`)
      .then((res) => {
        dispatch({ type: GET_DETAIL_GAME, payload: res.data.data });
      })
      .catch((err) => {
        return err;
      });
  };
}
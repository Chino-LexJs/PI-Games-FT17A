import { SAVE_MAY_GAMES } from "./index"

export function saveMyGames(gamesDB) {
    return function (dispatch) {
      return dispatch({ type: SAVE_MAY_GAMES, payload: gamesDB });
    };
  }
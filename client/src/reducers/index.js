import { GET_ALL_GAMES, GET_GAME_BY_NAME, GET_DETAIL_GAME } from "../actions";

const initialState = {
  gamesLoaded: [],
  gameByName: [],
  gameDetail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        gamesLoaded: action.payload,
      };
    case GET_GAME_BY_NAME:
      return {
        ...state,
        gameByName: action.payload,
      };
    case GET_DETAIL_GAME:
      return {
        ...state,
        gameDetail: action.payload,
      };
    default:
      return state;
  }
}

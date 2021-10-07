import { GET_ALL_GAMES, GET_GAME_BY_NAME, GET_DETAIL_GAME, CHANGE_ORDER } from "../actions";

const initialState = {
  gamesLoaded: [],
  gameByName: [],
  gameDetail: [],
  orderByName: 0,
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
    case CHANGE_ORDER:
      return {
        ...state,
        orderByName: action.payload,
      };
    default:
      return state;
  }
}

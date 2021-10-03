import { GET_ALL_GAMES } from "../actions";

const initialState = {
  gamesLoaded: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        gamesLoaded: action.payload,
      };
    default:
      return state;
  }
}

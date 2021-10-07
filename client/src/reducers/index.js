import {
  GET_ALL_GAMES,
  GET_GAME_BY_NAME,
  GET_DETAIL_GAME,
  CHANGE_ORDER,
  GET_GENRES,
  FILTER_GENRES,
  SAVE_MAY_GAMES,
} from "../actions";

const initialState = {
  gamesLoaded: [],
  gameByName: [],
  gameDetail: [],
  genres: [],
  videogamesGenre: [],
  orderByName: 0,
  myGames: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        gamesLoaded: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
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
    case SAVE_MAY_GAMES:
      return {
        ...state,
        myGames: action.payload,
      };
    case FILTER_GENRES:
      let filterGenres = [];
      state.gamesLoaded.forEach((game) => {
        game.genres.forEach((genre) => {
          if (genre.id === action.payload) {
            filterGenres.push(game);
          }
        });
      });
      return {
        ...state,
        videogamesGenre: filterGenres,
      };
    default:
      return state;
  }
}

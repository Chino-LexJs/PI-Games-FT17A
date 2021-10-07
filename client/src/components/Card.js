import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles/Card.module.css";
import { useHistory } from "react-router-dom";
import { getDetailGame } from "../actions/getDetailGame";
import { filterGenres } from "../actions/filterGenres";

function Card({ game, genre }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const detailGame = (id) => {
    let fetchGames = async function () {
      await dispatch(getDetailGame(id));
    };
    fetchGames().then(() => {
      history.push("/home/videogamebyID");
    });
  };
  const listGames = (id) => {
    let fetchGames = function () {
      dispatch(filterGenres(id));
    };
    fetchGames();
    history.push("/home/videogamesGenre");
  };
  return (
    <div>
      {game ? (
        <div className={styles.card} onDoubleClick={() => detailGame(game.id)}>
          <img src={`${game.background_image}`} alt="img" key={game.id} />
          <div className={styles.cardbody}>
            <p>{game.name}</p>
            <label>{game.rating}</label>
            <hr />
            <div className={styles.genres}>
              <p>Genres: </p>
              {game.genres.map((genre) => (
                <u key={genre.id} > {`${genre.name}`} </u>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.card} onDoubleClick={() => listGames(genre.id)}>
          <img src={`${genre.image_background}`} alt="img" key={genre.id} />
          <div className={styles.cardbody}>
            <p>{genre.name}</p>
            <hr />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

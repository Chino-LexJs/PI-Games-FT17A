import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles/Card.module.css";
import { useHistory } from "react-router-dom";
import { getDetailGame } from "../actions/getDetailGame";

function Card({ game }) {
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
  return (
    <div className={styles.card} onDoubleClick={() => detailGame(game.id)}>
      <img src={`${game.background_image}`} alt="img" key={game.id} />
      <div className={styles.cardbody}>
        <p>{game.name}</p>
        <hr />
        <div className={styles.genres}>
          <p>Genres: </p>
          {game.genres.map((genre) => (
            <u> {`${genre.name}`} </u>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

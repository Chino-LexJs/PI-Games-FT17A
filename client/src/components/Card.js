import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles/Card.module.css";
import { useHistory } from "react-router-dom";
import {getDetailGame} from "../actions/getDetailGame";

function Card({ game }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const detailGame = (id) => {
    console.log(id);
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
      </div>
    </div>
  );
}

export default Card;

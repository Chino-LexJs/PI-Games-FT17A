import React from "react";
import styles from "./styles/Card.module.css";

function Card({ game }) {
  return (
    <div className={styles.card}>
      <img src={`${game.background_image}`} alt="img" key={game.id} />
      <div className={styles.cardbody}>
        <p>{game.name}</p>
      </div>
    </div>
  );
}

export default Card;

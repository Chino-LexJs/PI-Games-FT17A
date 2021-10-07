import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./styles/Videogames.module.css";

function Genres() {
  let genres = useSelector((state) => state.genres);

  return (
    <div className={styles.content}>
      <div className={styles.cards} >
        {genres.map((genre) => (
          <Card genre={genre}/>
        ))}
      </div>
    </div>
  );
}

export default Genres;

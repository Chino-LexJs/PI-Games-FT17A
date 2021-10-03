import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import styles from "./styles/Videogames.module.css";

function Videogames() {
  let videogames = useSelector((state) => state.gamesLoaded);

  return (
    <div className={styles.content}>
      {videogames.map((game) => (
        <Card game={game}/>
      ))}
    </div>
  );
}

export default Videogames;

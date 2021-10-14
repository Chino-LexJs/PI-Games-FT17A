import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles/Videogames.module.css";
import Pagination from "./Pagination";

function Videogame() {
  let videogames = useSelector((state) => state.gameByName);
  return (
    <div className={styles.content}>
      {videogames.length > 0 ? (
        <Pagination videogames={videogames} />
      ) : (
        <label>Sorry! Videogame not found :(</label>
      )}
    </div>
  );
}

export default Videogame;

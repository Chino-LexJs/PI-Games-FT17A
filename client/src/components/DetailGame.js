import React from "react";
import styles from "./styles/DetailGame.module.css";
import { useSelector } from "react-redux";

function DetailGame() {
  let videogame = useSelector((state) => state.gameDetail);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content_description}>
          {<h3> {videogame.name} </h3>}
          <h4>About</h4>
          <div
            className={styles.text}
            contentEditable="false"
            dangerouslySetInnerHTML={{ __html: `${videogame.description}` }}
          ></div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={`${videogame.background_image}`} alt="game img" />
        <img
          src={
            videogame.background_image_additional
              ? `${videogame.background_image_additional}`
              : `${videogame.background_image}`
          }
          alt="aditional"
        />

        <div className={styles.content_description}>
          <div className={styles.detail}>
            <div className={styles.content}>
              <h5>Release date</h5>
              <p> {videogame.released} </p>
            </div>
            <div className={styles.content}>
              <h5>Raiting</h5>
              <p> {videogame.rating} </p>
            </div>
          </div>
          <div className={`${styles.detail} ${styles.content}`}>
            <h5>Genres</h5>
            <p> {videogame.genres.map((genre) => `${genre.name} | `)} </p>
            <h5>Platforms</h5>
            <p>{videogame.platforms.map((p) => `${p.platform.name} | `)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailGame;

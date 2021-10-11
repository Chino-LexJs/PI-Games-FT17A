import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./styles/Videogames.module.css";

function Videogame() {
  let videogames = useSelector((state) => state.gameByName);
  const [pageNumber, setPageNumber] = useState(0);
  const gamesPerPage = 15;
  const pagesVisited = pageNumber * gamesPerPage;
  const displayGames = videogames
    .slice(pagesVisited, pagesVisited + gamesPerPage)
    .map((game) => <Card game={game} />);

  let pageCount = Math.ceil(videogames.length / gamesPerPage);
  let arrayPage = [];
  for (let i = 0; i < pageCount; i++) {
    arrayPage.push(i);
  }
  const setPage = (e) => {
    setPageNumber(e.target.value);
  };
  return (
    <div className={styles.content}>
      {videogames.length > 0 ? (
        <div>
          <div className={styles.cards}>{displayGames}</div>
          <ul className={styles.pagination}>
            {arrayPage.map((index) => (
              <li value={`${index++}`} onClick={(e) => setPage(e)}>
                {index}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <label>Sorry! Videogame not found :(</label>
      )}
    </div>
  );
}

export default Videogame;

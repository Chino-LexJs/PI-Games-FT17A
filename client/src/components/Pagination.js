import React, { useState } from "react";
import styles from "./styles/Videogames.module.css";
import Card from "./Card";

function Pagination({ videogames }) {
  const [pageNumber, setPageNumber] = useState(0);
  const gamesPerPage = 15;
  const pagesVisited = pageNumber * gamesPerPage;
  const displayGames = videogames
    .slice(pagesVisited, pagesVisited + gamesPerPage)
    .map((game) => <Card game={game} key={game.id} />);
  let pageCount = Math.ceil(videogames.length / gamesPerPage);
  let arrayPage = [];
  for (let i = 0; i < pageCount; i++) {
    arrayPage.push(i);
  }
  const setPage = (e) => {
    setPageNumber(e.target.value);
  };
  return (
    <div>
      <div className={styles.cards}>{displayGames}</div>
      <ul className={styles.pagination}>
        {arrayPage.map((index) => (
          <li value={`${index++}`} key={index} onClick={(e) => setPage(e)}>
            {index}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;

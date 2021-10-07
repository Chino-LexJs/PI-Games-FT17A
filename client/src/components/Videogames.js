import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeOrder } from "../actions/changeOrder"
import Card from "./Card";
import styles from "./styles/Videogames.module.css";

function Videogames({ claro }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeOrder(order));
  });
  let videogames = useSelector((state) => state.gamesLoaded);
  let order = useSelector((state) => state.orderByName)
  if (order === 1) {
    console.log("entre");
    videogames.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
  if (order === 2) {
    videogames.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
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
      <h3> {claro} </h3>
      <div className={styles.cards}>{displayGames}</div>
      <ul className={styles.pagination}>
        {arrayPage.map((index) => (
          <li value={`${index++}`} onClick={(e) => setPage(e)}>
            {index}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Videogames;

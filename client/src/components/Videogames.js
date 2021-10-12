import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeOrder } from "../actions/changeOrder";
import { saveMyGames } from "../actions/saveMyGames";
import Card from "./Card";
import styles from "./styles/Videogames.module.css";
import HashLoader from "react-spinners/CircleLoader";

function Videogames() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  let videogames = useSelector((state) => state.gamesLoaded);
  let order = useSelector((state) => state.orderByName);
  let myGames = videogames.filter((g) => g.id.toString().includes("-"));
  useEffect(() => {
    dispatch(changeOrder(order));
    dispatch(saveMyGames(myGames));
    videogames.length > 0 ? setloading(false) : setloading(true);
  },[order, myGames, dispatch, videogames]);
  if (order === 1) {
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
  if (order === 3) {
    videogames.sort(function (a, b) {
      if (Number(a.rating) < Number(b.rating)) {
        return 1;
      }
      if (Number(a.rating) > Number(b.rating)) {
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
    <div className={styles.content}>
      {loading ? (
        <div className={styles.hashloader}>
          <HashLoader size={150} color={"#9008c8"} loading={loading} />
        </div>
      ) : (
        <div className={styles.cards}>{displayGames}</div>
      )}
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

export default Videogames;

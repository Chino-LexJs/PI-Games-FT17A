import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeOrder } from "../actions/changeOrder";
import { saveMyGames } from "../actions/saveMyGames";
import Pagination from "./Pagination";
import styles from "./styles/Videogames.module.css";
import styles_loading from "./styles/loading.module.css";

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
  }, [order, myGames, dispatch, videogames]);
  // Order
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
  if (order === 4) {
    videogames.sort(function (a, b) {
      if (a.released < b.released) {
        return 1;
      }
      if (a.released > b.released) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <div className={styles.content}>
      {loading ? (
        <div className={styles_loading.loadingio_spinner_rolling_t7vlzoz1usa}>
          <div className={styles_loading.ldio_pklessn4n6n}>
            <div></div>
          </div>
        </div>
      ) : (
        <Pagination videogames={videogames} />
      )}
    </div>
  );
}

export default Videogames;

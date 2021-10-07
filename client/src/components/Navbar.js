import React from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../actions/getGameByName";
import styles from "./styles/Navbar.module.css";
import logo from "../img/logo.png";
import { useHistory } from "react-router-dom";

function Navbar() {
  const ENTER = 13;
  const dispatch = useDispatch();
  const history = useHistory();
  const handleHistory = (e) => {
    e.preventDefault();
    history.push("/");
  };
  const handleAddGame = (e) => {
    e.preventDefault();
    history.push("/home/add");
  };
  const handleMyGames = (e) => {
    e.preventDefault();
    history.push("/home/myvideogames");
  }

  const handleInput = (e) => {
    const gameSearch = e.target.value;
    if (e.keyCode === ENTER) {
      e.target.value = "";
      let fetchGames = async function () {
        await dispatch(getGameByName(gameSearch));
      };
      fetchGames().then(() => {
        e.preventDefault();
        history.push("/home/videogame");
      });
    }
  };

  return (
    <nav className={styles.navMain}>
      <img
        onClick={handleHistory}
        src={logo}
        className={styles.logo}
        alt="logo"
      />
      <ul className={styles.search}>
        <li>
          <input
            type="text"
            onKeyDown={(e) => handleInput(e)}
            placeholder="Search"
            className={styles.placeholder}
          />
          <i className="fas fa-search"></i>
        </li>
      </ul>
      <ul className={styles.menu}>
        <li  onClick={handleMyGames}>
          <i className="far fa-circle"></i>
          <b>My Games</b>
        </li>
        <li onClick={handleAddGame}>
          <i className="fas fa-plus"></i>
          <b>Add Game</b>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

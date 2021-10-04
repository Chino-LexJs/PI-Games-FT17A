import React from "react";
import styles from "./styles/Navbar.module.css";
import logo from "../img/logo.png";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const handleHistory = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <nav className={styles.navMain}>
      <img onClick={handleHistory} src={logo} className={styles.logo} alt="logo" />
      <ul className={styles.search}>
        <li>
          <input type="text" placeholder="    Search" />
          <i className="fas fa-search"></i>
        </li>
      </ul>
      <ul className={styles.menu}>
        <li>
          <i class="far fa-circle"></i>
          <a href="/">My Games</a>
        </li>
        <li>
          <i class="fas fa-plus"></i>
          <a href="/">Add Game</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

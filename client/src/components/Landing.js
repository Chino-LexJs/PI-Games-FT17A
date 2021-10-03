import React from "react";
import styles from "./styles/Landing.module.css";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();
  const handleHistory = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>THE BIGGER YOUR ADVENTURE,</h2>
          <h2>THE BIGGER THE TASTE OF VICTORY</h2>
          <p>CHOSE YOUR OUR ADVENTURE</p>
        </div>
        <button onClick={handleHistory}>EXPLORE</button>
      </div>
    </div>
  );
}

export default Landing;

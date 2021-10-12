import React from "react";
import styles from "./styles/Landing.module.css";
import { useHistory } from "react-router-dom";
import video from "../img/video/landing.mp4";

function Landing() {
  const history = useHistory();
  const handleHistory = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <div>
      <header className={`${styles.header} ${styles.content}`}>
        <div className={styles.header_video}>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className={styles.header_overlay}></div>
        <div className={styles.header_content}>
          <h1>THE BIGGER YOUR ADVENTURE,</h1>
          <h1>THE BIGGER THE TASTE OF VICTORY</h1>
          <p>CHOSE YOUR OUR ADVENTURE</p>
          <button onClick={handleHistory}>EXPLORE</button>
        </div>
      </header>
    </div>
  );
}

export default Landing;

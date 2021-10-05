import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { getAllGames } from "../actions/getAllGames";
import Navbar from "./Navbar";
import styles from "./styles/Home.module.css";
import Videogame from "./Videogame";
import Videogames from "./Videogames";
import DetailGame from "./DetailGame";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    let fetchGames = async function () {
      await dispatch(getAllGames());
    };
    fetchGames();
  });

  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div>
          <ul className={styles.sidebar}>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/home">Videogames</Link>
            </li>
            <li>Generos</li>
            <li>Raiting</li>
            <li>Plataforms</li>
          </ul>
        </div>
        <Route exact path="/home" component={Videogames} />
        <Route exact path="/home/videogame" component={Videogame} />
        <Route exact path="/home/videogameByID" component={DetailGame} />
      </div>
    </div>
  );
}

export default Home;

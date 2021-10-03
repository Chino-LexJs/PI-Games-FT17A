import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGames } from "../actions/getAllGames";
import Navbar from "./Navbar";
import styles from "./styles/Home.module.css";
import Videogames from "./Videogames";

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
      <div className={ styles.container }>
        <div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Videogames
                </li>
                <li>
                    Generos
                </li>
                <li>
                    Raiting
                </li>
                <li>
                    Plataforms
                </li>
            </ul>
        </div>
        <Videogames/>
      </div>
    </div>
  );
}

export default Home;

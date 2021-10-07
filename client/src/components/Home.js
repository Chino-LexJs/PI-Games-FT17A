import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { getAllGames } from "../actions/getAllGames";
import { changeOrder } from "../actions/changeOrder";
import Navbar from "./Navbar";
import styles from "./styles/Home.module.css";
import Videogame from "./Videogame";
import Videogames from "./Videogames";
import DetailGame from "./DetailGame";
import CreateGame from "./CreateGame";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    let fetchGames = async function () {
      await dispatch(getAllGames());
    };
    fetchGames();
  });
  const handleChange = (order) => {
    console.log("PASE POR ACAAAAAAAAAAAAAAAAAAA");
    dispatch(changeOrder(order));
  };
  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div>
          <ul className={styles.sidebar}>
            <li onClick={() => handleChange(0)}>
              <Link to="/home">Videogames</Link>
            </li>
            <li>Generos</li>
            <li>Raiting</li>
            <li onClick={() => handleChange(1)}>Order by name A-Z</li>
            <li onClick={() => handleChange(2)}>Order by name Z-A</li>
          </ul>
        </div>
        <Route exact path="/home" component={Videogames} />
        <Route exact path="/home/videogame/" component={Videogame} />
        <Route exact path="/home/videogameByID" component={DetailGame} />
        <Route exact path="/home/add" component={CreateGame} />
      </div>
    </div>
  );
}

export default Home;

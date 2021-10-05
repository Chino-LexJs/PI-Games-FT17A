import React from "react";
import { Route } from "react-router";
import Landing from "./components/Landing";
import Home from "./components/Home";
// import CreateGame from "./components/CreateGame";
// import Videogame from "./components/Videogame";
// import Abaut from "./components/Abaut";

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;

import React from "react";
import { Route } from "react-router";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;

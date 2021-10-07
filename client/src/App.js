import React from "react";
import { Route } from "react-router";
import Landing from "./components/Landing";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;

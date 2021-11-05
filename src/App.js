import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/hong/Movie";
import Seat from "./pages/hong/Seat";
import CommutePage from "./pages/choi/CommutePage";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie" component={Movie} />
      <Route path="/movie/seat" component={Seat} />
      <Route path="/commute" component={CommutePage} />
    </div>
  );
}

export default App;

import React, { FC } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
// import { Route } from "react-router-dom";

const App: FC = () => (
  <div className="App">
    {/* <Header />
    <Game /> */}
    <Header />
    <Router>{/* <Route exact path="/" component={Game} /> */}</Router>
  </div>
);

export default App;

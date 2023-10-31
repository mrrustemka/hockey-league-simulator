import React, { FC } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

const App: FC = () => (
  <div className="App">
    <Header />
    <Game />
  </div>
);

export default App;

import React, { FC } from "react";
import { Col, Row } from "antd";
import "./App.css";
import Game from "./components/Game";

const App: FC = () => (
  <div className="App">
        <Game />
  </div>
);

export default App;

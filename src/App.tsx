import React, { FC } from "react";
import { Col, Row } from "antd";
import Sheet from "./components/Sheet";
import Game from "./components/Game";
import "./App.css";

const App: FC = () => (
  <div className="App">
    <Row>
      <Col span={12}>
        <Sheet />
      </Col>
      <Col span={12}>
        <Game />
      </Col>
    </Row>
  </div>
);

export default App;

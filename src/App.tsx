import React, { FC } from "react";
import { Col, Row } from "antd";
import Sheet from "./components/Sheet";
import "./App.css";

const App: FC = () => (
  <div className="App">
    <Row>
      <Col span={12}>
        <Sheet />
      </Col>
      <Col span={12}></Col>
    </Row>
  </div>
);

export default App;

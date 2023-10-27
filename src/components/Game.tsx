import React from "react";
import { Button, Card, Col, Row } from "antd";

const { Meta } = Card;

const Game: React.FC = () => (
  <div>
    <Row className="row-panel-cards">
      <Col span={12}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={12}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    </Row>
    <Row className="row-panel-simulate">
      <Col span={24} className="panel-simulate">
        <Button>Simulate</Button>
      </Col>
    </Row>
  </div>
);

export default Game;

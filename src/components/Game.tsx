import React, { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { teams } from "../data/teams";
import { Teams } from "../data/types";
import { schedule, scheduleList } from "../data/schedule";

const { Meta } = Card;
schedule();

export function Game() {
  const [teamsUpdate, setTeamsUpdate] = useState<Teams[]>(teams);
  let [gameCounter, setGameCounter] = useState<number>(0);
  console.log(scheduleList);

  const updateCounter = () => {
    setGameCounter(gameCounter + 1);
  };

  console.log("gameCounter", gameCounter, scheduleList[gameCounter]);

  if (scheduleList && gameCounter < scheduleList.length) {
    return (
      <div>
        <Row className="row-panel-cards">
          <Col span={12}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt={
                    teams.find(
                      (element) =>
                        element.abbreviation === scheduleList[gameCounter].away
                    )?.name + "Logo"
                  }
                  src={
                    teams.find(
                      (element) =>
                        element.abbreviation === scheduleList[gameCounter].away
                    )?.logo
                  }
                  style={{
                    background: teams.find(
                      (element) =>
                        element.abbreviation === scheduleList[gameCounter].away
                    )?.background_color,
                  }}
                />
              }
            >
              <Meta
                title={
                  teams.find(
                    (element) =>
                      element.abbreviation === scheduleList[gameCounter].away
                  )?.abbreviation
                }
                description={
                  teams.find(
                    (element) =>
                      element.abbreviation === scheduleList[gameCounter].away
                  )?.city
                }
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt={
                    teams.find(
                      (element) =>
                        element.abbreviation === scheduleList[gameCounter].home
                    )?.name + "Logo"
                  }
                  src={
                    teams.find(
                      (element) =>
                        element.abbreviation === scheduleList[gameCounter].home
                    )?.logo
                  }
                  style={{
                    background: teams.find(
                      (element) =>
                        element.abbreviation === scheduleList[gameCounter].home
                    )?.background_color,
                  }}
                />
              }
            >
              <Meta
                title={
                  teams.find(
                    (element) =>
                      element.abbreviation === scheduleList[gameCounter].home
                  )?.abbreviation
                }
                description={
                  teams.find(
                    (element) =>
                      element.abbreviation === scheduleList[gameCounter].home
                  )?.city
                }
              />
            </Card>
          </Col>
        </Row>
        <Row className="row-panel-simulate">
          <Col span={24} className="panel-simulate">
            <Button>Simulate</Button>
            <Button onClick={updateCounter}>Next Game</Button>
          </Col>
        </Row>
      </div>
    );
  } else {
    return <div>There is now a Game</div>;
  }
}

export default Game;

import React from "react";
import { teams } from "../data/teams";
import { Button, Card, Col, Row, Typography } from "antd";

function PlayOffSheet() {
  console.log(teams.slice(0, 2));

  return (
    <>
      {/* {teams.slice(0, 1).map((team) => (
        <Card
          hoverable
          className="upcoming-games-card"
          //   key={game.id}
          cover={
            <div className="upcoming-games-card-container">
              <img
                className="upcoming-games-card-container-away"
                alt={team.name + " logo"}
                src={team.logo}
              />
              <h3>@</h3>
            </div>
          }
        ></Card>
      ))} */}
    </>
  );
}

export default PlayOffSheet;

import React from "react";
import { teams } from "../data/teams";
import { Teams } from "../data/types";
import { Card } from "antd";

function PlayOffSheet() {
  return (
    <>
      {teams.slice(0, 2).map((team: Teams) => (
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
              <img
                className="upcoming-games-card-container-away"
                alt={
                  teams[teams.length - 2 - teams.indexOf(team)].name + " logo"
                }
                src={teams[teams.length - 2 - teams.indexOf(team)].logo}
              />
            </div>
          }
        ></Card>
      ))}
    </>
  );
}

export default PlayOffSheet;

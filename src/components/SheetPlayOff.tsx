import React from "react";
import { teams } from "../data/teams";
import { Teams } from "../data/types";
import { Card } from "antd";
import { schedulePlayOff } from "../data/schedulePlayOff";

function PlayOffSheet(props: { teamsData: Teams[] }) {
  // const firstRound: Teams[] = teams.slice(0, 4);
  // schedulePlayOff({props.teamsData});
  return (
    <>
      {props.teamsData.slice(0, 2).map((team: Teams) => (
        <Card
          hoverable
          className="upcoming-games-card"
          cover={
            <div className="upcoming-games-card-container">
              <h3>{teams.indexOf(team) + 1}</h3>
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
              <h3>
                {teams.indexOf(teams[teams.length - 2 - teams.indexOf(team)]) +
                  1}
              </h3>
            </div>
          }
        />
      ))}
    </>
  );
}

export default PlayOffSheet;

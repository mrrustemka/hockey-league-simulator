import React from "react";
import { Card } from "antd";
import { teams } from "../data/teams";
import { Schedule } from "../data/types";

function UpcomingGame(props: {
  counter: number;
  schedule: Schedule[];
  homeRate: number;
  awayRate: number;
}) {
  // { counter }: number,
  // { schedule }: Schedule[],
  // { props.homeRate }: number,
  // { props.awayRate }: number
  return (
    <>
      <Card
        hoverable
        className="upcoming-games-card"
        cover={
          <div className="upcoming-games-card-container">
            <h3>
              {props.homeRate === 1
                ? props.homeRate + "st"
                : props.homeRate === 2
                ? props.homeRate + "nd"
                : props.homeRate === 3
                ? props.homeRate + "rd"
                : props.homeRate + "th"}
            </h3>
            <img
              className="upcoming-games-card-container-logo"
              alt={
                teams.find(
                  (element) =>
                    element.abbreviation ===
                    props.schedule[props.counter + 1].away
                )?.name + "Logo"
              }
              src={
                teams.find(
                  (element) =>
                    element.abbreviation ===
                    props.schedule[props.counter + 1].away
                )?.logo
              }
            />
            <img
              className="upcoming-games-card-container-logo"
              alt={
                teams.find(
                  (element) =>
                    element.abbreviation ===
                    props.schedule[props.counter + 1].home
                )?.name + "Logo"
              }
              src={
                teams.find(
                  (element) =>
                    element.abbreviation ===
                    props.schedule[props.counter + 1].home
                )?.logo
              }
            />
            <h3>
              {props.awayRate === 1
                ? props.awayRate + "st"
                : props.awayRate === 2
                ? props.awayRate + "nd"
                : props.awayRate === 3
                ? props.awayRate + "rd"
                : props.awayRate + "th"}
            </h3>
          </div>
        }
      />
    </>
  );
}

export default UpcomingGame;

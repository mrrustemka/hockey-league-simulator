import { Button, Card, Input, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { League } from "../data/types";
import { v4 as uuidv4 } from "uuid";
import { schedule } from "../data/schedule";
import { champs } from "../data/champs";
import Header from "./Header";
// import Title from "antd/es/skeleton/Title";

const { Title } = Typography;

function Start() {
  const [champTypes, setChampTypes] = useState<League[]>(champs);

  function updateTeamsNum(id: string, value: number): void {
    const newChampTypes = champTypes.map((champ) =>
      champ.id === id ? { ...champ, teamsCount: value } : { ...champ }
    );
    setChampTypes(newChampTypes);
  }

  return (
    <>
      <Header text="Select a Championship" />
      <div className="start">
        {champTypes.map((cham) => (
          <Card
            key={uuidv4()}
            className="start__card"
            cover={
              <img
                alt="example"
                src={cham.image}
                className="start__card-cover"
              />
            }
          >
            <Title level={5} className="start__card-title">
              {cham.description}
            </Title>
            <div className="start__teams">
              {cham.teams.map((team) => (
                <div
                  key={uuidv4()}
                  className={`start__team ${
                    team.id <= cham.teamsCount ? "start__team--active" : ""
                  }`}
                >
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="start__team-logo"
                  />
                </div>
              ))}
            </div>
            <div className="start__actions">
              <Title level={5} className="start__actions-title">
                Select the number of teams
              </Title>
              <Input
                className="start__input"
                type="number"
                defaultValue={cham.teamsCount}
                value={cham.teamsCount}
                max={cham.teams.length}
                min="2"
                onChange={(e) =>
                  updateTeamsNum(cham.id, parseInt(e.target.value))
                }
              />
              <Link
                className="start__link"
                to="season"
                state={{
                  teams: cham.teams.slice(0, cham.teamsCount),
                  name: cham.name
                }}
                onClick={() => schedule(cham.teams.slice(0, cham.teamsCount))}
              >
                Start
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Start;

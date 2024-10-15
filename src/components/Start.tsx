import { Card, Input, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { League } from "../Data/types";
import { v4 as uuidv4 } from "uuid";
import { schedule } from "../Data/schedule";
import { champs } from "../Data/champs";
import Header from "./Header";

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
        {champTypes.map((champ) => (
          <Card
            key={uuidv4()}
            className="start__card"
            cover={
              <img
                alt="example"
                src={champ.image}
                className="start__card-cover"
              />
            }
          >
            <Title level={5} className="start__card-title">
              {champ.description}
            </Title>
            <div className="start__teams">
              {champ.teams.map((team) => (
                <div
                  key={uuidv4()}
                  className={`start__team ${
                    team.id <= champ.teamsCount ? "start__team--active" : ""
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
              <Title level={5} className="start__actions-title--play-off-count">
                {champ.teamsCount >= 16
                  ? 16
                  : champ.teamsCount >= 8
                  ? 8
                  : champ.teamsCount >= 4
                  ? 4
                  : 2}{" "}
                teams will advance to the Play-Off
              </Title>
              <Title level={5} className="start__actions-title--selection">
                Select the number of teams
              </Title>
              <Input
                className={`start__input`}
                type="number"
                defaultValue={champ.teamsCount}
                value={champ.teamsCount}
                max={champ.teams.length}
                min="2"
                onChange={(e) =>
                  updateTeamsNum(champ.id, parseInt(e.target.value))
                }
              />
              <Title
                level={5}
                className={`start__actions-error ${
                  champ.teamsCount < 2 || champ.teamsCount > champ.teams.length
                    ? "start__actions-error--active"
                    : "start__actions-error--inactive"
                }`}
              >
                Please enter a valid number of teams. From 2 to{" "}
                {champ.teams.length}
              </Title>
              {/* <Link
                className={`start__link ${
                  champ.teamsCount < 2 || champ.teamsCount > champ.teams.length
                    ? "start__link--inactive"
                    : "start__link--active pulse"
                }`}
                // className={`start__link ${
                //   champ.teamsCount < 2 || champ.teamsCount > champ.teams.length
                //     ? "start__link--inactive"
                //     : "start__link--active"
                // }`}
                to="season"
                state={{
                  teams: champ.teams.slice(0, champ.teamsCount),
                  name: champ.name,
                  id: champ.id
                }}
                onClick={() => schedule(champ.teams.slice(0, champ.teamsCount))}
              >
                Start
              </Link> */}
              <Link
                className={`start__link ${
                  champ.teamsCount < 2 || champ.teamsCount > champ.teams.length
                    ? "start__link--inactive"
                    : "start__link--active pulse"
                }`}
                to="season"
                state={{
                  teams: champ.teams.slice(0, champ.teamsCount),
                  name: champ.name,
                  id: champ.id
                }}
                onClick={() => schedule(champ.teams.slice(0, champ.teamsCount))}
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

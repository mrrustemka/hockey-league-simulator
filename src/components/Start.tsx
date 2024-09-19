import { Button, Card, Input, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { League } from "../data/types";
import { v4 as uuidv4 } from "uuid";
import { schedule } from "../data/schedule";
import { champs } from "../data/champs";
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
    <div>
      {champTypes.map((cham) => (
        <Card
          key={uuidv4()}
          hoverable
          style={{ width: 480 }}
          cover={<img alt="example" src={cham.image} />}
        >
          <Title level={5} className="card__info card__info--position-away">
            {cham.description}
          </Title>
          {cham.teams.map((team) => (
            <div
              key={uuidv4()}
              style={{
                display: "inline-block",
                backgroundColor:
                  team.id <= cham.teamsCount ? "rgb(81, 81, 81, 45%)" : "white",
                height: "32px",
                width: "32px",
                padding: "4px",
                textAlign: "center"
              }}
            >
              <img
                src={team.logo}
                alt={team.name}
                className="playoff__champion-logo"
                style={{ verticalAlign: "middle" }}
              />
            </div>
          ))}

          <div>
            <Input
              type="number"
              defaultValue={cham.teamsCount}
              value={cham.teamsCount}
              max={cham.teams.length}
              min="2"
              onChange={(e) =>
                updateTeamsNum(cham.id, parseInt(e.target.value))
              }
            />
            <Button
              className="playoff__start-play-off"
              size="large"
              onClick={() => schedule(cham.teams.slice(0, cham.teamsCount))}
            >
              <Link
                to="season"
                state={{
                  teams: cham.teams.slice(0, cham.teamsCount)
                }}
              >
                Start!
              </Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Start;

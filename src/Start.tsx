import { Button, Card } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { League } from "./data/types";
import { v4 as uuidv4 } from "uuid";
import { schedule } from "./data/schedule";
import { champs } from "./data/champs";

function Start() {
  const champTypes: League[] = champs;
  const [teamsNum, setTeamsNum] = useState<number>(0);

  return (
    <div>
      {champTypes.map((cham) => (
        <Card
          key={uuidv4()}
          hoverable
          style={{ width: 480 }}
          cover={<img alt="example" src={cham.image} />}
        >
          {cham.teams.map((team) => (
            <div key={uuidv4()}>{team.id + ". " + team.name}</div>
          ))}
          <Button
            className="playoff__start-play-off"
            size="large"
            onClick={() => schedule(cham.teams)}
          >
            <Link
              to="season"
              state={{
                teams: cham.teams.slice(0, cham.teams.length)
              }}
            >
              Start!
            </Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default Start;

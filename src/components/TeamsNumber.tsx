import { Input, Typography } from "antd";
import { League as TLeague } from "../Data/types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { schedule } from "../Data/schedule";

const { Title } = Typography;

function TeamsNumber({ league }: any) {
  const [champ, setChamp] = useState<TLeague>(league);

  function updateTeamsNum(value: number): void {
    const newChamp: TLeague = { ...champ, teamsCount: value };
    setChamp(newChamp);
  }

  function start() {
    schedule(league.teams.slice(0, champ.teamsCount));
    localStorage.setItem("leagueId", JSON.stringify(league.id));
  }

  return (
    <>
      <div className="start__teams">
        {champ.teams.map(
          (team: {
            id: number;
            logo: string | undefined;
            name: string | undefined;
          }) => (
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
                loading="lazy"
              />
            </div>
          )
        )}
      </div>
      <div className="start__actions">
        <Title level={5} className="start__actions-title--play-off-count">
          {champ.teamsCount > 16
            ? 16
            : champ.teamsCount > 8
            ? 8
            : champ.teamsCount > 4
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
          defaultValue={league.teamsCount}
          value={champ.teamsCount}
          max={league.teams.length}
          min="2"
          onChange={(e) => updateTeamsNum(parseInt(e.target.value))}
        />
        <Title
          level={5}
          className={`start__actions-error ${
            champ.teamsCount < 2 || champ.teamsCount > league.teams.length
              ? "start__actions-error--active"
              : "start__actions-error--inactive"
          }`}
        >
          Please enter a valid number of teams. From 2 to {league.teams.length}
        </Title>
        <Link
          className={`start__link ${
            champ.teamsCount < 2 || champ.teamsCount > league.teams.length
              ? "start__link--inactive"
              : "start__link--active pulse"
          }`}
          to="season"
          onClick={() => start()}
        >
          Start
        </Link>
      </div>
    </>
  );
}

export default TeamsNumber;

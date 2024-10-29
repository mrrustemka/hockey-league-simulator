import { Card, Typography, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { schedule } from "../Data/schedule";
import { Link } from "react-router-dom";
import { League as TLeague } from "../Data/types";

const { Title } = Typography;

function League(props: {
  league: TLeague;
  updateTeamsNum: (id: string, value: number) => void;
}) {
  return (
    <div>
      <Card
        key={uuidv4()}
        className="start__card"
        cover={
          <img
            alt="example"
            src={props.league.image}
            className="start__card-cover"
            loading="lazy"
          />
        }
      >
        <Title level={5} className="start__card-title">
          {props.league.description}
        </Title>
        <div className="start__teams">
          {props.league.teams.map(
            (team: {
              id: number;
              logo: string | undefined;
              name: string | undefined;
            }) => (
              <div
                key={uuidv4()}
                className={`start__team ${
                  team.id <= props.league.teamsCount
                    ? "start__team--active"
                    : ""
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
            {props.league.teamsCount > 16
              ? 16
              : props.league.teamsCount > 8
              ? 8
              : props.league.teamsCount > 4
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
            defaultValue={props.league.teamsCount}
            value={props.league.teamsCount}
            max={props.league.teams.length}
            min="2"
            onChange={(e) =>
              props.updateTeamsNum(props.league.id, parseInt(e.target.value))
            }
          />
          <Title
            level={5}
            className={`start__actions-error ${
              props.league.teamsCount < 2 ||
              props.league.teamsCount > props.league.teams.length
                ? "start__actions-error--active"
                : "start__actions-error--inactive"
            }`}
          >
            Please enter a valid number of teams. From 2 to{" "}
            {props.league.teams.length}
          </Title>
          <Link
            className={`start__link ${
              props.league.teamsCount < 2 ||
              props.league.teamsCount > props.league.teams.length
                ? "start__link--inactive"
                : "start__link--active pulse"
            }`}
            to="season"
            state={{
              teams: props.league.teams.slice(0, props.league.teamsCount),
              name: props.league.name,
              id: props.league.id
            }}
            onClick={() =>
              schedule(props.league.teams.slice(0, props.league.teamsCount))
            }
          >
            Start
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default League;

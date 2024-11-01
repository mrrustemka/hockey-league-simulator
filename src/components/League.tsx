import { Card, Typography } from "antd";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { League as TLeague } from "../Data/types";
import { useState } from "react";
import TeamsNumber from "./TeamsNumber";

const { Title } = Typography;

function League(props: { league: TLeague }) {
  const [refresh, setRefresh] = useState(false);

  function startNew() {
    localStorage.removeItem("leagueId");
    localStorage.removeItem("scheduleList");
    localStorage.removeItem("teamsList");
    setRefresh(!refresh);
  }

  if (
    localStorage.getItem("leagueId") !== null &&
    JSON.parse(localStorage.getItem("leagueId") || "") === props.league.id
  ) {
    return (
      <>
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
            {JSON.parse(localStorage.getItem("teamsList") || "[]").map(
              (team: {
                id: number;
                logo: string | undefined;
                name: string | undefined;
              }) => (
                <div key={uuidv4()} className="start__team start__team--active">
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
          <Link className="start__link start__link--active" to="season">
            Continue
          </Link>
          <button
            className="start__card__button pulse"
            onClick={() => startNew()}
          >
            Start New
          </button>
        </Card>
      </>
    );
  } else {
    return (
      <>
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
          <TeamsNumber league={props.league} />
        </Card>
      </>
    );
  }
}

export default League;

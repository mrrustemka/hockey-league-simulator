import { Card } from "antd";
import { Schedule, Teams } from "../Data/types";
import "../Styles/UpcomingGame.css";
import { Link } from "react-router-dom";

function UpcomingGame(props: { schedule: Schedule[]; teams: Teams[] }) {
  return (
    <>
      {props.schedule.map((game) => (
        <Card
          hoverable
          className="upcoming-games-card"
          key={game.id}
          cover={
            <div className="upcoming-games-card__container">
              <h3 className="upcoming-games-card__score--away">
                {
                  props.teams.find(
                    (element) => element.abbreviation === game.away
                  )?.wins
                }
                -
                {
                  props.teams.find(
                    (element) => element.abbreviation === game.away
                  )?.loses
                }
                -
                {
                  props.teams.find(
                    (element) => element.abbreviation === game.away
                  )?.loses_ot
                }
              </h3>
              <Link
                to={`/hockey-league-simulator/season/team/${
                  props.teams.find(
                    (element) => element.abbreviation === game.away
                  )?.id
                }`}
              >
                <img
                  className="upcoming-games-card__team-logo upcoming-games-card__team-logo--away"
                  alt={
                    props.teams.find(
                      (element) => element.abbreviation === game.away
                    )?.name + " Logo"
                  }
                  src={
                    props.teams.find(
                      (element) => element.abbreviation === game.away
                    )?.logo
                  }
                  loading="lazy"
                />
              </Link>

              <h3 className="upcoming-games-card__vs">@</h3>
              <Link
                to={`/hockey-league-simulator/season/team/${
                  props.teams.find(
                    (element) => element.abbreviation === game.home
                  )?.id
                }`}
              >
                <img
                  className="upcoming-games-card__team-logo upcoming-games-card__team-logo--home"
                  alt={
                    props.teams.find(
                      (element) => element.abbreviation === game.home
                    )?.name + " Logo"
                  }
                  src={
                    props.teams.find(
                      (element) => element.abbreviation === game.home
                    )?.logo
                  }
                  loading="lazy"
                />
              </Link>
              <h3 className="upcoming-games-card__score--home">
                {
                  props.teams.find(
                    (element) => element.abbreviation === game.home
                  )?.wins
                }
                -
                {
                  props.teams.find(
                    (element) => element.abbreviation === game.home
                  )?.loses
                }
                -
                {
                  props.teams.find(
                    (element) => element.abbreviation === game.home
                  )?.loses_ot
                }
              </h3>
            </div>
          }
        ></Card>
      ))}
    </>
  );
}

export default UpcomingGame;

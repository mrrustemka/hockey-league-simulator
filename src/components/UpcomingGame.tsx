import { Card } from "antd";
import { worldChampionship as teams } from "../data/teams";
import { Schedule, Teams } from "../data/types";

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
              <h3 className="upcoming-games-card__score">
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
              />
              <h3 className="upcoming-games-card__vs">@</h3>
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
              />
              <h3 className="upcoming-games-card__score">
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

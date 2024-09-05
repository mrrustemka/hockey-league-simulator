import { Card } from "antd";
import { teams } from "../data/teams";
import { Schedule } from "../data/types";

function UpcomingGame(props: { schedule: Schedule[] }) {
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
                  teams.find((element) => element.abbreviation === game.away)
                    ?.wins
                }
                -
                {
                  teams.find((element) => element.abbreviation === game.away)
                    ?.loses
                }
                -
                {
                  teams.find((element) => element.abbreviation === game.away)
                    ?.loses_ot
                }
              </h3>
              <img
                className="upcoming-games-card__team-logo upcoming-games-card__team-logo--away"
                alt={
                  teams.find((element) => element.abbreviation === game.away)
                    ?.name + " Logo"
                }
                src={
                  teams.find((element) => element.abbreviation === game.away)
                    ?.logo
                }
              />
              <h3 className="upcoming-games-card__vs">@</h3>
              <img
                className="upcoming-games-card__team-logo upcoming-games-card__team-logo--home"
                alt={
                  teams.find((element) => element.abbreviation === game.home)
                    ?.name + " Logo"
                }
                src={
                  teams.find((element) => element.abbreviation === game.home)
                    ?.logo
                }
              />
              <h3 className="upcoming-games-card__score">
                {
                  teams.find((element) => element.abbreviation === game.home)
                    ?.wins
                }
                -
                {
                  teams.find((element) => element.abbreviation === game.home)
                    ?.loses
                }
                -
                {
                  teams.find((element) => element.abbreviation === game.home)
                    ?.loses_ot
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

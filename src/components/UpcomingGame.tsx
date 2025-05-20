import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Schedule, Teams } from '../data/types';
import '../Styles/UpcomingGame.css';

function UpcomingGame(props: { schedule: Schedule[]; teams: Teams[] }) {
  return (
    <>
      {props.schedule.map((game) => (
        <Card
          hoverable
          className='upcoming-games-card'
          key={game.id}
          cover={
            <div className='upcoming-games-card__container'>
              <h3 className='upcoming-games-card__score--away'>
                {props.teams.find((element) => element.id === game.away)?.wins}-
                {props.teams.find((element) => element.id === game.away)?.loses}
                -
                {
                  props.teams.find((element) => element.id === game.away)
                    ?.loses_ot
                }
              </h3>
              <Link
                to={`/hockey-league-simulator/season/team/${
                  props.teams.find((element) => element.id === game.away)?.id
                }`}
              >
                <img
                  className='upcoming-games-card__team-logo upcoming-games-card__team-logo--away'
                  alt={
                    props.teams.find((element) => element.id === game.away)
                      ?.name + ' Logo'
                  }
                  src={
                    props.teams.find((element) => element.id === game.away)
                      ?.logo
                  }
                  loading='lazy'
                />
              </Link>

              <h3 className='upcoming-games-card__vs'>@</h3>
              <Link
                to={`/hockey-league-simulator/season/team/${
                  props.teams.find((element) => element.id === game.home)?.id
                }`}
              >
                <img
                  className='upcoming-games-card__team-logo upcoming-games-card__team-logo--home'
                  alt={
                    props.teams.find((element) => element.id === game.home)
                      ?.name + ' Logo'
                  }
                  src={
                    props.teams.find((element) => element.id === game.home)
                      ?.logo
                  }
                  loading='lazy'
                />
              </Link>
              <h3 className='upcoming-games-card__score--home'>
                {props.teams.find((element) => element.id === game.home)?.wins}-
                {props.teams.find((element) => element.id === game.home)?.loses}
                -
                {
                  props.teams.find((element) => element.id === game.home)
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

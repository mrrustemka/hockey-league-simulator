import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Schedule, Teams } from '../data/types';
import '../styles/UpcomingGames.css';

const { Title } = Typography;

function UpcomingGames(props: { schedule: Schedule[]; teams: Teams[] }) {
  const favorites: string[] = JSON.parse(
    localStorage.getItem('favoriteTeams') || '[]'
  );
  return (
    <section aria-label='Upcoming games'>
      <Title className='upcoming-games__title' level={2}>
        Upcoming Games
      </Title>
      {props.schedule.map((game) => (
        <Card
          hoverable
          className='upcoming-games-card'
          key={game.id}
          cover={
            <div className='upcoming-games-card__container'>
              <span className='upcoming-games-card__score--away'>
                {props.teams.find((element) => element.id === game.away)?.wins}-
                {props.teams.find((element) => element.id === game.away)?.loses}
                -
                {
                  props.teams.find((element) => element.id === game.away)
                    ?.loses_ot
                }
              </span>
              <Link
                to={`/hockey-league-simulator/season/team/${props.teams.find((element) => element.id === game.away)?.id
                  }`}
                className='upcoming-games-card__team-link--away'
              >
                <img
                  className='upcoming-games-card__team-logo--away'
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
              <span className='upcoming-games-card__favorite'>
                {favorites.includes(game.away) || favorites.includes(game.home)
                  ? '\u{2B50}'
                  : '  '}
              </span>
              <span className='upcoming-games-card__vs'>@</span>
              <Link
                to={`/hockey-league-simulator/season/team/${props.teams.find((element) => element.id === game.home)?.id
                  }`}
                className='upcoming-games-card__team-link--home'
              >
                <img
                  className='upcoming-games-card__team-logo--home'
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
              <span className='upcoming-games-card__score--home'>
                {props.teams.find((element) => element.id === game.home)?.wins}-
                {props.teams.find((element) => element.id === game.home)?.loses}
                -
                {
                  props.teams.find((element) => element.id === game.home)
                    ?.loses_ot
                }
              </span>
            </div>
          }
        ></Card>
      ))}
    </section>
  );
}

export default UpcomingGames;

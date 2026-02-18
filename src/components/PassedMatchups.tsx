import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { GameResult, Schedule, Teams } from '../data/types';
import '../styles/PassedMatchups.css';

const { Title } = Typography;

function PassedGames(props: { schedule: Schedule[] }) {
  const teams = JSON.parse(localStorage.getItem('teamsList') || '[]');
  const favorites: string[] = JSON.parse(
    localStorage.getItem('favoriteTeams') || '[]'
  );

  return (
    <section aria-label='Passed matchups'>
      <Title className='passed-games__title' level={2}>
        Passed Matchups
      </Title>
      {props.schedule.map((game) => (
        <Card
          hoverable
          className='passed-games-card'
          key={game.id}
          cover={
            <div className='passed-games-card__container'>
              <span className='passed-games-card__score--away'>
                {
                  teams
                    .find((team: Teams) => game.away === team.id)
                    ?.game_results?.find(
                      (result: GameResult) => result.id === game.id
                    )?.away_goals
                }
              </span>
              <Link
                to={`/hockey-league-simulator/season/team/${teams.find((team: Teams) => team.id === game.away)?.id
                  }`}
                className='passed-games-card__team-link--away'
              >
                <img
                  className='passed-games-card__team-logo--away'
                  alt={
                    teams.find((team: Teams) => team.id === game.away)?.name +
                    ' Logo'
                  }
                  src={teams.find((team: Teams) => team.id === game.away)?.logo}
                  loading='lazy'
                />
              </Link>
              <span className='passed-games-card__favorite'>
                {favorites.includes(game.away) || favorites.includes(game.home)
                  ? '\u{2B50}'
                  : '  '}
              </span>
              <span className='passed-games-card__vs'>@</span>
              <Link
                to={`/hockey-league-simulator/season/team/${teams.find((team: Teams) => team.id === game.home)?.id
                  }`}
                className='passed-games-card__team-link--home'
              >
                <img
                  className='passed-games-card__team-logo--home'
                  alt={
                    teams.find((team: Teams) => team.id === game.home)?.name +
                    ' Logo'
                  }
                  src={teams.find((team: Teams) => team.id === game.home)?.logo}
                  loading='lazy'
                />
              </Link>
              <span className='passed-games-card__score--home'>
                {
                  teams
                    .find((team: Teams) => game.home === team.id)
                    ?.game_results?.find(
                      (result: GameResult) => result.id === game.id
                    )?.home_goals
                }
              </span>
            </div>
          }
        />
      ))}
    </section>
  );
}

export default PassedGames;

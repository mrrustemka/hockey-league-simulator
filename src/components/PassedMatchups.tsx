import { useMemo } from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { GameResult, Schedule, Teams } from '../data/types';
import '../styles/PassedMatchups.css';

const { Title } = Typography;

function PassedGames(props: { schedule: Schedule[] }) {
  const teamsMap = useMemo(() => {
    try {
      const parsed: Teams[] = JSON.parse(localStorage.getItem('teamsList') || '[]');
      return new Map<string, Teams>(parsed.map((t) => [t.id, t]));
    } catch {
      return new Map<string, Teams>();
    }
  }, []);

  const favoritesSet = useMemo(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem('favoriteTeams') || '[]');
      return new Set<string>(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set<string>();
    }
  }, []);

  return (
    <section aria-label='Passed matchups'>
      <Title className='passed-games__title' level={2}>
        Passed Matchups
      </Title>
      {props.schedule.map((game) => {
        const awayTeam = teamsMap.get(game.away);
        const homeTeam = teamsMap.get(game.home);
        const isFavorite = favoritesSet.has(game.away) || favoritesSet.has(game.home);

        const awayGoals = awayTeam?.game_results?.find(
          (result: GameResult) => result.id === game.id
        )?.away_goals;

        const homeGoals = homeTeam?.game_results?.find(
          (result: GameResult) => result.id === game.id
        )?.home_goals;

        return (
          <Card
            hoverable
            className='passed-games-card'
            key={game.id}
            cover={
              <div className='passed-games-card__container'>
                <span className='passed-games-card__score--away'>
                  {awayGoals !== undefined ? awayGoals : '-'}
                </span>
                {awayTeam && (
                  <Link
                    to={`/hockey-league-simulator/season/team/${awayTeam.id}`}
                    className='passed-games-card__team-link--away'
                  >
                    <img
                      className='passed-games-card__team-logo--away'
                      alt={`${awayTeam.name} Logo`}
                      src={awayTeam.logo}
                      loading='lazy'
                    />
                  </Link>
                )}
                <span className='passed-games-card__favorite'>
                  {isFavorite ? '\u{2B50}' : '  '}
                </span>
                <span className='passed-games-card__vs'>@</span>
                {homeTeam && (
                  <Link
                    to={`/hockey-league-simulator/season/team/${homeTeam.id}`}
                    className='passed-games-card__team-link--home'
                  >
                    <img
                      className='passed-games-card__team-logo--home'
                      alt={`${homeTeam.name} Logo`}
                      src={homeTeam.logo}
                      loading='lazy'
                    />
                  </Link>
                )}
                <span className='passed-games-card__score--home'>
                  {homeGoals !== undefined ? homeGoals : '-'}
                </span>
              </div>
            }
          />
        );
      })}
    </section>
  );
}

export default PassedGames;

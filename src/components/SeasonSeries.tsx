import { useMemo } from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Schedule, Teams } from '../data/types';
import '../styles/SeasonSeries.css';

const { Title } = Typography;

interface SeasonSeriesProps {
  games: Schedule[];
  teams: Teams[];
}

function SeasonSeries({ games, teams }: SeasonSeriesProps) {
  const teamsMap = useMemo(() => {
    return new Map<string, Teams>(teams.map((t) => [t.id, t]));
  }, [teams]);

  return (
    <section aria-label='Season series'>
      <Title className='season-series__title' level={2}>
        Season Series
      </Title>
      <div
        className='season-series__cards'
        style={{ gridTemplateColumns: `repeat(${games.length}, 1fr)` }}
      >
        {games.map((game) => {
          const awayTeam = teamsMap.get(game.away);
          const homeTeam = teamsMap.get(game.home);

          // Find the game result from either the away or home team's results
          const gameResult =
            awayTeam?.game_results?.find((r) => r.id === game.id) ||
            homeTeam?.game_results?.find((r) => r.id === game.id);

          return (
            <Card
              hoverable
              className='season-series-card'
              key={game.id}
              cover={
                <div className='season-series-card__container'>
                  <span className='season-series-card__status--away'>
                    {gameResult?.away_status}
                  </span>
                  <span className='season-series-card__score--away'>
                    {gameResult?.away_goals}
                  </span>
                  {awayTeam && (
                    <Link
                      className='season-series-card__team-link--away'
                      to={`/hockey-league-simulator/season/team/${awayTeam.id}`}
                    >
                      <img
                        className='season-series-card__team-logo season-series-card__team-logo--away'
                        alt={`${awayTeam.name} Logo`}
                        src={awayTeam.logo}
                        loading='lazy'
                      />
                    </Link>
                  )}
                  <span className='season-series-card__vs'>@</span>
                  {homeTeam && (
                    <Link
                      className='season-series-card__team-link--home'
                      to={`/hockey-league-simulator/season/team/${homeTeam.id}`}
                    >
                      <img
                        className='season-series-card__team-logo season-series-card__team-logo--home'
                        alt={`${homeTeam.name} Logo`}
                        src={homeTeam.logo}
                        loading='lazy'
                      />
                    </Link>
                  )}
                  <span className='season-series-card__status--home'>
                    {gameResult?.home_status}
                  </span>
                  <span className='season-series-card__overtime'>
                    {gameResult?.overtime}
                  </span>
                  <span className='season-series-card__score--home'>
                    {gameResult?.home_goals}
                  </span>
                </div>
              }
            />
          );
        })}
      </div>
    </section>
  );
}

export default SeasonSeries;

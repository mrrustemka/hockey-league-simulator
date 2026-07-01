import { useMemo } from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Schedule, Teams } from '../data/types';
import '../styles/UpcomingGames.css';

const { Title } = Typography;

function UpcomingGames(props: { schedule: Schedule[]; teams: Teams[] }) {
  const teamsMap = useMemo(() => {
    return new Map<string, Teams>(props.teams.map((t) => [t.id, t]));
  }, [props.teams]);

  const favoritesSet = useMemo(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem('favoriteTeams') || '[]');
      return new Set<string>(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set<string>();
    }
  }, []);

  return (
    <section aria-label='Upcoming games'>
      <Title className='upcoming-games__title' level={2}>
        Upcoming Games
      </Title>
      {props.schedule.map((game) => {
        const awayTeam = teamsMap.get(game.away);
        const homeTeam = teamsMap.get(game.home);
        const isFavorite = favoritesSet.has(game.away) || favoritesSet.has(game.home);

        return (
          <Card
            hoverable
            className='upcoming-games-card'
            key={game.id}
            cover={
              <div className='upcoming-games-card__container'>
                <span className='upcoming-games-card__score--away'>
                  {awayTeam ? `${awayTeam.wins}-${awayTeam.loses}-${awayTeam.loses_ot}` : '-'}
                </span>
                {awayTeam && (
                  <Link
                    to={`/hockey-league-simulator/season/team/${awayTeam.id}`}
                    className='upcoming-games-card__team-link--away'
                  >
                    <img
                      className='upcoming-games-card__team-logo--away'
                      alt={`${awayTeam.name} Logo`}
                      src={awayTeam.logo}
                      loading='lazy'
                    />
                  </Link>
                )}
                <span className='upcoming-games-card__favorite'>
                  {isFavorite ? '\u{2B50}' : '  '}
                </span>
                <span className='upcoming-games-card__vs'>@</span>
                {homeTeam && (
                  <Link
                    to={`/hockey-league-simulator/season/team/${homeTeam.id}`}
                    className='upcoming-games-card__team-link--home'
                  >
                    <img
                      className='upcoming-games-card__team-logo--home'
                      alt={`${homeTeam.name} Logo`}
                      src={homeTeam.logo}
                      loading='lazy'
                    />
                  </Link>
                )}
                <span className='upcoming-games-card__score--home'>
                  {homeTeam ? `${homeTeam.wins}-${homeTeam.loses}-${homeTeam.loses_ot}` : '-'}
                </span>
              </div>
            }
          />
        );
      })}
    </section>
  );
}

export default UpcomingGames;

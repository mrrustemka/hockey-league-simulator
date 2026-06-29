import AOS from 'aos';
import { Card, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { League as TLeague } from '../data/types';
import ActiveLeague from './ActiveLeague';
import TeamsNumber from './TeamsNumber';
import 'aos/dist/aos.css';
import '../styles/League.css';

const { Title } = Typography;

/** localStorage keys used by the league flow. */
const LS_LEAGUE_ID = 'leagueId';
const LS_SCHEDULE = 'scheduleList';
const LS_TEAMS = 'teamsList';
const LS_FAVORITES = 'favoriteTeams';

interface LeagueProps {
  league: TLeague;
}

function League({ league }: LeagueProps) {
  // Increment this counter to force a re-render after clearing localStorage.
  const [, setResetCount] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleStartNew = useCallback(() => {
    localStorage.removeItem(LS_LEAGUE_ID);
    localStorage.removeItem(LS_SCHEDULE);
    localStorage.removeItem(LS_TEAMS);
    localStorage.removeItem(LS_FAVORITES);
    setResetCount((prev) => prev + 1);
  }, []);

  const storedLeagueId = localStorage.getItem(LS_LEAGUE_ID);
  const isActiveLeague =
    storedLeagueId !== null &&
    JSON.parse(storedLeagueId) === league.id;

  const aosAnimation = Number(league.id) % 2 === 0 ? 'fade-left' : 'fade-right';

  const cardCover = (
    <img
      alt={`${league.name} league`}
      src={league.image}
      className='start__card-cover'
      loading='lazy'
    />
  );

  return (
    <article aria-label={league.name}>
      <Card
        key={league.id}
        className='start__card'
        cover={cardCover}
        data-aos={aosAnimation}
      >
        <Title level={5} className='start__card-title'>
          {league.description}
        </Title>

        {isActiveLeague ? (
          <ActiveLeague onStartNew={handleStartNew} />
        ) : (
          <TeamsNumber league={league} />
        )}
      </Card>
    </article>
  );
}

export default League;

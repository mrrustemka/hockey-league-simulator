import { Link } from 'react-router-dom';
import { Teams } from '../data/types';
import '../styles/League.css';

const LS_TEAMS = 'teamsList';

export interface ActiveLeagueProps {
  onStartNew: () => void;
}

function ActiveLeague({ onStartNew }: ActiveLeagueProps) {
  const allTeams: Teams[] = JSON.parse(
    localStorage.getItem(LS_TEAMS) || '[]'
  );

  return (
    <>
      <div className='start__teams'>
        {allTeams.map((team) => (
          <div key={team.id} className='start__team start__team--active'>
            <img
              src={team.logo}
              alt={team.name}
              className='start__team-logo'
              loading='lazy'
            />
          </div>
        ))}
      </div>

      <Link className='start__link start__link--active' to='season'>
        Continue
      </Link>

      <button className='start__card__button pulse' onClick={onStartNew}>
        Start New
      </button>
    </>
  );
}

export default ActiveLeague;

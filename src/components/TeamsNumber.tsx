import { Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { League as TLeague } from '../data/types';
import { schedule } from '../data/schedule';
import '../Styles/TeamsNumber.css';

const { Title } = Typography;

function TeamsNumber({ league }: any) {
  const [champ, setChamp] = useState<TLeague>(league);
  let minTeams: number = 2;
  if (champ.id === '3' || champ.id === '4') {
    minTeams = 16;
  } else if (champ.id === '1' || champ.id === '2') {
    minTeams = 8;
  }

  function updateTeamsNum(value: number): void {
    const newChamp: TLeague = { ...champ, teamsCount: value };
    setChamp(newChamp);
  }

  function start() {
    schedule(league.teams.slice(0, champ.teamsCount), league.id);
    localStorage.setItem('leagueId', JSON.stringify(league.id));
  }

  return (
    <>
      <div className='start__teams'>
        {champ.teams.map(
          (
            team: {
              id: number | string;
              logo: string | undefined;
              name: string | undefined;
            },
            index: number
          ) => (
            <div
              key={uuidv4()}
              className={`start__team ${
                index < champ.teamsCount ? 'start__team--active' : ''
              }`}
            >
              <img
                src={team.logo}
                alt={team.name}
                className='start__team-logo'
                loading='lazy'
              />
            </div>
          )
        )}
      </div>
      <div className='start__actions'>
        <Title level={5} className='start__actions-title--play-off-count'>
          {champ.teamsCount > 16
            ? 16
            : champ.teamsCount > 8
            ? 8
            : champ.teamsCount > 4
            ? 4
            : 2}{' '}
          teams will advance to the Play-Off
        </Title>
        <Title level={5} className='start__actions-title--selection'>
          Select the number of teams
        </Title>
        <Input
          className={`start__input`}
          type='number'
          defaultValue={league.teamsCount}
          value={champ.teamsCount}
          max={league.teams.length}
          min={String(minTeams)}
          onChange={(e) => updateTeamsNum(parseInt(e.target.value))}
        />
        <Title
          level={5}
          className={`start__actions-error ${
            champ.teamsCount < minTeams ||
            champ.teamsCount > league.teams.length
              ? 'start__actions-error--active'
              : 'start__actions-error--inactive'
          }`}
        >
          Please enter a valid number of teams. From {minTeams} to{' '}
          {league.teams.length}
        </Title>
        <Link
          className={`start__link ${
            champ.teamsCount < minTeams ||
            champ.teamsCount > league.teams.length
              ? 'start__link--inactive'
              : 'start__link--active pulse'
          }`}
          to='season'
          onClick={() => start()}
        >
          Start
        </Link>
      </div>
    </>
  );
}

export default TeamsNumber;

import { Input, Typography, Select } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { League as TLeague, Teams } from '../data/types';
import { schedule } from '../data/schedule';
import '../styles/TeamsNumber.css';

const { Title } = Typography;
const { Option } = Select;

function TeamsNumber({ league }: any) {
  const [champ, setChamp] = useState<TLeague>(league);
  let minTeams: number = 2;
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const handleChange = (value: string[]) => {
    setSelectedTeams(value);
    localStorage.setItem('favoriteTeams', JSON.stringify(value));
  };

  if (champ.id === '3' || champ.id === '4') {
    minTeams = 16;
  } else if (champ.id === '1' || champ.id === '2') {
    minTeams = 8;
  }

  function updateTeamsNum(value: number): void {
    const curTeams = champ.teams.slice(0, value);
    const curTeamIds = new Set(curTeams.map((team) => team.id));
    const curSelectedTeams = selectedTeams.filter((id) => curTeamIds.has(id));

    setSelectedTeams(curSelectedTeams);
    localStorage.setItem('favoriteTeams', JSON.stringify(curSelectedTeams));

    setChamp((prev) => ({
      ...prev,
      teams_count: value
    }));
  }

  function start() {
    const isValid =
      champ.teams_count >= minTeams && champ.teams_count <= league.teams.length;

    if (!isValid) return;

    schedule(league.teams.slice(0, champ.teams_count), league.id);
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
              className={`start__team ${index < champ.teams_count ? 'start__team--active' : ''
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
          {champ.teams_count > 16
            ? 16
            : champ.teams_count > 8
              ? 8
              : champ.teams_count > 4
                ? 4
                : 2}{' '}
          teams will advance to the Play-Off
        </Title>
        <Title level={5} className='start__actions-title--selection'>
          Select the number of teams
        </Title>
        <Input
          id='teams-count-input'
          className='start__input'
          type='number'
          defaultValue={league.teams_count}
          value={champ.teams_count}
          max={league.teams.length}
          min={String(minTeams)}
          onChange={(e) => updateTeamsNum(parseInt(e.target.value))}
          aria-label='Number of teams'
          aria-invalid={champ.teams_count < minTeams || champ.teams_count > league.teams.length}
          aria-describedby='teams-count-error'
        />
        <Title
          id='teams-count-error'
          level={5}
          className={`start__actions-error ${champ.teams_count < minTeams ||
            champ.teams_count > league.teams.length
            ? 'start__actions-error--active'
            : 'start__actions-error--inactive'
            }`}
          aria-live='assertive'
        >
          Please enter a valid number of teams. From {minTeams} to{' '}
          {league.teams.length}
        </Title>
        <Title level={5} className='start__actions-title--selection'>
          Select Your Favorite Teams
        </Title>
        <Select
          mode='multiple'
          className='start__select'
          allowClear
          placeholder='Teams'
          value={selectedTeams}
          onChange={handleChange}
          aria-label='Select your favorite teams'
        >
          {champ.teams.slice(0, champ.teams_count).map((team) => (
            <Option key={team.id} value={team.id}>
              {team.name}
            </Option>
          ))}
        </Select>
        <Link
          className={`start__link ${champ.teams_count < minTeams ||
            champ.teams_count > league.teams.length
            ? 'start__link--inactive'
            : 'start__link--active pulse'
            }`}
          to={
            champ.teams_count >= minTeams &&
              champ.teams_count <= league.teams.length
              ? 'season'
              : '#'
          }
          onClick={(e) => {
            if (
              champ.teams_count < minTeams ||
              champ.teams_count > league.teams.length
            ) {
              e.preventDefault();
              return;
            }
            start();
          }}
        >
          Start
        </Link>
      </div>
    </>
  );
}

export default TeamsNumber;

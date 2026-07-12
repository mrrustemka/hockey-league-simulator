import { useMemo, useState } from 'react';
import { Input, Typography, Select } from 'antd';
import { Link } from 'react-router-dom';
import { League as TLeague } from '../data/types';
import { schedule } from '../data/schedule';
import '../styles/TeamsNumber.css';

const { Title } = Typography;
const { Option } = Select;

interface TeamsNumberProps {
  league: TLeague;
}

function TeamsNumber({ league }: TeamsNumberProps) {
  const [teamsCount, setTeamsCount] = useState<number>(league.teams_count);
  const [selectedTeams, setSelectedTeams] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('favoriteTeams');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const minTeams = useMemo(() => {
    if (league.id === '3' || league.id === '4') return 16;
    if (league.id === '1' || league.id === '2' || league.id === '11') return 8;
    return 2;
  }, [league.id]);

  const playoffCount = useMemo(() => {
    if (teamsCount > 16) return 16;
    if (teamsCount > 8) return 8;
    if (teamsCount > 4) return 4;
    return 2;
  }, [teamsCount]);

  const isValid = teamsCount >= minTeams && teamsCount <= league.teams.length;

  const leagueTeamIds = useMemo(
    () => new Set(league.teams.map((team) => team.id)),
    [league.id]
  );

  const validSelectedTeams = useMemo(
    () => selectedTeams.filter((id) => leagueTeamIds.has(id)),
    [selectedTeams, leagueTeamIds]
  );

  const handleChange = (value: string[]) => {
    setSelectedTeams(value);
    localStorage.setItem('favoriteTeams', JSON.stringify(value));
  };

  const updateTeamsNum = (value: number): void => {
    const safeValue = isNaN(value) ? 0 : value;
    const curTeams = league.teams.slice(0, safeValue);
    const curTeamIds = new Set(curTeams.map((team) => team.id));
    const curSelectedTeams = selectedTeams.filter((id) => curTeamIds.has(id));

    setSelectedTeams(curSelectedTeams);
    localStorage.setItem('favoriteTeams', JSON.stringify(curSelectedTeams));
    setTeamsCount(safeValue);
  };

  const start = (): void => {
    if (!isValid) return;

    schedule(league.teams.slice(0, teamsCount), league.id);
    localStorage.setItem('leagueId', JSON.stringify(league.id));
  };

  return (
    <>
      <div className='start__teams'>
        {league.teams.map((team, index) => (
          <div
            key={team.id}
            className={`start__team ${index < teamsCount ? 'start__team--active' : ''
              }`}
          >
            <img
              src={team.logo}
              alt={`${team.name} Logo`}
              className='start__team-logo'
              loading='lazy'
            />
          </div>
        ))}
      </div>
      <div className='start__actions'>
        <Title level={5} className='start__actions-title--play-off-count'>
          {playoffCount} teams will advance to the Play-Off
        </Title>
        <Title level={5} className='start__actions-title--selection'>
          Select the number of teams
        </Title>
        <Input
          id='teams-count-input'
          className='start__input'
          type='number'
          value={teamsCount}
          max={league.teams.length}
          min={String(minTeams)}
          onChange={(e) => updateTeamsNum(parseInt(e.target.value))}
          aria-label='Number of teams'
          aria-invalid={!isValid}
          aria-describedby='teams-count-error'
        />
        <Title
          id='teams-count-error'
          level={5}
          className={`start__actions-error ${!isValid
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
          value={validSelectedTeams}
          onChange={handleChange}
          aria-label='Select your favorite teams'
        >
          {league.teams.slice(0, teamsCount).map((team) => (
            <Option key={team.id} value={team.id}>
              {team.name}
            </Option>
          ))}
        </Select>
        <Link
          className={`start__link ${!isValid ? 'start__link--inactive' : 'start__link--active pulse'
            }`}
          to={isValid ? 'season' : '#'}
          onClick={(e) => {
            if (!isValid) {
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

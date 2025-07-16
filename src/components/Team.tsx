import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Image, Typography } from 'antd';
import { GameResult, Teams } from '../data/types';
import { whiteTeams } from '../data/whiteList';
import Chart from './Chart';
import Gallery from './Gallery';
import Header from './Header';
import '../styles/Team.css';

const { Title } = Typography;

function Team() {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const teams = JSON.parse(localStorage.getItem('teamsList') || '[]');
  const team: Teams | undefined = teams.find(
    (team: Teams) => team.id === String(teamId)
  );

  if (!team) {
    return <div className='team__not-found'>Team not found</div>;
  }

  const chartData = team.chart_data || [];
  const chartLabels: string[] =
    team.game_results.map((game: GameResult) => {
      const {
        home,
        away,
        home_goals,
        away_goals,
        overtime,
        home_status,
        away_status,
      } = game;

      const isAwayTeam = away === team.id;
      const opponentId = isAwayTeam ? home : away;
      const teamGoals = isAwayTeam ? away_goals : home_goals;
      const opponentGoals = isAwayTeam ? home_goals : away_goals;
      const result = teamGoals > opponentGoals ? ' W ' : ' L ';
      const opponentAbbr =
        teams.find((t: Teams) => t.id === opponentId)?.abbreviation ||
        opponentId;
      const status = isAwayTeam ? home_status : away_status;

      return `${opponentAbbr}${result}${teamGoals} - ${opponentGoals} ${overtime} ${status}`;
    }) || [];

  const color = team.color || '';
  const leagueId: string = JSON.parse(localStorage.getItem('leagueId') || '');
  const playOffTeams: number = JSON.parse(
    localStorage.getItem('playoffList') || '[]'
  ).length;
  const photos: string[] = team.photos || [];

  return (
    <div className='team'>
      <Header id={leagueId} />
      <div
        className='team__subheader'
        style={{
          backgroundColor: team.color,
          color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
        }}
      >
        <button
          className='team__button team__button--back'
          onClick={() => navigate(-1)}
        >
          Back to the Season
        </button>
        {team.is_playoff ? (
          <div>
            <div className='team__name--is_playoff'>x</div>
            <Title
              level={1}
              className='team__name'
              style={{
                color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
              }}
            >
              {team.name + ' ' + team.status}
            </Title>
          </div>
        ) : (
          <Title
            level={1}
            className='team__name'
            style={{
              color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            }}
          >
            {team.name + ' ' + team.status}
          </Title>
        )}

        <img
          className='team__logo'
          src={team.logo}
          alt={team.name}
          loading='lazy'
        />
      </div>
      <div
        className='team__details'
        style={{
          backgroundColor: team.color,
          color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
        }}
      >
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            borderColor: whiteTeams.includes(team.color) ? '#fff' : '#000000',
          }}
        >
          Points: {team.points}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            borderColor: whiteTeams.includes(team.color) ? '#fff' : '#000000',
          }}
        >
          Games Played: {team.game_counter}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            borderColor: whiteTeams.includes(team.color) ? '#fff' : '#000000',
          }}
        >
          Wins: {team.wins}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            borderColor: whiteTeams.includes(team.color) ? '#fff' : '#000000',
          }}
        >
          Losses: {team.loses}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            borderColor: whiteTeams.includes(team.color) ? '#fff' : '#000000',
          }}
        >
          Losses OT: {team.loses_ot}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            borderColor: whiteTeams.includes(team.color) ? '#fff' : '#000000',
          }}
        >
          Goals For: {team.goals_for}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            borderColor: whiteTeams.includes(team.color) ? '#fff' : '#000000',
          }}
        >
          Goals Against: {team.goals_against}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            borderColor: whiteTeams.includes(team.color) ? '#fff' : '#000000',
          }}
        >
          Goals Diff: {team.goals_diff}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
            borderColor: whiteTeams.includes(team.color) ? '#fff' : '#000000',
          }}
        >
          Rating: {team.rating}
        </Title>
      </div>
      <Gallery photos={photos} team={team.name} />
      <Chart
        rank={chartData}
        labels={chartLabels}
        color={color}
        playOff={playOffTeams}
      />
      {leagueId !== '1' && leagueId !== '2' ? (
        <>
          <Title level={2} className='team__header'>
            {team.city + ' ' + team.name + ' plays at ' + team.arena_name}{' '}
          </Title>
          <Image
            className='team__arena'
            width='auto'
            src={team.arena_photo}
            preview={false}
            loading='lazy'
          />
          <Title level={5} className='team__description'>
            {team.arena_description}
          </Title>
        </>
      ) : (
        <></>
      )}
      <div
        className='team__nets'
        style={{
          backgroundColor: team.color,
          color: whiteTeams.includes(team.color) ? '#fff' : '#000000',
        }}
      >
        {team.website ? (
          <a href={team.website}>
            <Icon icon='fa6-brands:readme' />
          </a>
        ) : (
          <></>
        )}
        {team.facebook ? (
          <a href={team.facebook}>
            <Icon icon='fa6-brands:facebook' />
          </a>
        ) : (
          <></>
        )}
        {team.youtube ? (
          <a href={team.youtube}>
            <Icon icon='simple-icons:youtube' />
          </a>
        ) : (
          <></>
        )}
        {team.instagram ? (
          <a href={team.instagram}>
            <Icon icon='fa6-brands:instagram' />
          </a>
        ) : (
          <></>
        )}
        {team.x ? (
          <a href={team.x}>
            <Icon icon='fa6-brands:x-twitter' />
          </a>
        ) : (
          <></>
        )}
        {team.threads ? (
          <a href={team.threads}>
            <Icon icon='simple-icons:threads' />
          </a>
        ) : (
          <></>
        )}
        {team.tiktok ? (
          <a href={team.tiktok}>
            <Icon icon='fa6-brands:tiktok' />
          </a>
        ) : (
          <></>
        )}
        {team.snapchat ? (
          <a href={team.tiktok}>
            <Icon icon='fa6-brands:snapchat' />
          </a>
        ) : (
          <></>
        )}
        {team.linkedin ? (
          <a href={team.linkedin}>
            <Icon icon='fa6-brands:linkedin' />
          </a>
        ) : (
          <></>
        )}
        {team.twitch ? (
          <a href={team.twitch}>
            <Icon icon='fa6-brands:twitch' />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Team;

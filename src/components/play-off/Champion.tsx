import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Image, Typography } from 'antd';
import { GameResult, Teams } from '../../data/types';
import { whiteTeams } from '../../data/whiteList';
import { champs } from '../../data/champs';
import Chart from '../Chart';
import Gallery from '../Gallery';
import PreviousPairs from './PreviousPairs';

const { Title } = Typography;

function Champion(props: { champion: Teams }) {
  const leagueId: string = JSON.parse(localStorage.getItem('leagueId') || '');
  const playOffTeams: number = JSON.parse(
    localStorage.getItem('playoffList') || '[]'
  ).length;
  const teams = JSON.parse(localStorage.getItem('teamsList') || '[]');
  const chartLabels: string[] =
    props.champion.game_results.map((game: GameResult) => {
      const {
        home,
        away,
        home_goals,
        away_goals,
        overtime,
        home_status,
        away_status
      } = game;

      const isAwayTeam = away === props.champion.id;
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
  function updateGame() {
    champs
      .find((champ) => champ.id === leagueId)
      ?.teams.forEach((team) => {
        team.game_counter = 0;
        team.goals_against = 0;
        team.goals_diff = 0;
        team.goals_for = 0;
        team.loses = 0;
        team.loses_ot = 0;
        team.play_off_rank = 0;
        team.play_off_round_wins = 0;
        team.points = 0;
        team.wins = 0;
      });
    localStorage.removeItem('leagueId');
    localStorage.removeItem('scheduleList');
    localStorage.removeItem('teamsList');
    localStorage.removeItem('playoffList');
    localStorage.removeItem('gameIndex');
    localStorage.removeItem('favoriteTeams');
  }
  return (
    <div className='playoff__champion'>
      <h2 className='playoff__champion-heading'>
        The Champion is
        <div className='playoff__champion-details'>
          <img
            className='playoff__champion-logo'
            src={props.champion.logo}
            alt={props.champion.name + ' Logo'}
            loading='lazy'
          />
          <span className='playoff__champion-name'>{props.champion.name}</span>
        </div>
      </h2>
      <div
        className='team__details'
        style={{
          backgroundColor: props.champion.color,
          color: whiteTeams.includes(props.champion.color) ? '#fff' : '#000000'
        }}
      >
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: props.champion.color,
            color: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000',
            borderColor: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000'
          }}
        >
          Points: {props.champion.points}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: props.champion.color,
            color: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000',
            borderColor: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000'
          }}
        >
          Games Played: {props.champion.game_counter}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: props.champion.color,
            color: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000',
            borderColor: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000'
          }}
        >
          Wins: {props.champion.wins}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: props.champion.color,
            color: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000',
            borderColor: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000'
          }}
        >
          Losses: {props.champion.loses}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: props.champion.color,
            color: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000',
            borderColor: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000'
          }}
        >
          Losses OT: {props.champion.loses_ot}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: props.champion.color,
            color: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000',
            borderColor: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000'
          }}
        >
          Goals For: {props.champion.goals_for}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: props.champion.color,
            color: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000',
            borderColor: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000'
          }}
        >
          Goals Against: {props.champion.goals_against}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: props.champion.color,
            color: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000',
            borderColor: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000'
          }}
        >
          Goals Diff: {props.champion.goals_diff}
        </Title>
        <Title
          level={3}
          className='team__detail-title'
          style={{
            backgroundColor: props.champion.color,
            color: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000',
            borderColor: whiteTeams.includes(props.champion.color)
              ? '#fff'
              : '#000000'
          }}
        >
          Rating: {props.champion.rating}
        </Title>
      </div>
      <Gallery photos={props.champion.photos} team={props.champion.name} />
      <Chart
        rank={props.champion.chart_data}
        labels={chartLabels}
        color={props.champion.color}
        playOff={playOffTeams}
      />
      <Title level={2} className='team__header'>
        Play Off Series
      </Title>
      <div className='playoff__round-panel'>
        {props.champion.play_off_round_results.map((result, index) => {
          const opponent = teams.find((t: Teams) => t.abbreviation === result.opponent);
          return (
            <PreviousPairs
              key={result.id || index}
              teams={[
                {
                  ...result,
                  logo: props.champion.logo,
                  name: props.champion.name,
                },
                {
                  team: result.opponent,
                  team_wins: result.opponent_wins,
                  opponent: result.team,
                  opponent_wins: result.team_wins,
                  logo: opponent?.logo,
                  name: opponent?.name,
                }
              ]}
              index={index + 1}
            />
          );
        })}
      </div>
      {leagueId !== '1' && leagueId !== '2' ? (
        <>
          <Title level={2} className='team__header'>
            {props.champion.city +
              ' ' +
              props.champion.name +
              ' play at ' +
              props.champion.arena_name}{' '}
          </Title>
          <Image
            className='team__arena'
            width='auto'
            src={props.champion.arena_photo}
            preview={false}
            loading='lazy'
          />
          <Title level={5} className='team__description'>
            {props.champion.arena_description}
          </Title>
        </>
      ) : (
        <></>
      )}
      <div
        className='team__nets'
        style={{
          backgroundColor: props.champion.color,
          color: whiteTeams.includes(props.champion.color) ? '#fff' : '#000000'
        }}
      >
        {props.champion.website ? (
          <a href={props.champion.website}>
            <Icon icon='fa6-brands:readme' />
          </a>
        ) : (
          <></>
        )}
        {props.champion.facebook ? (
          <a href={props.champion.facebook}>
            <Icon icon='fa6-brands:facebook' />
          </a>
        ) : (
          <></>
        )}
        {props.champion.youtube ? (
          <a href={props.champion.youtube}>
            <Icon icon='simple-icons:youtube' />
          </a>
        ) : (
          <></>
        )}
        {props.champion.instagram ? (
          <a href={props.champion.instagram}>
            <Icon icon='fa6-brands:instagram' />
          </a>
        ) : (
          <></>
        )}
        {props.champion.x ? (
          <a href={props.champion.x}>
            <Icon icon='fa6-brands:x-twitter' />
          </a>
        ) : (
          <></>
        )}
        {props.champion.threads ? (
          <a href={props.champion.threads}>
            <Icon icon='simple-icons:threads' />
          </a>
        ) : (
          <></>
        )}
        {props.champion.tiktok ? (
          <a href={props.champion.tiktok}>
            <Icon icon='fa6-brands:tiktok' />
          </a>
        ) : (
          <></>
        )}
        {props.champion.snapchat ? (
          <a href={props.champion.tiktok}>
            <Icon icon='fa6-brands:snapchat' />
          </a>
        ) : (
          <></>
        )}
        {props.champion.linkedin ? (
          <a href={props.champion.linkedin}>
            <Icon icon='fa6-brands:linkedin' />
          </a>
        ) : (
          <></>
        )}
        {props.champion.twitch ? (
          <a href={props.champion.twitch}>
            <Icon icon='fa6-brands:twitch' />
          </a>
        ) : (
          <></>
        )}
      </div>
      <Link
        to='/hockey-league-simulator'
        className='playoff__champion-link pulse'
        onClick={() => updateGame()}
      >
        Play Again
      </Link>
    </div>
  );
}

export default Champion;

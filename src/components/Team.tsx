import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Image, Typography } from 'antd';
import { useEffect } from 'react';
import { GameResult, Teams } from '../data/types';
import { whiteTeams } from '../data/whiteList';
import Chart from './Chart';
import Gallery from './Gallery';
import Header from './Header';
import '../styles/Team.css';

const { Title } = Typography;

// Constants

// Leagues that do not have arena information.
const LEAGUES_WITHOUT_ARENA = new Set(['1', '2', '11']);

// Ordered stat rows shown on the team detail panel.
const STAT_ROWS: Array<{ label: string; key: keyof Teams }> = [
  { label: 'Points', key: 'points' },
  { label: 'Games Played', key: 'game_counter' },
  { label: 'Wins', key: 'wins' },
  { label: 'Losses', key: 'loses' },
  { label: 'Losses OT', key: 'loses_ot' },
  { label: 'Goals For', key: 'goals_for' },
  { label: 'Goals Against', key: 'goals_against' },
  { label: 'Goals Diff', key: 'goals_diff' },
  { label: 'Rating', key: 'rating' },
];

// Social-media link definitions.
const SOCIAL_LINKS: Array<{ key: keyof Teams; label: string; icon: string }> = [
  { key: 'website', label: 'Website', icon: 'fa6-brands:readme' },
  { key: 'facebook', label: 'Facebook', icon: 'fa6-brands:facebook' },
  { key: 'youtube', label: 'YouTube', icon: 'simple-icons:youtube' },
  { key: 'instagram', label: 'Instagram', icon: 'fa6-brands:instagram' },
  { key: 'x', label: 'X (Twitter)', icon: 'fa6-brands:x-twitter' },
  { key: 'threads', label: 'Threads', icon: 'simple-icons:threads' },
  { key: 'tiktok', label: 'TikTok', icon: 'fa6-brands:tiktok' },
  { key: 'snapchat', label: 'Snapchat', icon: 'fa6-brands:snapchat' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'fa6-brands:linkedin' },
  { key: 'twitch', label: 'Twitch', icon: 'fa6-brands:twitch' },
];

// Helpers

// Returns the text color appropriate for a given team background color.
function getTextColor(color: string): string {
  return whiteTeams.includes(color) ? '#fff' : '#000000';
}

// Builds a chart label string for a single game result.
function buildChartLabel(game: GameResult, teamId: string, teams: Teams[]): string {
  const { home, away, home_goals, away_goals, overtime, home_status, away_status } = game;
  const isAwayTeam = away === teamId;
  const opponentId = isAwayTeam ? home : away;
  const teamGoals = isAwayTeam ? away_goals : home_goals;
  const opponentGoals = isAwayTeam ? home_goals : away_goals;
  const result = teamGoals > opponentGoals ? ' W ' : ' L ';
  const opponentAbbr = teams.find((t) => t.id === opponentId)?.abbreviation ?? opponentId;
  const status = isAwayTeam ? home_status : away_status;

  return `${opponentAbbr}${result}${teamGoals} - ${opponentGoals} ${overtime} ${status}`;
}

// Component

function Team() {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const teams: Teams[] = JSON.parse(localStorage.getItem('teamsList') || '[]');
  const team: Teams | undefined = teams.find((t) => t.id === String(teamId));

  useEffect(() => {
    if (team) {
      document.title = `Hockey Simulator - ${team.name}`;
    }
  }, [team]);

  if (!team) {
    return <div className='team__not-found'>Team not found</div>;
  }

  const textColor = getTextColor(team.color);
  const colorStyle = { backgroundColor: team.color, color: textColor };
  const detailTitleStyle = { ...colorStyle, borderColor: textColor };

  const chartData = team.chart_data || [];
  const chartLabels = team.game_results.map((game) =>
    buildChartLabel(game, team.id, teams)
  );

  const leagueId: string = JSON.parse(localStorage.getItem('leagueId') || '""');
  const playOffTeams: number = JSON.parse(
    localStorage.getItem('playoffList') || '[]'
  ).length;

  const hasArena = !LEAGUES_WITHOUT_ARENA.has(leagueId);

  return (
    <div className='team'>
      <Header id={leagueId} />

      {/* Subheader */}
      <div className='team__subheader' style={colorStyle}>
        <button
          className='team__button team__button--back'
          onClick={() => navigate(-1)}
        >
          Back to the Season
        </button>

        <div>
          {team.is_playoff && (
            <div className='team__name--is_playoff'>x</div>
          )}
          <Title
            level={1}
            className='team__name'
            style={{ color: textColor }}
          >
            {`${team.name} ${team.status}`}
          </Title>
        </div>

        <img
          className='team__logo'
          src={team.logo}
          alt={`${team.name} logo`}
          loading='lazy'
        />
      </div>

      {/* Stats */}
      <section className='team__details' aria-label='Team statistics' style={colorStyle}>
        {STAT_ROWS.map(({ label, key }) => (
          <Title
            key={key}
            level={3}
            className='team__detail-title'
            style={detailTitleStyle}
          >
            {label}: {team[key] as number}
          </Title>
        ))}
      </section>

      <Gallery photos={team.photos || []} team={team.name} />

      <Chart
        rank={chartData}
        labels={chartLabels}
        color={team.color}
        playOff={playOffTeams}
      />

      {/* Arena */}
      {hasArena && (
        <section aria-label='Arena information'>
          <Title level={2} className='team__header'>
            {`${team.city} ${team.name} play at ${team.arena_name}`}
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
        </section>
      )}

      {/* Social links */}
      <nav
        className='team__nets'
        aria-label='Social media links'
        style={colorStyle}
      >
        {SOCIAL_LINKS.map(({ key, label, icon }) => {
          const href = team[key] as string | undefined;
          return href ? (
            <a key={key} href={href} aria-label={label}>
              <Icon icon={icon} />
            </a>
          ) : null;
        })}
      </nav>
    </div>
  );
}

export default Team;

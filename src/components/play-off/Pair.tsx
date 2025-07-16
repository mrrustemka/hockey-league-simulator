import { Button, Typography } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GameResult, Teams, PlayOffGameResult } from '../../data/types';
import PlayOffGame from './PlayOffGame';
import '../../styles/Pair.css';

const { Title } = Typography;

interface PairProps {
  teams: Teams[];
  handlerIsRoundEnd: () => void;
  status: boolean;
  playoffWinsRequiredCount: number;
}

function Pair({
  teams,
  handlerIsRoundEnd,
  status,
  playoffWinsRequiredCount,
}: PairProps) {
  const leagueId: string = JSON.parse(localStorage.getItem('leagueId') || '');
  const [games, setGames] = useState(
    leagueId === '1' || leagueId === '2'
      ? [
          {
            id: uuidv4(),
            home: teams[0].abbreviation,
            away: teams[1].abbreviation,
          },
        ]
      : [
          {
            id: uuidv4(),
            home: teams[0].abbreviation,
            away: teams[1].abbreviation,
          },
          {
            id: uuidv4(),
            home: teams[0].abbreviation,
            away: teams[1].abbreviation,
          },
          {
            id: uuidv4(),
            home: teams[1].abbreviation,
            away: teams[0].abbreviation,
          },
          {
            id: uuidv4(),
            home: teams[1].abbreviation,
            away: teams[0].abbreviation,
          },
        ]
  );
  let [curGame, setCurGame] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [results, setResults] = useState<GameResult[]>([]);

  function addGame() {
    const team0Wins = teams[0].play_off_round_wins;
    const team1Wins = teams[1].play_off_round_wins;
    const maxWins = playoffWinsRequiredCount;
    const totalGames = games.length;

    if (team0Wins === maxWins || team1Wins === maxWins) {
      return setIsFinished(!isFinished);
    }

    const canAddGame = () => {
      const bothTeamsEqualWins = team0Wins === team1Wins;
      const team0CanWin =
        team0Wins < team1Wins &&
        team0Wins !== 0 &&
        team1Wins !== maxWins &&
        team0Wins + maxWins !== totalGames;
      const team1CanWin =
        team1Wins < team0Wins &&
        team1Wins !== 0 &&
        team0Wins !== maxWins &&
        team1Wins + maxWins !== totalGames;

      return bothTeamsEqualWins || team0CanWin || team1CanWin;
    };

    if (canAddGame()) {
      const newGame = [
        ...games,
        games.length === 5
          ? {
              id: uuidv4(),
              home: teams[1].abbreviation,
              away: teams[0].abbreviation,
              winner: '',
            }
          : {
              id: uuidv4(),
              home: teams[0].abbreviation,
              away: teams[1].abbreviation,
              winner: '',
            },
      ];
      setGames(newGame);
    }

    if (team0Wins === maxWins || team1Wins === maxWins) {
      handlerIsRoundEnd();
    }
  }

  function simulate(game: PlayOffGameResult) {
    let home: Teams = {
      abbreviation: '',
      city: '',
      country: '',
      game_counter: 0,
      goals_against: 0,
      goals_diff: 0,
      goals_for: 0,
      id: '0',
      logo: '',
      loses: 0,
      loses_ot: 0,
      name: '',
      points: 0,
      rating: 0,
      wins: 0,
      play_off_rank: 0,
      play_off_round_wins: 0,
      color: '#ffffff',
      flag: '',
      is_playoff: false,
      status: '',
      cur_status_length: 0,
      chart_data: [],
      game_results: [],
      photos: [],
      arena_name: '',
      arena_description: '',
      arena_capacity: 0,
      arena_photo: '',
      facebook: '',
      youtube: '',
      instagram: '',
      x: '',
      threads: '',
      tiktok: '',
      snapchat: '',
      linkedin: '',
      website: '',
      twitch: '',
      points_percentage: 0,
    };
    let away: Teams = {
      abbreviation: '',
      city: '',
      country: '',
      game_counter: 0,
      goals_against: 0,
      goals_diff: 0,
      goals_for: 0,
      id: '0',
      logo: '',
      loses: 0,
      loses_ot: 0,
      name: '',
      points: 0,
      rating: 0,
      wins: 0,
      play_off_rank: 0,
      play_off_round_wins: 0,
      color: '#ffffff',
      flag: '',
      is_playoff: false,
      status: '',
      cur_status_length: 0,
      chart_data: [],
      game_results: [],
      photos: [],
      arena_name: '',
      arena_description: '',
      arena_capacity: 0,
      arena_photo: '',
      facebook: '',
      youtube: '',
      instagram: '',
      x: '',
      threads: '',
      tiktok: '',
      snapchat: '',
      linkedin: '',
      website: '',
      twitch: '',
      points_percentage: 0,
    };
    function getTeamInfo(team: string): Teams {
      const foundTeam = teams.find(
        (element: { abbreviation: string }) => element.abbreviation === team
      );

      if (!foundTeam) {
        throw new Error(`Team with abbreviation "${team}" not found`);
      }
      return foundTeam;
    }
    function getGoals(min: number, max: number, rating: number) {
      return Math.round(
        ((Math.floor(Math.random() * (max - min + 1)) + min) * rating) / 100
      );
    }

    const homeType: Teams | void = getTeamInfo(game.home);
    if (homeType !== undefined) {
      home = homeType;
      if (Math.random() < 0.25 && home.status === '') {
        home.status = Math.random() < 0.5 ? '\u{1F525}' : '\u{1F9CA}';
        home.cur_status_length = Math.floor(Math.random() * 3) + 1;
      } else if (home.status !== '' && home.cur_status_length) {
        home.cur_status_length--;
        if (home.cur_status_length === 0) {
          home.status = '';
        }
      }
    }

    const awayType: Teams | void = getTeamInfo(game.away);
    if (awayType !== undefined) {
      away = awayType;
      if (Math.random() < 0.4 && away.status === '') {
        away.status = Math.random() < 0.5 ? '\u{1F525}' : '\u{1F9CA}';
        away.cur_status_length = Math.floor(Math.random() * 3) + 1;
      } else if (away.status !== '' && away.cur_status_length) {
        away.cur_status_length--;
        if (home.cur_status_length === 0) {
          away.status = '';
        }
      }
    }

    //Goals
    let hGoals: number = getGoals(
      0,
      9,
      home.status === '\u{1F525}'
        ? 99
        : home.status === '\u{1F9CA}'
        ? 50
        : home.rating
    );
    let aGoals: number = getGoals(
      0,
      9,
      away.status === '\u{1F525}'
        ? 99
        : away.status === '\u{1F9CA}'
        ? 50
        : away.rating
    );

    // Make more realistic game score

    if (hGoals - aGoals >= 4 || aGoals - hGoals >= 4) {
      if (Math.random() < 0.75) {
        if (hGoals < aGoals) {
          aGoals = hGoals;
        } else {
          hGoals = aGoals;
        }
      }
    }

    // OT
    let overtime: string = '';
    if (hGoals === aGoals) {
      if (Math.random() > 0.5) {
        hGoals += 1;
      } else {
        aGoals += 1;
      }
      overtime = 'OT';
    }

    // Play Off wins
    if (hGoals > aGoals) {
      home.play_off_round_wins += 1;
    } else {
      away.play_off_round_wins += 1;
    }

    setCurGame(++curGame);
    game.home_goals = hGoals;
    game.away_goals = aGoals;

    setResults((prevResults) => [
      ...prevResults,
      {
        home: home.abbreviation,
        away: away.abbreviation,
        home_goals: hGoals,
        away_goals: aGoals,
        overtime: overtime,
        id: uuidv4(),
        home_status: home.status,
        away_status: away.status,
      },
    ]);

    addGame();
  }

  return (
    <div className='pair'>
      <div className='pair__column'>
        {status ? (
          <>
            <img
              className='pair__team-logo-home'
              src={teams[0].logo}
              alt={teams[0].name + ' Logo'}
              style={{
                backgroundColor: teams[0].color,
              }}
              loading='lazy'
            />
            <img
              className='pair__team-logo-away'
              src={teams[1].logo}
              alt={teams[1].name + ' Logo'}
              style={{
                backgroundColor: teams[1].color,
              }}
              loading='lazy'
            />
            <Title className='pair__team-status-home' level={4}>
              {teams[0].status !== '' ? teams[0].status : ''}
            </Title>
            <Title className='pair__scores' level={4}>
              {leagueId !== '1' && leagueId !== '2'
                ? teams[0].play_off_round_wins +
                  ' - ' +
                  teams[1].play_off_round_wins
                : ''}
            </Title>
            <Title className='pair__team-status-away' level={4}>
              {teams[1].status !== '' ? teams[1].status : ''}
            </Title>
            <div className='pair__button-container'>
              <Button
                className='pair__simulate-button pulse'
                onClick={() => simulate(games[curGame])}
                disabled={isFinished || !status}
              >
                Simulate
              </Button>
            </div>
            <div className='pair__games'>
              {games.map((game, index) => (
                <PlayOffGame
                  game={game}
                  key={game.id}
                  index={index}
                  result={results[index]}
                  leagueId={leagueId}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <img
              className='pair__team-logo-home'
              src={teams[0].logo}
              alt={teams[0].name + ' Logo'}
              loading='lazy'
            />
            <img
              className='pair__team-logo-away'
              src={teams[1].logo}
              alt={teams[1].name + ' Logo'}
              loading='lazy'
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Pair;

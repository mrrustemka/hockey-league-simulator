import { Button, Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GameResult, Schedule, Teams } from '../data/types';
import Header from './Header';
import Legend from './Legend';
import Sheet from './Sheet';
import UpcomingGame from './UpcomingGame';
import { whiteTeams } from '../data/whiteList';
import '../Styles/Game.css';
import { champs } from '../data/champs';

const { Title } = Typography;

function Game() {
  const teams = JSON.parse(localStorage.getItem('teamsList') || '[]');
  const leagueId: string = JSON.parse(localStorage.getItem('leagueId') || '');
  const scheduleList: Schedule[] = JSON.parse(
    localStorage.getItem('scheduleList') || '[]'
  );
  let [teamsUpdate, setTeamsUpdate] = useState<Teams[]>(teams || {});
  let [gameCounter, setGameCounter] = useState<number>(
    JSON.parse(localStorage.getItem('gameIndex') || '0')
  );
  let [homeGoals, setHomeGoals] = useState<number>(0);
  let [awayGoals, setAwayGoals] = useState<number>(0);
  let [typeOfOt, setTypeOfOt] = useState<string>('');
  const [isSimulate, setIsSimulate] = useState<boolean>(false);
  const playOffTeam: number =
    teamsUpdate.length > 16
      ? 16
      : teamsUpdate.length > 8
      ? 8
      : teamsUpdate.length > 4
      ? 4
      : 2;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateCounter = () => {
    setGameCounter(gameCounter + 1);
    setIsSimulate(false);
  };

  const buttonHandler = () => {
    const lastGame: GameResult = simulate(scheduleList[gameCounter]);

    if (lastGame) {
      setHomeGoals(lastGame.homeGoals);
      setAwayGoals(lastGame.awayGoals);
      setTypeOfOt(lastGame.overtime);
    }
  };

  const League = champs.find((champ) => champ.id === leagueId);

  // Test simulation
  //   useEffect(() => {
  //     if (gameCounter < scheduleList.length) {
  //       const interval = setInterval(() => {
  //         const lastGame: GameResult = simulate(scheduleList[gameCounter]);
  //         if (lastGame) {
  //           setHomeGoals(lastGame.homeGoals);
  //           setAwayGoals(lastGame.awayGoals);
  //           setTypeOfOt(lastGame.overtime);
  //           setIsSimulate(true);

  //           setTimeout(() => {
  //             setGameCounter((prev) => prev + 1);
  //             setIsSimulate(false);
  //           }, 50); // small delay before next game
  //         }
  //       }, 100); // run each simulation every second

  //       return () => clearInterval(interval);
  //     }
  //   });

  function simulate(game: Schedule) {
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
      isPlayOff: false,
      status: '',
      curStatusLength: 0,
      chartData: [],
      chartLabels: [],
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
      isPlayOff: false,
      status: '',
      curStatusLength: 0,
      chartData: [],
      chartLabels: [],
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
    function getGoals(min: number, max: number, rating: number) {
      return Math.round(
        ((Math.floor(Math.random() * (max - min + 1)) + min) * rating) / 100
      );
    }

    function getTeamInfo(team: string): Teams {
      const foundTeam = teams.find(
        (element: { abbreviation: string }) => element.abbreviation === team
      );
      if (!foundTeam) {
        throw new Error(`Team with abbreviation "${team}" not found`);
      }
      return foundTeam;
    }

    const homeType: Teams | void = getTeamInfo(game.home);
    if (homeType !== undefined) {
      home = homeType;

      if (Math.random() < 0.25 && home.status === '') {
        home.status = Math.random() < 0.5 ? '\u{1F525}' : '\u{1F9CA}';
        home.curStatusLength = Math.floor(Math.random() * 3) + 1;
      } else if (home.status !== '' && home.curStatusLength) {
        home.curStatusLength--;
      }
    }

    if (home.curStatusLength === 0) {
      home.status = '';
    }

    const awayType: Teams | void = getTeamInfo(game.away);
    if (awayType !== undefined) {
      away = awayType;
      if (Math.random() < 0.4 && away.status === '') {
        away.status = Math.random() < 0.5 ? '\u{1F525}' : '\u{1F9CA}';
        away.curStatusLength = Math.floor(Math.random() * 3) + 1;
      } else if (away.status !== '' && away.curStatusLength) {
        away.curStatusLength--;
      }
    }

    if (away.curStatusLength === 0) {
      away.status = '';
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
      if (Math.random() < 0.5) {
        if (hGoals < aGoals) {
          aGoals = hGoals;
        } else {
          hGoals = aGoals;
        }
      }
    }

    // OT or S/O
    let overtime: string = '';
    if (hGoals === aGoals) {
      if (Math.random() > 0.5) {
        hGoals += 1;
      } else {
        aGoals += 1;
      }
      if (Math.random() > 0.5) {
        overtime = 'OT';
      } else {
        overtime = 'SO';
      }
    }

    // Points
    if (hGoals > aGoals) {
      home.points += 2;
      home.wins += 1;
      home.chartLabels?.push(
        home.status +
          away.abbreviation +
          ' W ' +
          hGoals +
          ' - ' +
          aGoals +
          ' ' +
          overtime
      );
      away.chartLabels?.push(
        away.status +
          home.abbreviation +
          ' L ' +
          aGoals +
          ' - ' +
          hGoals +
          ' ' +
          overtime
      );

      if (overtime === 'SO' || overtime === 'OT') {
        away.loses_ot += 1;
        away.points += 1;
      } else {
        away.loses += 1;
        away.points += 0;
      }
    } else {
      away.points += 2;
      away.wins += 1;
      away.chartLabels?.push(
        away.status +
          home.abbreviation +
          ' W ' +
          aGoals +
          ' - ' +
          hGoals +
          ' ' +
          overtime
      );
      home.chartLabels?.push(
        home.status +
          away.abbreviation +
          ' L ' +
          hGoals +
          ' - ' +
          aGoals +
          ' ' +
          overtime
      );
      if (overtime === 'SO' || overtime === 'OT') {
        home.loses_ot += 1;
        home.points += 1;
      } else {
        home.loses += 1;
        home.points += 0;
      }
    }

    // Goals & Games Stats
    home.goals_for += hGoals;
    home.goals_against += aGoals;
    home.game_counter += 1;
    home.goals_diff += hGoals - aGoals;
    home.points_percentage = home.points / (home.game_counter * 2);
    away.goals_for += aGoals;
    away.goals_against += hGoals;
    away.game_counter += 1;
    away.goals_diff += aGoals - hGoals;
    away.points_percentage = away.points / (away.game_counter * 2);

    let result: GameResult = {
      home: home.abbreviation,
      away: away.abbreviation,
      homeGoals: hGoals,
      awayGoals: aGoals,
      overtime: overtime,
    };
    let sortedTeams: Teams[] = teamsSort(teams);
    if (gameCounter + 1 === scheduleList.length) {
      if (
        leagueId === '1' ||
        leagueId === '2' ||
        leagueId === '3' ||
        leagueId === '4'
      ) {
        // TO DO: Fix clinched teams with two conferences
      } else {
        sortedTeams.forEach((team, i) => {
          team.isPlayOff = i < playOffTeam;
          return team;
        });
      }
      sortedTeams.forEach((team, i) => {
        team.chartData?.push(i + 1);
        team.chartLabels?.push('Play-Off');
        return team;
      });
    } else {
      if (leagueId === '1' || leagueId === '2') {
        // TO DO: Fix clinched teams in W1 & W2
        // const c1: Teams[] = getClinchedTeams(
        //   sortedTeams.filter((team) => team.conferenceId === '1'),
        //   playOffTeam / 2
        // );
        // const c2: Teams[] = getClinchedTeams(
        //   sortedTeams.filter((team) => team.conferenceId === '2'),
        //   playOffTeam / 2
        // );
        // localStorage.setItem('teamsList', JSON.stringify([...c1, ...c2]));
      } else if (leagueId === '3' || leagueId === '4') {
        // TO DO: Fix clinched teams in NHL & EHL
      } else {
        // TO DO: Fix clinched teams
        // localStorage.setItem(
        //   'teamsList',
        //   JSON.stringify(getClinchedTeams(sortedTeams, playOffTeam))
        // );
      }
    }
    home.chartData?.push(sortedTeams.indexOf(home) + 1);
    away.chartData?.push(sortedTeams.indexOf(away) + 1);

    setTeamsUpdate(sortedTeams);
    setIsSimulate(true);
    localStorage.setItem('teamsList', JSON.stringify(sortedTeams));
    localStorage.setItem(
      'gameIndex',
      JSON.stringify(scheduleList.indexOf(game) + 1)
    );
    return result;
  }

  function teamsSort(teams: Teams[]): Teams[] {
    return teams.sort((team1, team2) => {
      const comparisons = [
        team2.points - team1.points,
        team1.game_counter - team2.game_counter,
        team2.wins - team1.wins,
        team2.loses_ot - team1.loses_ot,
        team2.goals_diff - team1.goals_diff,
      ];

      for (const comparison of comparisons) {
        if (comparison !== 0) return comparison;
      }
      return 0;
    });
  }

  function getTeamRating(team: string): number {
    return (
      teams.findIndex(
        (element: { abbreviation: string }) => element.abbreviation === team
      ) + 1
    );
  }

  function getPlayOffTeams(): void {
    if (leagueId === '3' || leagueId === '4') {
      const d1: Teams[] = teamsUpdate
        .filter((team) => team.divisionId === '1')
        .slice(0, 3);
      d1.forEach((team) => (team.isPlayOff = true));
      const d2: Teams[] = teamsUpdate
        .filter((team) => team.divisionId === '2')
        .slice(0, 3);
      d2.forEach((team) => (team.isPlayOff = true));
      const wc1: Teams[] = teamsSort(
        teamsUpdate
          .filter((team) => team.divisionId === '1')
          .slice(3, 5)
          .concat(
            teamsUpdate.filter((team) => team.divisionId === '2').slice(3, 5)
          )
      ).slice(0, 2);
      wc1.forEach((team) => (team.isPlayOff = true));
      const d3: Teams[] = teamsUpdate
        .filter((team) => team.divisionId === '3')
        .slice(0, 3);
      d3.forEach((team) => (team.isPlayOff = true));
      const d4: Teams[] = teamsUpdate
        .filter((team) => team.divisionId === '4')
        .slice(0, 3);
      d4.forEach((team) => (team.isPlayOff = true));
      const wc2: Teams[] = teamsSort(
        teamsUpdate
          .filter((team) => team.divisionId === '3')
          .slice(3, 5)
          .concat(
            teamsUpdate.filter((team) => team.divisionId === '4').slice(3, 5)
          )
      ).slice(0, 2);
      wc2.forEach((team) => (team.isPlayOff = true));
      localStorage.setItem(
        'teamsList',
        JSON.stringify(teamsSort([...d1, ...d2, ...d3, ...d4, ...wc1, ...wc2]))
      );
    } else if (leagueId === '1' || leagueId === '2') {
      const c1: Teams[] = teamsSort(
        teamsUpdate.filter((team) => team.conferenceId === '1')
      ).slice(0, 4);
      c1.forEach((team) => (team.isPlayOff = true));
      const c2: Teams[] = teamsSort(
        teamsUpdate.filter((team) => team.conferenceId === '2')
      ).slice(0, 4);
      c2.forEach((team) => (team.isPlayOff = true));
      localStorage.setItem(
        'teamsList',
        JSON.stringify(teamsSort([...c1, ...c2]))
      );
    } else {
      teamsUpdate.forEach((team, index) => {
        team.isPlayOff = index < playOffTeam;
      });

      localStorage.setItem('teamsList', JSON.stringify(teamsSort(teamsUpdate)));
    }
  }

  function getClinchedTeams(
    teamsList: Teams[],
    playoffAmount: number
  ): Teams[] {
    // The problem is calculating max availiable points of each team, now we are calculating only not in playoff teams
    const map: number = leagueId === '1' || leagueId === '2' ? 1 : 2;
    const estimatedTeams = [...teamsList.slice(playoffAmount)].sort((a, b) => {
      const maxGames = (teams.length - 1) * map;
      const aScore = (maxGames - a.game_counter) * 2 + a.points;
      const bScore = (maxGames - b.game_counter) * 2 + b.points;
      return bScore - aScore;
    });

    const waterline = estimatedTeams[0];
    const maxGamesLeft = (teams.length - 1) * map - waterline.game_counter;
    const waterlinePoints = waterline.points + maxGamesLeft * 2;

    teamsList.forEach((team, index) => {
      team.isPlayOff = index < playoffAmount && team.points > waterlinePoints;
    });

    return teamsList;
  }

  if (scheduleList && gameCounter < scheduleList.length) {
    const away: Teams = teams.find(
      (element: { abbreviation: string }) =>
        element.abbreviation === scheduleList[gameCounter].away
    );
    const home: Teams = teams.find(
      (element: { abbreviation: string }) =>
        element.abbreviation === scheduleList[gameCounter].home
    );
    const homeRating: number = getTeamRating(scheduleList[gameCounter].home);
    const awayRating: number = getTeamRating(scheduleList[gameCounter].away);
    return (
      <>
        <Header id={leagueId} />
        <Row className='layout'>
          <Col className='layout__content' span={14}>
            {(leagueId === '3' || leagueId === '4') &&
            League?.divisions &&
            League.conferences ? (
              <>
                <Title
                  level={3}
                  className='standings__title standings__title--level-3'
                >
                  {League.conferences[0].name}
                </Title>
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  {League.divisions[0].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter((team) => team.divisionId === '1')
                    .slice(0, 3)}
                  id={leagueId}
                />
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  {League.divisions[1].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter((team) => team.divisionId === '2')
                    .slice(0, 3)}
                  id={leagueId}
                />
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  Wild Card
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter(
                      (team) =>
                        team.divisionId === '1' || team.divisionId === '2'
                    )
                    .reduce<Teams[][]>(
                      (acc, team) => {
                        if (team.divisionId === '1') {
                          acc[0].push(team);
                        } else {
                          acc[1].push(team);
                        }
                        return acc;
                      },
                      [[], []]
                    )
                    .map((arr) => arr.slice(3))
                    .flat()}
                  id={leagueId}
                />
                <Title
                  level={3}
                  className='standings__title standings__title--level-3'
                >
                  {League.conferences[1].name}
                </Title>
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  {League.divisions[2].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter((team) => team.divisionId === '3')
                    .slice(0, 3)}
                  id={leagueId}
                />
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  {League.divisions[3].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter((team) => team.divisionId === '4')
                    .slice(0, 3)}
                  id={leagueId}
                />
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  Wild Card
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter(
                      (team) =>
                        team.divisionId === '3' || team.divisionId === '4'
                    )
                    .reduce<Teams[][]>(
                      (acc, team) => {
                        if (team.divisionId === '3') {
                          acc[0].push(team);
                        } else {
                          acc[1].push(team);
                        }
                        return acc;
                      },
                      [[], []]
                    )
                    .map((arr) => arr.slice(3))
                    .flat()}
                  id={leagueId}
                />
                <Legend />
              </>
            ) : (leagueId === '1' || leagueId === '2') &&
              League?.conferences ? (
              <>
                <Title
                  level={3}
                  className='standings__title standings__title--level-3'
                >
                  {League.conferences[0].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate.filter(
                    (team) => team.conferenceId === '1'
                  )}
                  id={leagueId}
                />
                <Title
                  level={3}
                  className='standings__title standings__title--level-3'
                >
                  {League.conferences[1].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate.filter(
                    (team) => team.conferenceId === '2'
                  )}
                  id={leagueId}
                />
                <Legend />
              </>
            ) : (
              <>
                <Sheet teamsData={teamsUpdate} id={leagueId} />
                <Legend />
              </>
            )}
          </Col>
          <Col className='layout__side-panel' span={10}>
            <Row>
              <Card className='controls-panel__counter'>
                <Col span={24}>
                  <Title level={3}>
                    Games Left: {scheduleList.length - gameCounter}
                  </Title>
                </Col>
              </Card>
            </Row>
            <Row className='cards-row'>
              <Col className='cards-row__card-column slide-in-left' span={12}>
                <Link to={`/hockey-league-simulator/season/team/${away.id}`}>
                  <Card
                    className='card card--hoverable'
                    hoverable
                    cover={
                      <img
                        alt={away.name + 'Logo'}
                        src={away.logo}
                        loading='lazy'
                      />
                    }
                    style={{
                      backgroundColor: away.color,
                    }}
                  >
                    <Title
                      className='card__title'
                      level={4}
                      style={{
                        color:
                          away.color && whiteTeams.includes(away.color)
                            ? '#ffffff'
                            : 'initial',
                      }}
                    >
                      {away.abbreviation}
                    </Title>
                    <Title
                      level={5}
                      className='card__info card__info--position-away'
                      style={{
                        color:
                          away.color && whiteTeams.includes(away.color)
                            ? '#ffffff'
                            : 'initial',
                        opacity:
                          away.color && whiteTeams.includes(away.color)
                            ? '1'
                            : '0.45',
                      }}
                    >
                      {awayRating === 1
                        ? awayRating + 'st'
                        : awayRating === 2
                        ? awayRating + 'nd'
                        : awayRating === 3
                        ? awayRating + 'rd'
                        : awayRating + 'th'}
                    </Title>
                    <Title
                      level={5}
                      className='card__info card__info--status-away'
                    >
                      {away.status !== '' ? away.status : ''}
                    </Title>
                    <Title
                      level={5}
                      className='card__info card__info--result-away'
                      style={{
                        color:
                          away.color && whiteTeams.includes(away.color)
                            ? '#ffffff'
                            : 'initial',
                        opacity:
                          away.color && whiteTeams.includes(away.color)
                            ? '1'
                            : '0.45',
                      }}
                    >
                      {away.wins}-{away.loses}-{away.loses_ot}
                    </Title>
                  </Card>
                </Link>
              </Col>
              <Col className='cards-row__card-column' span={12}>
                <Link to={`/hockey-league-simulator/season/team/${home.id}`}>
                  <Card
                    className='card card--hoverable'
                    hoverable
                    cover={
                      <img
                        alt={home.name + 'Logo'}
                        src={home.logo}
                        loading='lazy'
                      />
                    }
                    style={{
                      backgroundColor: home.color,
                    }}
                  >
                    <Title
                      className='card__title'
                      level={4}
                      style={{
                        color:
                          home.color && whiteTeams.includes(home.color)
                            ? '#ffffff'
                            : 'initial',
                      }}
                    >
                      {home.abbreviation}
                    </Title>
                    <Title
                      level={5}
                      className='card__info card__info--position-home'
                      style={{
                        color:
                          home.color && whiteTeams.includes(home.color)
                            ? '#ffffff'
                            : 'initial',
                        opacity:
                          home.color && whiteTeams.includes(home.color)
                            ? '1'
                            : '0.45',
                      }}
                    >
                      {homeRating === 1
                        ? homeRating + 'st'
                        : homeRating === 2
                        ? homeRating + 'nd'
                        : homeRating === 3
                        ? homeRating + 'rd'
                        : homeRating + 'th'}
                    </Title>
                    <Title
                      level={5}
                      className='card__info card__info--status-home'
                    >
                      {home.status !== '' ? home.status : ''}
                    </Title>
                    <Title
                      level={5}
                      className='card__info card__info--result-home'
                      style={{
                        color:
                          home.color && whiteTeams.includes(home.color)
                            ? '#ffffff'
                            : 'initial',
                        opacity:
                          home.color && whiteTeams.includes(home.color)
                            ? '1'
                            : '0.45',
                      }}
                    >
                      {home.wins}-{home.loses}-{home.loses_ot}
                    </Title>
                  </Card>
                </Link>
              </Col>
            </Row>
            <Row className='simulate-panel'>
              <Col span={24} className='simulate-panel__card'>
                <Card hoverable>
                  <Title
                    className='simulate-panel__score slide-in-left'
                    level={2}
                  >
                    {isSimulate ? awayGoals : ' '} -{' '}
                    {isSimulate ? homeGoals : ' '}
                    {isSimulate ? ' ' + typeOfOt : ''}
                  </Title>
                </Card>
              </Col>
            </Row>
            <Row className='controls-panel'>
              <Col span={24} className='controls-panel__buttons'>
                <Button
                  className='controls-panel__button controls-panel__button--simulate pulse'
                  onClick={buttonHandler}
                  disabled={isSimulate}
                  size='large'
                >
                  Simulate
                </Button>
                <Button
                  className='controls-panel__button controls-panel__button--next'
                  onClick={updateCounter}
                  disabled={!isSimulate}
                  size='large'
                >
                  Next Game
                </Button>
              </Col>
            </Row>
            {scheduleList.slice(gameCounter + 1).length > 0 ? (
              <Row className='upcoming-games slide-in-left'>
                <Title className='upcoming-games__title' level={2}>
                  Upcoming Games
                </Title>
                <UpcomingGame
                  schedule={scheduleList.slice(
                    gameCounter + 1,
                    gameCounter + 7
                  )}
                  teams={teams}
                />
              </Row>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </>
    );
  } else {
    return (
      <div className='playoff'>
        <Header id={leagueId} />
        <Row className='playoff__container'>
          <Col span={14} className='playoff__container-panel'>
            {(leagueId === '3' || leagueId === '4') &&
            League?.divisions &&
            League.conferences ? (
              <>
                <Title
                  level={3}
                  className='standings__title standings__title--level-3'
                >
                  {League.conferences[0].name}
                </Title>
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  {League.divisions[0].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter((team) => team.divisionId === '1')
                    .slice(0, 3)}
                  id={leagueId}
                />
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  {League.divisions[1].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter((team) => team.divisionId === '2')
                    .slice(0, 3)}
                  id={leagueId}
                />
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  Wild Card
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter(
                      (team) =>
                        team.divisionId === '1' || team.divisionId === '2'
                    )
                    .reduce<Teams[][]>(
                      (acc, team) => {
                        if (team.divisionId === '1') {
                          acc[0].push(team);
                        } else {
                          acc[1].push(team);
                        }
                        return acc;
                      },
                      [[], []]
                    )
                    .map((arr) => arr.slice(3))
                    .flat()}
                  id={leagueId}
                />
                <Title
                  level={3}
                  className='standings__title standings__title--level-3'
                >
                  {League.conferences[1].name}
                </Title>
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  {League.divisions[2].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter((team) => team.divisionId === '3')
                    .slice(0, 3)}
                  id={leagueId}
                />
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  {League.divisions[3].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter((team) => team.divisionId === '4')
                    .slice(0, 3)}
                  id={leagueId}
                />
                <Title
                  level={5}
                  className='standings__title standings__title--level-5'
                >
                  Wild Card
                </Title>
                <Sheet
                  teamsData={teamsUpdate
                    .filter(
                      (team) =>
                        team.divisionId === '3' || team.divisionId === '4'
                    )
                    .reduce<Teams[][]>(
                      (acc, team) => {
                        if (team.divisionId === '3') {
                          acc[0].push(team);
                        } else {
                          acc[1].push(team);
                        }
                        return acc;
                      },
                      [[], []]
                    )
                    .map((arr) => arr.slice(3))
                    .flat()}
                  id={leagueId}
                />
                <Legend />
              </>
            ) : (leagueId === '1' || leagueId === '2') &&
              League?.conferences ? (
              <>
                <Title
                  level={3}
                  className='standings__title standings__title--level-3'
                >
                  {League.conferences[0].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate.filter(
                    (team) => team.conferenceId === '1'
                  )}
                  id={leagueId}
                />
                <Title
                  level={3}
                  className='standings__title standings__title--level-3'
                >
                  {League.conferences[1].name}
                </Title>
                <Sheet
                  teamsData={teamsUpdate.filter(
                    (team) => team.conferenceId === '2'
                  )}
                  id={leagueId}
                />
                <Legend />
              </>
            ) : (
              <>
                <Sheet teamsData={teamsUpdate} id={leagueId} />
                <Legend />
              </>
            )}
          </Col>
          <Col span={10}>
            <Link to='playoff'>
              <Button
                className='playoff__start-play-off'
                size='large'
                onClick={() => {
                  getPlayOffTeams();
                }}
              >
                Start Play-Off
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Game;

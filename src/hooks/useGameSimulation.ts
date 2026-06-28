import { useState, useEffect } from 'react';
import { GameResult, Schedule, Teams } from '../data/types';

export function useGameSimulation() {
  const teams: Teams[] = JSON.parse(localStorage.getItem('teamsList') || '[]');
  const leagueId: string = JSON.parse(localStorage.getItem('leagueId') || '');
  const scheduleList: Schedule[] = JSON.parse(
    localStorage.getItem('scheduleList') || '[]'
  );

  const [teamsUpdate, setTeamsUpdate] = useState<Teams[]>(teams || {});
  const [gameCounter, setGameCounter] = useState<number>(
    JSON.parse(localStorage.getItem('gameIndex') || '0')
  );
  const [homeGoals, setHomeGoals] = useState<number>(0);
  const [awayGoals, setAwayGoals] = useState<number>(0);
  const [typeOfOt, setTypeOfOt] = useState<string>('');
  const [isSimulate, setIsSimulate] = useState<boolean>(false);

  const playOffTeam: number =
    teamsUpdate.length > 16
      ? 16
      : teamsUpdate.length > 8
        ? 8
        : teamsUpdate.length > 4
          ? 4
          : 2;

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
      play_off_round_results: [],
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
      play_off_round_results: [],
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
    function getGoals(min: number, max: number, rating: number) {
      return Math.round(
        ((Math.floor(Math.random() * (max - min + 1)) + min) * rating) / 100
      );
    }

    function getTeamInfo(team: string): Teams {
      const foundTeam = teams.find(
        (element: { id: string }) => element.id === team
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
        home.cur_status_length = Math.floor(Math.random() * 3) + 1;
      } else if (home.status !== '' && home.cur_status_length) {
        home.cur_status_length--;
      }
    }

    if (home.cur_status_length === 0) {
      home.status = '';
    }

    const awayType: Teams | void = getTeamInfo(game.away);
    if (awayType !== undefined) {
      away = awayType;
      if (Math.random() < 0.4 && away.status === '') {
        away.status = Math.random() < 0.5 ? '\u{1F525}' : '\u{1F9CA}';
        away.cur_status_length = Math.floor(Math.random() * 3) + 1;
      } else if (away.status !== '' && away.cur_status_length) {
        away.cur_status_length--;
      }
    }

    if (away.cur_status_length === 0) {
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
      home_goals: hGoals,
      away_goals: aGoals,
      overtime: overtime,
      id: game.id,
      home_status: home.status,
      away_status: away.status,
    };
    let sortedTeams: Teams[] = teamsSort(teams);
    if (gameCounter + 1 === scheduleList.length) {
      if (
        leagueId === '1' ||
        leagueId === '2' ||
        leagueId === '3' ||
        leagueId === '4' ||
        leagueId === '11'
      ) {
        // TO DO: Fix clinched teams with two conferences
      } else {
        sortedTeams.forEach((team, i) => {
          team.is_playoff = i < playOffTeam;
          return team;
        });
      }
      // sortedTeams.forEach((team, i) => {
      //   team.chart_data?.push(i + 1);
      //   team.game_results?.push('Play-Off');
      //   return team;
      // });
    } else {
      if (leagueId === '1' || leagueId === '2' || leagueId === '11') {
        // TO DO: Fix clinched teams in W1 & W2
        // const c1: Teams[] = getClinchedTeams(
        //   sortedTeams.filter((team) => team.conference_id === '1'),
        //   playOffTeam / 2
        // );
        // const c2: Teams[] = getClinchedTeams(
        //   sortedTeams.filter((team) => team.conference_id === '2'),
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

    home.chart_data?.push(sortedTeams.indexOf(home) + 1);
    away.chart_data?.push(sortedTeams.indexOf(away) + 1);
    home.game_results?.push({
      id: game.id,
      home: game.home,
      away: game.away,
      home_goals: hGoals,
      away_goals: aGoals,
      overtime: overtime,
      home_status: home.status,
      away_status: away.status,
    });
    away.game_results?.push({
      id: game.id,
      home: game.home,
      away: game.away,
      home_goals: hGoals,
      away_goals: aGoals,
      overtime: overtime,
      home_status: home.status,
      away_status: away.status,
    });

    setTeamsUpdate(sortedTeams);
    setIsSimulate(true);
    localStorage.setItem('teamsList', JSON.stringify(sortedTeams));
    localStorage.setItem(
      'gameIndex',
      JSON.stringify(scheduleList.indexOf(game) + 1)
    );
    return result;
  }

  function getPlayOffTeams(): void {
    if (leagueId === '3' || leagueId === '4') {
      const d1: Teams[] = teamsUpdate
        .filter((team) => team.division_id === '1')
        .slice(0, 3);
      d1.forEach((team) => (team.is_playoff = true));
      const d2: Teams[] = teamsUpdate
        .filter((team) => team.division_id === '2')
        .slice(0, 3);
      d2.forEach((team) => (team.is_playoff = true));
      const wc1: Teams[] = teamsSort(
        teamsUpdate
          .filter((team) => team.division_id === '1')
          .slice(3, 5)
          .concat(
            teamsUpdate.filter((team) => team.division_id === '2').slice(3, 5)
          )
      ).slice(0, 2);
      wc1.forEach((team) => (team.is_playoff = true));
      const d3: Teams[] = teamsUpdate
        .filter((team) => team.division_id === '3')
        .slice(0, 3);
      d3.forEach((team) => (team.is_playoff = true));
      const d4: Teams[] = teamsUpdate
        .filter((team) => team.division_id === '4')
        .slice(0, 3);
      d4.forEach((team) => (team.is_playoff = true));
      const wc2: Teams[] = teamsSort(
        teamsUpdate
          .filter((team) => team.division_id === '3')
          .slice(3, 5)
          .concat(
            teamsUpdate.filter((team) => team.division_id === '4').slice(3, 5)
          )
      ).slice(0, 2);
      wc2.forEach((team) => (team.is_playoff = true));
      localStorage.setItem(
        'playoffList',
        JSON.stringify(teamsSort([...d1, ...d2, ...d3, ...d4, ...wc1, ...wc2]))
      );
    } else if (leagueId === '1' || leagueId === '2' || leagueId === '11') {
      const c1: Teams[] = teamsSort(
        teamsUpdate.filter((team) => team.conference_id === '1')
      ).slice(0, 4);
      c1.forEach((team) => (team.is_playoff = true));
      const c2: Teams[] = teamsSort(
        teamsUpdate.filter((team) => team.conference_id === '2')
      ).slice(0, 4);
      c2.forEach((team) => (team.is_playoff = true));
      localStorage.setItem(
        'playoffList',
        JSON.stringify(teamsSort([...c1, ...c2]))
      );
    } else {
      teamsUpdate.forEach((team, index) => {
        team.is_playoff = index < playOffTeam;
      });

      localStorage.setItem(
        'playoffList',
        JSON.stringify(
          teamsSort(teamsUpdate.filter((team) => team.is_playoff === true))
        )
      );
    }
  }

  // function getClinchedTeams(
  //   teamsList: Teams[],
  //   playoffAmount: number
  // ): Teams[] {
  //   // The problem is calculating max availiable points of each team, now we are calculating only not in playoff teams
  //   const map: number = leagueId === '1' || leagueId === '2' ? 1 : 2;
  //   const estimatedTeams = [...teamsList.slice(playoffAmount)].sort((a, b) => {
  //     const maxGames = (teams.length - 1) * map;
  //     const aScore = (maxGames - a.game_counter) * 2 + a.points;
  //     const bScore = (maxGames - b.game_counter) * 2 + b.points;
  //     return bScore - aScore;
  //   });

  //   const waterline = estimatedTeams[0];
  //   const maxGamesLeft = (teams.length - 1) * map - waterline.game_counter;
  //   const waterlinePoints = waterline.points + maxGamesLeft * 2;

  //   teamsList.forEach((team, index) => {
  //     team.is_playoff = index < playoffAmount && team.points > waterlinePoints;
  //   });

  //   return teamsList;
  // }

  function isFavoriteGame(game: Schedule): boolean {
    if (!game) return false;
    const favorites: string[] = JSON.parse(
      localStorage.getItem('favoriteTeams') || '[]'
    );
    return favorites.includes(game.home) || favorites.includes(game.away);
  }

  const updateCounter = () => {
    setGameCounter(gameCounter + 1);
    setIsSimulate(false);
  };

  const buttonHandler = () => {
    const lastGame: GameResult = simulate(scheduleList[gameCounter]);

    if (lastGame) {
      setHomeGoals(lastGame.home_goals);
      setAwayGoals(lastGame.away_goals);
      setTypeOfOt(lastGame.overtime);
    }
  };

  useEffect(() => {
    if (
      gameCounter < scheduleList.length &&
      !isFavoriteGame(scheduleList[gameCounter])
    ) {
      const interval = setInterval(() => {
        const lastGame: GameResult = simulate(scheduleList[gameCounter]);
        if (lastGame) {
          setHomeGoals(lastGame.home_goals);
          setAwayGoals(lastGame.away_goals);
          setTypeOfOt(lastGame.overtime);
          setIsSimulate(true);

          setTimeout(() => {
            setGameCounter((prev) => prev + 1);
            setIsSimulate(false);
          }, 50);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [gameCounter, scheduleList]);

  return {
    teams,
    teamsUpdate,
    leagueId,
    scheduleList,
    gameCounter,
    homeGoals,
    awayGoals,
    typeOfOt,
    isSimulate,
    isFavoriteGame,
    buttonHandler,
    updateCounter,
    getPlayOffTeams,
  };
}

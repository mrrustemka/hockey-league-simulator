import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GameResult, Teams } from "../../data/types";
import PlayOffGame from "./PlayOffGame";

function Pair({ teams, handlerIsRoundEnd, status }: any) {
  const [games, setGames] = useState([
    {
      id: uuidv4(),
      home: teams[0].abbreviation,
      away: teams[1].abbreviation,
      winner: ""
    },
    {
      id: uuidv4(),
      home: teams[0].abbreviation,
      away: teams[1].abbreviation,
      winner: ""
    },
    {
      id: uuidv4(),
      home: teams[1].abbreviation,
      away: teams[0].abbreviation,
      winner: ""
    },
    {
      id: uuidv4(),
      home: teams[1].abbreviation,
      away: teams[0].abbreviation,
      winner: ""
    }
  ]);
  let [curGame, setCurGame] = useState<number>(0);
  const [curResult, setCurResult] = useState<any>(null);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  // console.log(status);

  function addGame() {
    const team0Wins = teams[0].play_off_round_wins;
    const team1Wins = teams[1].play_off_round_wins;
    const maxWins = 4;
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
              winner: ""
            }
          : {
              id: uuidv4(),
              home: teams[0].abbreviation,
              away: teams[1].abbreviation,
              winner: ""
            }
      ];
      setGames(newGame);
    }

    if (team0Wins === maxWins || team1Wins === maxWins) {
      console.log(teams[0].abbreviation, team0Wins);
      console.log(teams[1].abbreviation, team1Wins);
      handlerIsRoundEnd();
    }
  }

  function simulate(game: any) {
    // setCurGame(scheduleList.indexOf(game) + 1);
    let home: Teams = {
      abbreviation: "",
      city: "",
      country: "",
      game_counter: 0,
      goals_against: 0,
      goals_diff: 0,
      goals_for: 0,
      id: 0,
      logo: "",
      loses: 0,
      loses_ot: 0,
      name: "",
      points: 0,
      rating: 0,
      wins: 0,
      play_off_rank: 0,
      play_off_round_wins: 0
    };
    let away: Teams = {
      abbreviation: "",
      city: "",
      country: "",
      game_counter: 0,
      goals_against: 0,
      goals_diff: 0,
      goals_for: 0,
      id: 0,
      logo: "",
      loses: 0,
      loses_ot: 0,
      name: "",
      points: 0,
      rating: 0,
      wins: 0,
      play_off_rank: 0,
      play_off_round_wins: 0
    };
    function getTeamInfo(team: string): any {
      return teams.find(
        (element: { abbreviation: string }) => element.abbreviation === team
      );
    }
    function getGoals(min: number, max: number, rating: number) {
      return Math.round(
        ((Math.floor(Math.random() * (max - min + 1)) + min) * rating) / 100
      );
    }

    const homeType: Teams | undefined = getTeamInfo(game.home);
    if (homeType !== undefined) {
      home = homeType;
    }

    const awayType: Teams | undefined = getTeamInfo(game.away);
    if (awayType !== undefined) {
      away = awayType;
    }

    //Goals
    let hGoals: number = getGoals(0, 9, home.rating);
    let aGoals: number = getGoals(0, 9, away.rating);

    // Make more realistic game score

    if (hGoals - aGoals >= 4 || aGoals - hGoals >= 4) {
      if (Math.random() < 0.9) {
        aGoals += 1;
      }
    }

    // OT or S/O
    let overtime: string = "";
    if (hGoals === aGoals) {
      if (Math.random() > 0.5) {
        hGoals += 1;
        // away.points += 1;
      } else {
        aGoals += 1;
        // home.points += 1;
      }
      overtime = "OT";
    }

    // Points
    if (hGoals > aGoals) {
      home.play_off_round_wins += 1;
    } else {
      away.play_off_round_wins += 1;
    }

    // Goals & Games Stats
    // home.goals_for += hGoals;
    // home.goals_against += aGoals;
    // home.game_counter += 1;
    // home.goals_diff += hGoals - aGoals;
    // away.goals_for += aGoals;
    // away.goals_against += hGoals;
    // away.game_counter += 1;
    // away.goals_diff += aGoals - hGoals;

    // let result: GameResult = {
    //   home: home.abbreviation,
    //   away: away.abbreviation,
    //   homeGoals: hGoals,
    //   awayGoals: aGoals,
    //   overtime: overtime
    // };
    setCurGame(curGame++);
    setCurResult({
      home: home.abbreviation,
      away: away.abbreviation,
      homeGoals: hGoals,
      awayGoals: aGoals,
      overtime: overtime
    });

    addGame();
    // setIsSimulated(!isSimulated);
    console.log(
      home.abbreviation,
      away.abbreviation,
      home.play_off_round_wins,
      away.play_off_round_wins
    );
    // setTeamsUpdate(teamsSort(teams));
    // setIsSimulate(true);
    // return result;
  }

  // if (
  //   teams.find(
  //     (team: { play_off_round_wins: number }) => team.play_off_round_wins === 4
  //   )
  // ) {
  //   setIsFinished(!isFinished);
  // }

  return (
    <div>
      {teams[0].abbreviation} - {teams[1].abbreviation}
      <button
        onClick={() => simulate(games[curGame])}
        disabled={isFinished || !status}
        // style={{ display: isSimulated || !status ? "none" : "inline-block" }}
      >
        Simulate
      </button>
      <div>
        {teams[0].play_off_round_wins} {teams[1].play_off_round_wins}
      </div>
      {games.map((game, index) => (
        <PlayOffGame
          game={game}
          key={game.id}
          // updateGames={addGame}
          index={index}
          result={curResult}
          // status={status}
        />
      ))}
    </div>
  );
}

export default Pair;

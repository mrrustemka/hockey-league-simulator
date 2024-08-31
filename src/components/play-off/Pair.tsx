import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GameResult, Teams } from "../../data/types";

function Pair({ teams }: any) {
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

  function simulate(game: any) {
    // setGameIndex(scheduleList.indexOf(game) + 1);
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
    console.log(teams);
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

    let result: GameResult = {
      home: home.abbreviation,
      away: away.abbreviation,
      homeGoals: hGoals,
      awayGoals: aGoals,
      overtime: overtime
    };
    console.log(result);
    // setTeamsUpdate(teamsSort(teams));
    // setIsSimulate(true);
    return result;
  }

  return (
    <div>
      {teams[0].abbreviation} - {teams[1].abbreviation}
      {games.map((game) => (
        <div>
          <button onClick={() => simulate(game)}>Simulate</button>
        </div>
      ))}
    </div>
  );
}

export default Pair;

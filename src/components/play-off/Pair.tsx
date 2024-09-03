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

  function addGame() {
    const team0Wins = teams[0].play_off_round_wins;
    const team1Wins = teams[1].play_off_round_wins;
    const maxWins = 4;
    const totalGames = games.length;

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

  return (
    <div>
      {teams[0].abbreviation} - {teams[1].abbreviation}
      {games.map((game, index) => (
        <PlayOffGame
          game={game}
          key={game.id}
          updateGames={addGame}
          index={index}
          status={status}
        />
      ))}
    </div>
  );
}

export default Pair;

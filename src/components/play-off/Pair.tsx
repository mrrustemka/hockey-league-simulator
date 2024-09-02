import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GameResult, Teams } from "../../data/types";
import PlayOffGame from "./PlayOffGame";

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

  function addGame() {
    if (
      (teams[0].play_off_round_wins < teams[1].play_off_round_wins &&
        teams[0].play_off_round_wins !== 0 &&
        teams[1].play_off_round_wins !== 4 &&
        teams[0].play_off_round_wins + 4 !== games.length) ||
      (teams[1].play_off_round_wins < teams[0].play_off_round_wins &&
        teams[1].play_off_round_wins !== 0 &&
        teams[0].play_off_round_wins !== 4 &&
        teams[1].play_off_round_wins + 4 !== games.length) ||
      teams[0].play_off_round_wins === teams[1].play_off_round_wins
    ) {
      const newGame: any = [
        ...games,
        {
          id: uuidv4(),
          home: teams[0].abbreviation,
          away: teams[1].abbreviation,
          winner: ""
        }
      ];
      setGames(newGame);
    }
    console.log(teams[0].abbreviation, teams[0].play_off_round_wins);
    console.log(teams[1].abbreviation, teams[1].play_off_round_wins);
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
        />
      ))}
    </div>
  );
}

export default Pair;

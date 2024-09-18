import { PlayOffGameResult, GameResult } from "../../data/types";

interface PlayOffGame {
  game: PlayOffGameResult;
  index: number;
  result: GameResult | undefined;
}

function PlayOffGame({ game, index, result }: PlayOffGame) {
  return (
    <div className="game-result pair__game">
      <span className="game-result__index">{index + 1}.</span>
      <span className="game-result__teams">
        {game.home} - {game.away}
      </span>
      <span className="game-result__score">
        {result?.homeGoals} {" - "} {result?.awayGoals}
      </span>
    </div>
  );
}

export default PlayOffGame;

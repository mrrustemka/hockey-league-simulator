import { PlayOffGameResult, GameResult } from '../../data/types';
import '../../Styles/PlayOffGame.css';

interface IPlayOffGame {
  game: PlayOffGameResult;
  index: number;
  result: GameResult | undefined;
}

function PlayOffGame({ game, index, result }: IPlayOffGame) {
  return (
    <div className='game-result pair__game'>
      <span className='game-result__index'>{index + 1}.</span>
      <span className='game-result__teams'>
        {game.home} - {game.away}
      </span>
      <span className='game-result__score'>
        {result?.home_goals} {' - '} {result?.away_goals} {result?.overtime}
      </span>
    </div>
  );
}

export default PlayOffGame;

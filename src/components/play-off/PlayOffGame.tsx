function PlayOffGame({ game, index, result }: any) {
  return (
    <div className="game-result">
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

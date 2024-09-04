function PlayOffGame({ game, index, result }: any) {
  return (
    <div>
      {index + 1}. {game.home} - {game.away} {result?.homeGoals} {" - "}
      {result?.awayGoals}
    </div>
  );
}

export default PlayOffGame;

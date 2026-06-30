import '../../styles/GpCell.css';

interface GpCellProps {
  gameCounter: number;
  totalTeams: number;
  isWorldChamp: boolean;
}

// Renders the games-played cell with a heat-map background colour.
// World-championship leagues use a factor of 1 (round-robin, fewer games),
// while all other leagues use a factor of 2 (home + away cycles).
function GpCell({ gameCounter, totalTeams, isWorldChamp }: GpCellProps) {
  const factor = isWorldChamp ? 1 : 2;

  let className = 'table__column-games';
  if (gameCounter > totalTeams * factor * 0.75) {
    className = 'table__column-games--high';
  } else if (gameCounter > totalTeams * factor * 0.5) {
    className = 'table__column-games--medium';
  } else if (gameCounter > totalTeams * factor * 0.25) {
    className = 'table__column-games--low';
  }

  return (
    <div className={className}>
      <p>{gameCounter}</p>
    </div>
  );
}

export default GpCell;

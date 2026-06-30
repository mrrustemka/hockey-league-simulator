import '../../styles/DiffCell.css';

interface DiffCellProps {
  diff: number;
}

// Renders goal differential with a leading `+` and green/red colouring.
function DiffCell({ diff }: DiffCellProps) {
  const className =
    diff > 0
      ? 'table__column-diff--positive'
      : diff < 0
        ? 'table__column-diff--negative'
        : '';

  return (
    <p className={className}>{diff > 0 ? '+' + diff : diff}</p>
  );
}

export default DiffCell;

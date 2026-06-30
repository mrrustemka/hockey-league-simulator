import { Link } from 'react-router-dom';
import { Teams } from '../../data/types';
import '../../styles/TeamCell.css';

interface TeamCellProps {
  name: string;
  record: Teams;
  isFavorite: boolean;
}

function TeamCell({ name, record, isFavorite }: TeamCellProps) {
  const postFix = isFavorite ? '\u{2B50}' : '  ';

  return (
    <div className='table__team'>
      {record.is_playoff && (
        <div className='table__column-name--is_playoff'>x</div>
      )}
      <img
        src={record.logo}
        alt={`${name} Logo`}
        width='16px'
        className='table__team-logo'
        loading='lazy'
      />
      <Link
        to={`/hockey-league-simulator/season/team/${record.id}`}
        className='table__column-name'
      >
        {` ${name}`}
      </Link>
      {' ' + postFix + ' '} {record.status}
    </div>
  );
}

export default TeamCell;

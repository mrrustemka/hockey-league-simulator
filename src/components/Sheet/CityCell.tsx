import '../../styles/CityCell.css';

interface CityCellProps {
  city: string;
  flag?: string;
  showFlag: boolean;
}

function CityCell({ city, flag, showFlag }: CityCellProps) {
  return (
    <>
      {showFlag && flag && (
        <img
          src={flag}
          alt={`${city} Flag`}
          width='16px'
          className='table__column-flag'
          loading='lazy'
        />
      )}
      <p className='table__column-city'>{' ' + city}</p>
    </>
  );
}

export default CityCell;

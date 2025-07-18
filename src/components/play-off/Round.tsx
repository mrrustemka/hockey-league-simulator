import { Button, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import Pair from './Pair';
import { Teams } from '../../data/types';
import '../../styles/Round.css';

const { Title } = Typography;

interface IRound {
  abv: string;
  pairs: Teams[][];
  status: boolean;
  updateRound: () => void;
  playoffWinsRequiredCount: number;
}

function Round({
  abv,
  pairs,
  status,
  updateRound,
  playoffWinsRequiredCount,
}: IRound) {
  function handlerIsRoundEnd() {
    if (
      pairs.every((pair: Teams[]) =>
        pair.find(
          (team) => team.play_off_round_wins === playoffWinsRequiredCount
        )
      )
    ) {
      console.log('round is end');
    }
  }

  function handlerNextRound() {
    updateRound();
  }

  return (
    <div className='playoff'>
      <Title className='playoff__header' level={2}>
        {pairs.length === 1 ? 'Final' : abv}
      </Title>
      <div className='playoff__round-panel'>
        {pairs.map((pair: Teams[]) => (
          <Pair
            key={uuidv4()}
            teams={pair}
            handlerIsRoundEnd={handlerIsRoundEnd}
            status={status}
            playoffWinsRequiredCount={playoffWinsRequiredCount}
          />
        ))}
      </div>
      <Button
        className='playoff__next-round-button'
        key={uuidv4()}
        onClick={() => handlerNextRound()}
        disabled={!status}
        size='large'
      >
        Next Round
      </Button>
    </div>
  );
}

export default Round;

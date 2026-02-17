import { Button, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import Pair from './Pair';
import PreviousPairs from './PreviousPairs';
import { Teams } from '../../data/types';
import '../../styles/Round.css';

const { Title } = Typography;

interface IRound {
  abv: number;
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
    if (
      !pairs.every((pair: Teams[]) =>
        pair.some(
          (team) => team.play_off_round_wins === playoffWinsRequiredCount
        )
      )
    ) {
      console.log('Please simulate all games before go to the next round');
      return;
    }

    pairs.forEach((pair: Teams[]) => {
      pair.forEach((team: Teams) => {
        team.play_off_round_results.push({
          team: team.abbreviation,
          team_wins: team.play_off_round_wins,
          opponent: pair.find((opponent: Teams) => opponent !== team)?.abbreviation ?? '',
          opponent_wins: pair.find((opponent: Teams) => opponent !== team)?.play_off_round_wins ?? 0,
        });
      });
    });
    updateRound();
  }

  return (
    <div className='playoff'>
      <Title className='playoff__header' level={2}>
        {pairs.length === 1 ? 'Final' : 'Round ' + abv}
      </Title>
      <div className='playoff__round-panel'>
        {pairs.map((pair: Teams[]) =>
          status ? (
            <Pair
              key={pair[0].id + '-' + pair[1].id}
              teams={pair}
              handlerIsRoundEnd={handlerIsRoundEnd}
              status={status}
              playoffWinsRequiredCount={playoffWinsRequiredCount}
              index={abv}
            />
          ) : (
            <PreviousPairs
              key={pair[0].id + '-' + pair[1].id}
              teams={pair.map((team) => ({
                ...(team.play_off_round_results[abv - 1] || {}),
                id: team.id,
                team: team.abbreviation,
                team_wins: team.play_off_round_results[abv - 1]?.team_wins || 0,
                opponent: '',
                opponent_wins: 0,
                logo: team.logo,
                name: team.name,
              }))}
              index={abv}
            />
          )
        )}
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

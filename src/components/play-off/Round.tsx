import { Button, Typography } from "antd";
import Pair from "./Pair";
import { v4 as uuidv4 } from "uuid";

const { Title } = Typography;

function Round({ abv, pairs, status, updateRound }: any) {
  function handlerIsRoundEnd() {
    if (
      pairs.every((pair: any[]) =>
        pair.find((team) => team.play_off_round_wins === 4)
      )
    ) {
      console.log("round is end");
    }
  }

  function handlerNextRound() {
    updateRound();
  }

  return (
    <div className="playoff">
      <Title className="playoff__header" level={2}>
        {pairs.length === 1 ? "Final" : abv}
      </Title>
      <div className="playoff__round-panel">
        {pairs.map((pair: any) => (
          <Pair
            key={uuidv4()}
            teams={pair}
            handlerIsRoundEnd={handlerIsRoundEnd}
            status={status}
          />
        ))}
      </div>
      <Button
        className="playoff__next-round-button"
        key={uuidv4()}
        onClick={() => handlerNextRound()}
        disabled={!status}
        size="large"
      >
        Next Round
      </Button>
    </div>
  );
}

export default Round;

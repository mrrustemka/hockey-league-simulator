import React, { useState } from "react";
import Pair from "./Pair";
import { v4 as uuidv4 } from "uuid";

function Round({ abv, pairs }: any) {
  const [isChampion, setIsChampion] = useState<boolean>(false);

  function handlerIsRoundEnd() {
    if (
      pairs.every((pair: any[]) =>
        pair.find((team) => team.play_off_round_wins === 4)
      )
    ) {
      if (abv === "Final") {
        setIsChampion(!isChampion);
      }
      console.log("round is end");
    }
  }

  return (
    <div>
      {isChampion ? (
        <div>
          <h2 className="champion-container-panel">
            The Champion is{" "}
            {pairs[0][0].play_off_round_wins === 4 ? (
              <div>
                {pairs[0][0].name + " "}
                <img src={pairs[0][0].logo} alt={pairs[0][0].name + " Logo"} />
              </div>
            ) : (
              <div>
                {pairs[0][1].name + " "}
                <img src={pairs[0][1].logo} alt={pairs[0][1].name + " Logo"} />
              </div>
            )}
          </h2>
        </div>
      ) : (
        <div>
          {abv}
          <div>
            {pairs.map((pair: any) => (
              <Pair
                key={uuidv4()}
                teams={pair}
                handlerIsRoundEnd={handlerIsRoundEnd}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Round;

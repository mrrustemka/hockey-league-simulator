import React from "react";
import Pair from "./Pair";
import { v4 as uuidv4 } from "uuid";

function Round({ abv, pairs }: any) {
  return (
    <div>
      {abv}
      <div>
        {pairs.map((pair: any) => (
          <Pair key={uuidv4()} teams={pair} />
        ))}
      </div>
    </div>
  );
}

export default Round;

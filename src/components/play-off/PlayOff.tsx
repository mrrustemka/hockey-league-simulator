import { useState } from "react";
import { useLocation } from "react-router-dom";
import Round from "./Round";
import { v4 as uuidv4 } from "uuid";
import { teams as mock } from "../../data/teams";

function PlayOff() {
  const [isRound, setIsRound] = useState<boolean>(true);
  let [curRound, setCurRound] = useState<number>(0);
  const [tree, setTree] = useState<Array<any>>([]);
  const teams = mock;

  const location = useLocation();
  // const { teams } = location.state || {};

  for (let i = 0; i < teams.length; i++) {
    teams[i].play_off_rank = i + 1;
  }

  if (isRound) {
    let newRound: Array<any> = [];

    for (let i = 0; i < teams.length / 2; i++) {
      newRound.push([teams[i], teams[teams.length - i - 1]]);
    }

    setTree((prevTree) => [newRound, ...prevTree]);
    setCurRound(curRound + 1);
    setIsRound(!isRound);
  }

  console.log(teams);

  return (
    <div>
      {tree.map((value, index) => (
        <Round
          key={uuidv4()}
          abv={
            index === Math.log2(teams.length) - 1
              ? "Final"
              : "Round " + (index + 1)
          }
          pairs={value}
        />
      ))}
    </div>
  );
}

export default PlayOff;

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Round from "./Round";
import { v4 as uuidv4 } from "uuid";
import { teams as mock } from "../../data/teams";
import { Teams } from "../../data/types";

function PlayOff() {
  const [isRound, setIsRound] = useState<boolean>(true);
  let [curRound, setCurRound] = useState<number>(0);
  const [tree, setTree] = useState<Array<any>>([]);
  const location = useLocation();
  const [teams, setTeams] = useState<Array<Teams>>(location.state.teams || {});
  // const teams = mock;

  // const { teams } = location.state || {};
  // setTeams(location.state || {});
  // console.log(location.state.teams || {});

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

  function nextRound() {
    const newTeams = teams.filter((team) => team.play_off_round_wins === 4);
    newTeams.forEach((team) => (team.play_off_round_wins = 0));
    setTeams(newTeams);
    setIsRound(!isRound);
  }

  return (
    <div>
      {tree.map((value, index) => (
        <div key={uuidv4()}>
          <Round
            key={uuidv4()}
            abv={
              index === Math.log2(teams.length) - 1
                ? "Final"
                : "Round " + (index + 1)
            }
            pairs={value}
          />
          <button key={uuidv4()} onClick={() => nextRound()}>
            Next
          </button>
        </div>
      ))}
    </div>
  );
}

export default PlayOff;

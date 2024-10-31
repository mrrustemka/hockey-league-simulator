import { useState } from "react";
import Round from "./Round";
import { v4 as uuidv4 } from "uuid";
// import { teams as mock } from "../../Data/teams"; // use for tests
import { Teams } from "../../Data/types";
import Header from "../Header";
import { Link } from "react-router-dom";
import { champs } from "../../Data/champs";

function PlayOff() {
  const [isRound, setIsRound] = useState<boolean>(true);
  let [curRound, setCurRound] = useState<number>(0);
  const [tree, setTree] = useState<Array<Teams[][]>>([]);
  const [teams, setTeams] = useState<Array<Teams>>(
    JSON.parse(localStorage.getItem("teamsList") || "[]")
  );
  const leagueId: string = JSON.parse(localStorage.getItem("leagueId") || "");

  // const [teams, setTeams] = useState<Array<Teams>>(mock); // use for tests
  const [isChampion, setIsChampion] = useState<boolean>(false);

  for (let i = 0; i < teams.length; i++) {
    teams[i].play_off_rank = i + 1;
  }

  if (isRound) {
    let newRound: Array<Teams[]> = [];

    for (let i = 0; i < teams.length / 2; i++) {
      newRound.push([teams[i], teams[teams.length - i - 1]]);
    }

    setTree((prevTree) => [newRound, ...prevTree]);
    setCurRound(curRound + 1);
    setIsRound(!isRound);
  }

  function nextRound() {
    const newTeams = teams.filter((team) => team.play_off_round_wins === 4);
    if (newTeams.length !== teams.length / 2) {
      console.log("Please simulate all games before go to the next round");
      return;
    }
    if (newTeams.length < 2) {
      setIsChampion(!isChampion);
    } else {
      setIsRound(!isRound);
      newTeams.forEach((team) => (team.play_off_round_wins = 0));
    }
    setTeams(newTeams);
  }

  function updateGame() {
    champs
      .find((champ) => champ.id === leagueId)
      ?.teams.forEach((team) => {
        team.game_counter = 0;
        team.goals_against = 0;
        team.goals_diff = 0;
        team.goals_for = 0;
        team.loses = 0;
        team.loses_ot = 0;
        team.play_off_rank = 0;
        team.play_off_round_wins = 0;
        team.points = 0;
        team.wins = 0;
      });
    localStorage.removeItem("leagueId");
    localStorage.removeItem("scheduleList");
    localStorage.removeItem("teamsList");
    localStorage.removeItem("gameIndex");
  }

  return (
    <div className="playoff">
      <Header id={leagueId} />
      {isChampion ? (
        <div className="playoff__champion">
          <h2 className="playoff__champion-heading">
            The Champion is
            <div className="playoff__champion-details">
              <img
                className="playoff__champion-logo"
                src={teams[0].logo}
                alt={teams[0].name + " Logo"}
                loading="lazy"
              />
              <span className="playoff__champion-name">{teams[0].name}</span>
            </div>
          </h2>
          <Link
            to="/hockey-league-simulator"
            className="playoff__champion-link pulse"
            onClick={() => updateGame()}
          >
            Play Again
          </Link>
        </div>
      ) : (
        <div className="playoff__rounds">
          {tree.map((value, index) => (
            <div className="playoff__round" key={uuidv4()}>
              <Round
                abv={"Round " + (tree.length - index)}
                pairs={value}
                status={index === 0}
                updateRound={nextRound}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlayOff;

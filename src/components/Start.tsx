import { useState } from "react";
import { League as TLeague } from "../Data/types";
import { champs } from "../Data/champs";
import Header from "./Header";
import League from "./League";

function Start() {
  const [champTypes, setChampTypes] = useState<TLeague[]>(champs);

  function updateTeamsNum(id: string, value: number): void {
    const newChampTypes = champTypes.map((champ) =>
      champ.id === id ? { ...champ, teamsCount: value } : { ...champ }
    );
    setChampTypes(newChampTypes);
  }

  return (
    <>
      <Header id="" />
      <div className="start">
        {champTypes.map((champ) => (
          <League
            key={champ.id}
            league={champ}
            updateTeamsNum={updateTeamsNum}
          />
        ))}
      </div>
    </>
  );
}

export default Start;

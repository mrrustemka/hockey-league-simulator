import { champs } from "../Data/champs";
import Header from "./Header";
import League from "./League";
import "../Styles/Start.css";

function Start() {
  return (
    <>
      <Header id="" />
      <div className="start">
        {champs.map((champ) => (
          <League key={champ.id} league={champ} />
        ))}
      </div>
    </>
  );
}

export default Start;

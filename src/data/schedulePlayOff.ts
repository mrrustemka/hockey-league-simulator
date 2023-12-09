import { v4 as uuidv4 } from "uuid";
import { Schedule, TeamsList, Teams } from "./types";
import playOff from "../components/PlayOffTree";

// let teamsList: TeamsList = [];
export let scheduleList: Schedule[] = [];
let i: number = 0;

export function schedulePlayOff(playOff: Teams[]) {
  for (let i: number = 0; i < 4; i++) {
    for (let j: number = 0; j < 16; j += 2) {
      scheduleList.push({
        id: uuidv4(),
        away: playOff[j + 1].abbreviation,
        home: playOff[j].abbreviation,
      });
    }
  }

  console.log(scheduleList);
}

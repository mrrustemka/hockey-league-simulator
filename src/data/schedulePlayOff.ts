import { v4 as uuidv4 } from "uuid";
import { teams } from "./teams";
import { Schedule, TeamsList, Teams } from "./types";

let teamsList: TeamsList = [];
export let schedulePlayOffList: Schedule[] = [];
let i: number = 0;

export function schedulePlayOff(props: { teamsData: Teams[] }) {
  schedulePlayOffList[0] = {
    id: uuidv4(),
    home: props.teamsData[0].name,
    away: props.teamsData[3].name,
  };
  schedulePlayOffList[1] = {
    id: uuidv4(),
    home: props.teamsData[1].name,
    away: props.teamsData[2].name,
  };
  console.log(schedulePlayOffList);
}

import { v4 as uuidv4 } from "uuid";
import { Schedule, TeamsList, Teams } from "./types";
import playOff from "../components/PlayOffTree";

let teamsList: TeamsList = [];
export let scheduleList: Schedule[] = [];
let i: number = 0;

export function schedulePlayOff(playOff: Teams[]) {
  console.log(playOff);
}

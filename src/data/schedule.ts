import { v4 as uuidv4 } from "uuid";
import { teams } from "./teams";
import { Schedule, TeamsList } from "./types";

let teamsList: TeamsList = [];
let scheduleList: Schedule[] = [];
let i = 0;

export function schedule() {
  teams.map((team) => {
    if (team) return teamsList.push(team.abbreviation);
  });

  teams.map((teamInfo) => {
    teamsList.map((team) => {
      if (teamInfo.abbreviation === team) {
        return team;
      } else {
        let game = { id: uuidv4(), home: teamInfo.abbreviation, away: team };
        if (
          scheduleList.find(
            (element) =>
              element.home === game.away && element.away === game.home
          )
        ) {
          return team;
        } else {
          scheduleList[i] = game;
        }
      }
      i++;
      return team;
    });
    for (let k = scheduleList.length - 1; k > 0; k--) {
      let j = Math.floor(Math.random() * (k + 1));
      [scheduleList[k], scheduleList[j]] = [scheduleList[j], scheduleList[k]];
    }
    return teamInfo;
  });

  console.log(scheduleList);
}

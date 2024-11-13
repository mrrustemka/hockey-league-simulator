import { v4 as uuidv4 } from "uuid";
import { Schedule, Teams, TeamsList } from "./types";

let teamsList: TeamsList = [];
export let scheduleList: Schedule[] = [];

export function schedule(teams: Teams[], id: string) {
  scheduleList =
    id === "1" || id === "2"
      ? getOneRoundSchedule(teams)
      : getDoubleRoundSchedule(teams);
  teamsList = [];
  teams.forEach((team) => {
    if (team) return teamsList.push(team.abbreviation);
  });

  localStorage.setItem("teamsList", JSON.stringify(teams));
  localStorage.setItem("scheduleList", JSON.stringify(scheduleList));
  localStorage.setItem("gameIndex", JSON.stringify(0));

  function getDoubleRoundSchedule(teams: Teams[]): Schedule[] {
    const schedule: Schedule[] = [];

    for (let i = 0; i < teams.length; i++) {
      for (let j = 0; j < teams.length; j++) {
        if (i !== j) {
          schedule.push({
            id: uuidv4(),
            home: teams[i].abbreviation,
            away: teams[j].abbreviation
          });
        }
      }
    }

    for (let k = schedule.length - 1; k > 0; k--) {
      const randomIndex = Math.floor(Math.random() * (k + 1));
      [schedule[k], schedule[randomIndex]] = [
        schedule[randomIndex],
        schedule[k]
      ];
    }

    return schedule;
  }

  function getOneRoundSchedule(teams: Teams[]): Schedule[] {
    const schedule: Schedule[] = [];

    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        schedule.push({
          id: uuidv4(),
          home: teams[i].abbreviation,
          away: teams[j].abbreviation
        });
      }
    }

    for (let k = schedule.length - 1; k > 0; k--) {
      const randomIndex = Math.floor(Math.random() * (k + 1));
      [schedule[k], schedule[randomIndex]] = [
        schedule[randomIndex],
        schedule[k]
      ];
    }

    return schedule;
  }
}

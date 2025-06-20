import { v4 as uuidv4 } from 'uuid';
import { Schedule, Teams, TeamsList } from './types';

let teamsList: TeamsList = [];
export let scheduleList: Schedule[] = [];

function getDoubleRoundSchedule(teams: Teams[]): Schedule[] {
  const schedule: Schedule[] = [];

  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams.length; j++) {
      if (i !== j) {
        schedule.push({
          id: uuidv4(),
          home: teams[i].id,
          away: teams[j].id,
        });
      }
    }
  }

  return shuffle(schedule);
}

function getOneRoundSchedule(teams: Teams[]): Schedule[] {
  const schedule: Schedule[] = [];

  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      schedule.push({
        id: uuidv4(),
        home: teams[i].id,
        away: teams[j].id,
      });
    }
  }

  return shuffle(schedule);
}

function getNhlEhlSchedule(teams: Teams[]): Schedule[] {
  const schedule: Schedule[] = [];

  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams.length; j++) {
      if (i !== j) {
        schedule.push({
          id: uuidv4(),
          home: teams[i].id,
          away: teams[j].id,
        });
      }
    }
  }

  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      if (teams[i].conference_id === teams[j].conference_id) {
        schedule.push({
          id: uuidv4(),
          home: teams[i].id,
          away: teams[j].id,
        });
      }
    }
  }

  return shuffle(schedule);
}

function shuffle(schedule: Schedule[]): Schedule[] {
  for (let k = schedule.length - 1; k > 0; k--) {
    const randomIndex = Math.floor(Math.random() * (k + 1));
    [schedule[k], schedule[randomIndex]] = [schedule[randomIndex], schedule[k]];
  }

  return schedule;
}

export function schedule(teams: Teams[], id: string) {
  scheduleList = [];

  if (id === '1' || id === '2') {
    const groupA = teams.filter((team: Teams) => team.conference_id === '1');
    const groupB = teams.filter((team: Teams) => team.conference_id === '2');

    const combinedSchedule = getOneRoundSchedule(groupA).concat(
      getOneRoundSchedule(groupB)
    );

    scheduleList = shuffle(combinedSchedule);
  } else if (id === '3' || id === '4') {
    scheduleList = getNhlEhlSchedule(teams);
  } else {
    scheduleList = getDoubleRoundSchedule(teams);
  }

  teamsList = [];

  teams.forEach((team) => {
    if (team) return teamsList.push(team.id);
  });

  localStorage.setItem('teamsList', JSON.stringify(teams));
  localStorage.setItem('scheduleList', JSON.stringify(scheduleList));
  localStorage.setItem('gameIndex', JSON.stringify(0));
}

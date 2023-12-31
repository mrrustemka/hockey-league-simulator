export type Teams = {
  abbreviation: string;
  city: string;
  country: string;
  game_counter: number;
  goals_against: number;
  goals_diff: number;
  goals_for: number;
  id: number;
  logo: string;
  loses: number;
  loses_ot: number;
  name: string;
  points: number;
  rating: number;
  wins: number;
  playOffPosition: number;
  playOffWins: number;
};

export type TeamsList = string[];

export type Schedule = {
  id: string;
  away: string;
  home: string;
};

export type GameResult = {
  home: string;
  away: string;
  homeGoals: number;
  awayGoals: number;
  overtime: string;
};

export type buttonStyles = {
  display: string;
};

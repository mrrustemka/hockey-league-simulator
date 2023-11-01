export type Teams = {
  id: number;
  name: string;
  abbreviation: string;
  country: string;
  city: string;
  points: number;
  goals_for: number;
  goals_against: number;
  goals_diff: number;
  rating: number;
  game_counter: number;
  logo: string;
};

export type TeamsList = string[];

export type Schedule = {
  id: string;
  away: string;
  home: string;
};

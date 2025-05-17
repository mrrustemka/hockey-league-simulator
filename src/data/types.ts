export type Teams = {
  abbreviation: string;
  city: string;
  country: string;
  game_counter: number;
  goals_against: number;
  goals_diff: number;
  goals_for: number;
  readonly id: string;
  logo: string;
  loses: number;
  loses_ot: number;
  name: string;
  points: number;
  rating: number;
  wins: number;
  play_off_rank: number;
  play_off_round_wins: number;
  color: string;
  flag?: string;
  is_playoff: boolean;
  status: string;
  cur_status_length: number;
  chart_data: number[];
  chart_labels: string[];
  photos: string[];
  arena_name?: string;
  arena_description?: string;
  arena_capacity?: number;
  arena_photo?: string;
  facebook: string;
  youtube: string;
  instagram: string;
  x: string;
  threads: string;
  tiktok: string;
  snapchat: string;
  linkedin: string;
  website: string;
  twitch: string;
  points_percentage: number;
  conference_id?: string;
  division_id?: string;
};

export type TeamsList = string[];

export type Schedule = {
  readonly id: string;
  away: string;
  home: string;
};

export type GameResult = {
  home: string;
  away: string;
  home_goals: number;
  away_goals: number;
  overtime: string;
};

export type buttonStyles = {
  display: string;
};

export type PlayOffGameResult = {
  away: string;
  away_goals?: number;
  home: string;
  home_goals?: number;
  readonly id: string;
};

export type League = {
  readonly id: string;
  name: string;
  description: string;
  image: string;
  teams: Teams[];
  teams_count: number;
  cup: string;
  conferences?: Conference[];
  divisions?: Division[];
};

export type Conference = {
  conference_id: string;
  name: string;
};

export type Division = {
  name: string;
  division_id: string;
  conference_id: string;
};

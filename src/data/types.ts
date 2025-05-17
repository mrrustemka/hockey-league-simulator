export type Teams = {
  readonly abbreviation: string;
  readonly city: string;
  readonly country: string;
  game_counter: number;
  goals_against: number;
  goals_diff: number;
  goals_for: number;
  readonly id: string;
  readonly logo: string;
  loses: number;
  loses_ot: number;
  readonly name: string;
  points: number;
  rating: number;
  wins: number;
  play_off_rank: number;
  play_off_round_wins: number;
  readonly color: string;
  readonly flag?: string;
  is_playoff: boolean;
  status: string;
  cur_status_length: number;
  chart_data: number[];
  chart_labels: string[];
  readonly photos: string[];
  readonly arena_name?: string;
  readonly arena_description?: string;
  readonly arena_capacity?: number;
  readonly arena_photo?: string;
  readonly facebook: string;
  readonly youtube: string;
  readonly instagram: string;
  readonly x: string;
  readonly threads: string;
  readonly tiktok: string;
  readonly snapchat: string;
  readonly linkedin: string;
  readonly website: string;
  readonly twitch: string;
  points_percentage: number;
  readonly conference_id?: string;
  readonly division_id?: string;
};

export type TeamsList = string[];

export type Schedule = {
  readonly id: string;
  readonly away: string;
  readonly home: string;
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
  readonly name: string;
  readonly description: string;
  readonly image: string;
  teams: Teams[];
  teams_count: number;
  readonly cup: string;
  readonly conferences?: Conference[];
  readonly divisions?: Division[];
};

export type Conference = {
  readonly conference_id: string;
  readonly name: string;
};

export type Division = {
  readonly name: string;
  readonly division_id: string;
  readonly conference_id: string;
};

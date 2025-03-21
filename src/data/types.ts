export type Teams = {
	abbreviation: string;
	city: string;
	country: string;
	game_counter: number;
	goals_against: number;
	goals_diff: number;
	goals_for: number;
	readonly id: number;
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
	isPlayOff: boolean;
	status: string;
	curStatusLength: number;
	chartData: number[];
	chartLabels: string[];
	photos: string[];
	arena_name?: string;
	arena_dedcription?: string;
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
	homeGoals: number;
	awayGoals: number;
	overtime: string;
};

export type buttonStyles = {
	display: string;
};

export type PlayOffGameResult = {
	away: string;
	awayGoals?: number;
	home: string;
	homeGoals?: number;
	readonly id: string;
};

export type League = {
	readonly id: string;
	name: string;
	description: string;
	image: string;
	teams: Teams[];
	teamsCount: number;
	cup: string;
};

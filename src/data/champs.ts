import { League } from './types';
import del_cup from '../images/del_cup.png';
import del_logo from '../images/del.png';
import ehl_cup from '../images/ehl_cup.png';
import ehl_logo from '../images/ehl.png';
import elh_cup from '../images/elh_cup.png';
import elh_logo from '../images/elh.png';
import ice_cup from '../images/ice_cup.png';
import ice_logo from '../images/ice.png';
import na_cup from '../images/na_cup.png';
import na_logo from '../images/na.png';
import nhl_cup from '../images/nhl_cup.png';
import nhl_logo from '../images/nhl.png';
import shl_cup from '../images/shl_cup.png';
import shl_logo from '../images/shl.png';
import sml_cup from '../images/sml_cup.png';
import sml_logo from '../images/sml.png';
import w1_cup from '../images/w1_cup.png';
import world_1 from '../images/w1.png';
import world_2 from '../images/w2.png';
import { del } from './Teams/del';
import { ehl } from './Teams/ehl';
import { elh } from './Teams/elh';
import { ice } from './Teams/ice';
import { na } from './Teams/na';
import { nhl } from './Teams/nhl';
import { shl } from './Teams/shl';
import { sml } from './Teams/sml';
import { w1 } from './Teams/w1';
import { w2 } from './Teams/w2';

export const champs: League[] = [
	{
		id: '1',
		name: 'Hockey World Championship',
		description:
			"The World Hockey Championship is an exciting global event where the best ice hockey teams from across the world come together. It's not just about fast-paced action and sharp shooting — it's about national pride, teamwork, and intense rivalries. Fans from all walks of life come together to support their countries, creating a colorful atmosphere both in the arenas and at home.",
		image: world_1,
		teams: w1,
		teamsCount: 16,
		cup: w1_cup,
		conferences: [
			{ conferenceId: '1', name: 'Group A' },
			{ conferenceId: '2', name: 'Group B' },
		],
	},
	{
		id: '2',
		name: 'Hockey World Championship Division I',
		description: 'Second level of World Championship.',
		image: world_2,
		teams: w2,
		teamsCount: 12,
		cup: w1_cup,
		conferences: [
			{ conferenceId: '1', name: 'Group A' },
			{ conferenceId: '2', name: 'Group B' },
		],
	},
	{
		id: '3',
		name: 'National Hockey League',
		description:
			'The National Hockey League featuring US and Canadian teams. The league has the highest level of any league.',
		image: nhl_logo,
		teams: nhl,
		teamsCount: 32,
		cup: nhl_cup,
		conferences: [
			{ conferenceId: '1', name: 'Eastern' },
			{ conferenceId: '2', name: 'Western' },
		],
		divisions: [
			{ name: 'Atlantic', conferenceId: '1', divisionId: '1' },
			{ name: 'Metropolitan', conferenceId: '1', divisionId: '2' },
			{ name: 'Central', conferenceId: '2', divisionId: '3' },
			{ name: 'Pacific', conferenceId: '2', divisionId: '4' },
		],
	},
	{
		id: '4',
		name: 'European Hockey League',
		description:
			'The European Hockey League is a fantasy league featuring the best hockey teams from the top hockey countries in Europe: Sweden, Finland, Switzerland, Germany, Czech Republic, England, Slovakia, North Ireland, Norway and Italy.',
		image: ehl_logo,
		teams: ehl,
		teamsCount: 39,
		cup: ehl_cup,
		conferences: [
			{ conferenceId: '1', name: 'North' },
			{ conferenceId: '2', name: 'South' },
		],
		divisions: [
			{ name: 'Baltic', conferenceId: '1', divisionId: '1' },
			{ name: 'Athlantic', conferenceId: '1', divisionId: '2' },
			{ name: 'Alpine', conferenceId: '2', divisionId: '3' },
			{ name: 'Central', conferenceId: '2', divisionId: '4' },
		],
	},
	{
		id: '5',
		name: 'Swedish Hockey League',
		description:
			'Highest division in the Swedish ice hockey system. The league was founded in 1975 and the winner is awarded the Le Mat Trophy. SHL was ranked the No. 1 league in Europe.',
		image: shl_logo,
		teams: shl,
		teamsCount: 14,
		cup: shl_cup,
	},
	{
		id: '6',
		name: 'National League',
		description:
			'The National League a league in Switzerland and is the top tier of the Swiss league system. NL was ranked the No. 2 league in Europe.',
		image: na_logo,
		teams: na,
		teamsCount: 14,
		cup: na_cup,
	},
	{
		id: '7',
		name: 'Deutsche Eishockey Liga',
		description:
			'DEL is a German professional hockey league and the highest division in German hockey. The DEL was ranked the No. 3 league in Europe.',
		image: del_logo,
		teams: del,
		teamsCount: 14,
		cup: del_cup,
	},
	{
		id: '8',
		name: 'SM-Liiga',
		description:
			'The SM-liiga, colloquially called the Finnish Elite League. The winner of the Liiga playoffs is awarded the Kanada-malja at the end of each season. SM-liiga was ranked the No. 4 league in Europe.',
		image: sml_logo,
		teams: sml,
		teamsCount: 16,
		cup: sml_cup,
	},
	{
		id: '9',
		name: 'Extraliga',
		description:
			'The highest-level hockey league in the Czech Republic. ELH was ranked the No. 5 league in Europe.',
		image: elh_logo,
		teams: elh,
		teamsCount: 14,
		cup: elh_cup,
	},
	{
		id: '10',
		name: 'ICE Hockey League',
		description:
			'Central European hockey league that also serves as the top-tier ice hockey league in Austria. It currently features additional teams from Hungary, Italy, and Slovenia. ELH was ranked the No. 6 league in Europe.',
		image: ice_logo,
		teams: ice,
		teamsCount: 13,
		cup: ice_cup,
	},
];

import { Teams } from '../types';
import chi from '../../images/w2_chi.png';
import chi_1 from '../../images/Gallery/W2/Chi/chi_1.jpg';
import chi_2 from '../../images/Gallery/W2/Chi/chi_2.jpg';
import cro from '../../images/w2_cro.png';
import cro_1 from '../../images/Gallery/W2/Cro/cro_1.jpg';
import cro_2 from '../../images/Gallery/W2/Cro/cro_2.jpg';
import est from '../../images/w2_est.png';
import est_1 from '../../images/Gallery/W2/Est/est_1.jpg';
import est_2 from '../../images/Gallery/W2/Est/est_2.jpg';
import est_3 from '../../images/Gallery/W2/Est/est_3.jpg';
import gbr from '../../images/w2_gbr.png';
import gbr_1 from '../../images/Gallery/W2/Gbr/gbr_1.jpg';
import gbr_2 from '../../images/Gallery/W2/Gbr/gbr_2.jpg';
import gbr_3 from '../../images/Gallery/W2/Gbr/gbr_3.jpg';
import ita from '../../images/w2_ita.png';
import ita_1 from '../../images/Gallery/W2/Ita/ita_1.jpg';
import ita_2 from '../../images/Gallery/W2/Ita/ita_2.jpg';
import ita_3 from '../../images/Gallery/W2/Ita/ita_3.jpg';
import jap from '../../images/w2_jap.png';
import jap_1 from '../../images/Gallery/W2/Jap/jap_1.jpg';
import jap_2 from '../../images/Gallery/W2/Jap/jap_2.jpg';
import lit from '../../images/w2_lit.png';
import lit_1 from '../../images/Gallery/W2/Lit/lit_1.jpg';
import lit_2 from '../../images/Gallery/W2/Lit/lit_2.jpg';
import pol from '../../images/w2_pol.png';
import pol_1 from '../../images/Gallery/W2/Pol/pol_1.jpg';
import pol_2 from '../../images/Gallery/W2/Pol/pol_2.jpg';
import rom from '../../images/w2_rom.png';
import rom_1 from '../../images/Gallery/W2/Rom/rom_1.jpg';
import rom_2 from '../../images/Gallery/W2/Rom/rom_2.jpg';
import skr from '../../images/w2_skr.png';
import skr_1 from '../../images/Gallery/W2/Skr/skr_1.jpg';
import skr_2 from '../../images/Gallery/W2/Skr/skr_2.jpg';
import spa from '../../images/w2_spa.png';
import spa_1 from '../../images/Gallery/W2/Spa/spa_1.jpg';
import spa_2 from '../../images/Gallery/W2/Spa/spa_2.jpg';
import ukr from '../../images/w2_ukr.png';
import ukr_1 from '../../images/Gallery/W2/Ukr/ukr_1.jpg';
import ukr_2 from '../../images/Gallery/W2/Ukr/ukr_2.jpg';

export const w2: Teams[] = [
	{
		abbreviation: 'GBR',
		city: 'London',
		country: 'Gbr',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '1',
		logo: gbr,
		name: 'Great Britain',
		points: 0,
		rating: 75,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#ffffff',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [gbr_1, gbr_2, gbr_3],
		facebook: 'https://www.facebook.com/greatbritainicehockey',
		youtube: 'https://www.youtube.com/channel/UCuikKkZIwg0gVgBoHzRcZBQ',
		instagram: 'https://www.instagram.com/teamgbicehockey',
		x: 'https://twitter.com/IceHockeyUK',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'http://www.icehockeyuk.co.uk/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '1',
	},
	{
		abbreviation: 'POL',
		city: 'Warsaw',
		country: 'Pol',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '2',
		logo: pol,
		name: 'Poland',
		points: 0,
		rating: 73,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#ffffff',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [pol_1, pol_2],
		facebook: 'https://www.facebook.com/polskihokej.eu/',
		youtube: 'https://www.youtube.com/user/PZHLtv',
		instagram: 'https://www.instagram.com/polskihokej/',
		x: 'https://twitter.com/PZHL',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'http://www.pzhl.org.pl/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '1',
	},
	{
		abbreviation: 'ITA',
		city: 'Rome',
		country: 'Ita',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '3',
		logo: ita,
		name: 'Italy',
		points: 0,
		rating: 74,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#0066bc',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [ita_1, ita_2, ita_3],
		facebook: 'https://www.facebook.com/fisg.it',
		youtube: '',
		instagram: 'https://www.instagram.com/federazione_sport_ghiaccio',
		x: 'https://twitter.com/fisg_it',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'http://www.fisg.it/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '1',
	},
	{
		abbreviation: 'SKR',
		city: 'Seoul',
		country: 'SKr',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '4',
		logo: skr,
		name: 'South Korea',
		points: 0,
		rating: 70,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#cd2e3a',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [skr_1, skr_2],
		facebook: 'https://www.facebook.com/kiha1928',
		youtube: '',
		instagram: 'https://www.instagram.com/hockeykorea/',
		x: 'https://twitter.com/KIHAICEHOCKEY',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'http://www.kiha.or.kr/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '2',
	},
	{
		abbreviation: 'ROM',
		city: 'Bucharest',
		country: 'Rom',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '5',
		logo: rom,
		name: 'Romania',
		points: 0,
		rating: 70,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#fcd116',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [rom_1, rom_2],
		facebook: 'https://www.facebook.com/people/FRHG/100094497767694/',
		youtube: '',
		instagram: '',
		x: '',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'https://www.frhg.ro/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '1',
	},
	{
		abbreviation: 'JAP',
		city: 'Tokyo',
		country: 'Jap',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '6',
		logo: jap,
		name: 'Japan',
		points: 0,
		rating: 68,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#000000',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [jap_1, jap_2],
		facebook: 'https://www.facebook.com/jihf.or.jp',
		youtube: '',
		instagram: 'https://www.instagram.com/japanicehockey/',
		x: 'https://twitter.com/JPN_Ice_Hockey',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'http://www.jihf.or.jp/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '1',
	},
	{
		abbreviation: 'CHI',
		city: 'Beijing',
		country: 'Chi',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '7',
		logo: chi,
		name: 'China',
		points: 0,
		rating: 65,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#fbea0e',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [chi_1, chi_2],
		facebook: '',
		youtube: '',
		instagram: '',
		x: '',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'http://icehockey.sport.org.cn/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '2',
	},
	{
		abbreviation: 'EST',
		city: 'Tallin',
		country: 'Est',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '8',
		logo: est,
		name: 'Estonia',
		points: 0,
		rating: 63,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#0073cf',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [est_1, est_2, est_3],
		facebook: 'https://www.facebook.com/jaahokiliit',
		youtube:
			'https://www.youtube.com/channel/UCowlHHHnHnwhkdv4KPlwZpQ/videos',
		instagram: 'https://www.instagram.com/eestihoki/',
		x: 'https://twitter.com/eestihoki',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'http://www.eestihoki.ee/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '2',
	},
	{
		abbreviation: 'LIT',
		city: 'Vilnius',
		country: 'Lit',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '9',
		logo: lit,
		name: 'Lithuania',
		points: 0,
		rating: 67,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#000000',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [lit_1, lit_2],
		facebook: 'https://www.facebook.com/hockeyLietuva',
		youtube: '',
		instagram: 'https://www.instagram.com/hockeylietuva',
		x: '',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'http://www.hockey.lt/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '2',
	},
	{
		abbreviation: 'CRO',
		city: 'Zagreb',
		country: 'Cro',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '10',
		logo: cro,
		name: 'Croatia',
		points: 0,
		rating: 57,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#ffffff',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [cro_1, cro_2],
		facebook: 'https://www.facebook.com/CroHockey',
		youtube: '',
		instagram: 'https://www.instagram.com/cro_icehockey',
		x: 'https://twitter.com/CRO_Hockey',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'http://www.hshl.hr/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '2',
	},
	{
		abbreviation: 'SPA',
		city: 'Madrid',
		country: 'Spa',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '11',
		logo: spa,
		name: 'Spain',
		points: 0,
		rating: 58,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#0000f0',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [spa_1, spa_2],
		facebook: 'https://www.facebook.com/fedhielo',
		youtube: 'https://www.youtube.com/channel/UCuys7LUNfFcwwToSG3yMocw',
		instagram: 'https://www.instagram.com/fedhielo',
		x: 'https://twitter.com/fedhielo',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'https://www.rfedh.es/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '2',
	},
	{
		abbreviation: 'UKR',
		city: 'Kyiv',
		country: 'Ukr',
		game_counter: 0,
		goals_against: 0,
		goals_diff: 0,
		goals_for: 0,
		id: '12',
		logo: ukr,
		name: 'Ukraine',
		points: 0,
		rating: 65,
		play_off_rank: 0,
		play_off_round_wins: 0,
		loses: 0,
		loses_ot: 0,
		wins: 0,
		color: '#ffffff',
		isPlayOff: false,
		status: '',
		curStatusLength: 0,
		chartData: [],
		chartLabels: [],
		photos: [ukr_1, ukr_2],
		facebook: 'https://www.facebook.com/fhu.com.ua',
		youtube: '',
		instagram: 'https://www.instagram.com/fhu_official/',
		x: '',
		threads: '',
		tiktok: '',
		snapchat: '',
		linkedin: '',
		website: 'https://fhu.com.ua/',
		twitch: '',
		points_percentage: 0,
		conferenceId: '1',
	},
	// {
	//   abbreviation: "NET",
	//   city: "Amsterdam",
	//   country: "Net",
	//   game_counter: 0,
	//   goals_against: 0,
	//   goals_diff: 0,
	//   goals_for: 0,
	//   id: '10',
	//   logo: net,
	//   name: "Netherlands",
	//   points: 0,
	//   rating: 60,
	//   play_off_rank: 0,
	//   play_off_round_wins: 0,
	//   loses: 0,
	//   loses_ot: 0,
	//   wins: 0,
	//   color: "#ff5f00",
	//  isPlayOff: false,
	//   status: "",
	//   curStatusLength: 0,
	//   chartData: [],
	// chartLabels: [],
	// facebook: 'https://www.facebook.com/IJshockeyNederland',
	// youtube: '',
	// instagram: 'https://www.instagram.com/ijshockeynederland',
	// x: 'https://twitter.com/IJshockeyNED',
	// threads: '',
	// tiktok: '',
	// snapchat: '',
	// linkedin: '',
	// website: 'http://www.ijnl.nl/',
	// twitch: '',
	//points_percentage: 0,conferenceId: '1',}
];

import { schedule, scheduleList } from './schedule';
import { Teams } from './types';

describe('schedule generation', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    const createMockTeam = (id: string, conference_id: string = ''): Teams => {
        return {
            id,
            conference_id,
            abbreviation: id,
            city: 'Test City',
            country: 'Test Country',
            game_counter: 0,
            goals_against: 0,
            goals_diff: 0,
            goals_for: 0,
            logo: 'test.png',
            loses: 0,
            loses_ot: 0,
            name: `Team ${id}`,
            points: 0,
            rating: 0,
            wins: 0,
            play_off_rank: 0,
            play_off_round_wins: 0,
            play_off_round_results: [],
            color: '#fff',
            is_playoff: false,
            status: '',
            cur_status_length: 0,
            chart_data: [],
            game_results: [],
            photos: [],
            facebook: '',
            youtube: '',
            instagram: '',
            x: '',
            threads: '',
            tiktok: '',
            snapchat: '',
            linkedin: '',
            website: '',
            twitch: '',
            points_percentage: 0,
        } as Teams; // Use type assertion since we only care about id and conference_id for schedule generation
    };

    const teams: Teams[] = [
        createMockTeam('t1', '1'),
        createMockTeam('t2', '1'),
        createMockTeam('t3', '2'),
        createMockTeam('t4', '2'),
    ];

    it('should generate a one-round schedule for conferences when id is "1"', () => {
        schedule(teams, '1');

        // Group A (conference_id = '1'): t1, t2 -> 1 game
        // Group B (conference_id = '2'): t3, t4 -> 1 game
        // Total games = 1 + 1 = 2 games
        expect(scheduleList.length).toBe(2);
        expect(localStorage.getItem('gameIndex')).toBe('0');
        expect(JSON.parse(localStorage.getItem('teamsList') as string)).toEqual(teams);
        expect(JSON.parse(localStorage.getItem('scheduleList') as string).length).toBe(2);
    });

    it('should generate a one-round schedule for conferences when id is "2"', () => {
        schedule(teams, '2');
        expect(scheduleList.length).toBe(2);
    });

    it('should generate an NHL/EHL schedule when id is "3" or "4"', () => {
        schedule(teams, '3');

        // N=4 teams.
        // Inter-conference double round-robin: 4 * 3 = 12 games.
        // Plus one-round within same conference:
        // Conf 1: t1, t2 -> 1 game
        // Conf 2: t3, t4 -> 1 game
        // Total games = 12 + 1 + 1 = 14 games
        expect(scheduleList.length).toBe(14);
    });

    it('should generate a double double-round schedule for other ids', () => {
        schedule(teams, 'default');

        // N=4 teams.
        // Double round-robin: 4 * 3 = 12 games.
        // But it concats two of such schedules: 12 + 12 = 24 games.
        expect(scheduleList.length).toBe(24);
    });

    it('should handle empty teams list gracefully', () => {
        schedule([], '1');
        expect(scheduleList.length).toBe(0);
        expect(JSON.parse(localStorage.getItem('teamsList') as string)).toEqual([]);
    });
});

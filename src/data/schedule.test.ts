import { schedule, scheduleList } from './schedule';
import { Teams } from './types';

describe('schedule generation', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    const createMockTeam = (id: string, conference_id: string = '', division_id: string = ''): Teams => {
        return {
            id,
            conference_id,
            division_id,
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
        } as Teams;
    };

    // Use unique divisions for the 4 mock teams so they don't accidentally play division games against each other
    const teams: Teams[] = [
        createMockTeam('t1', '1', '1'),
        createMockTeam('t2', '1', '2'),
        createMockTeam('t3', '2', '3'),
        createMockTeam('t4', '2', '4'),
    ];

    it('should generate a one-round schedule for conferences when id is "1"', () => {
        schedule(teams, '1');
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
        // Generate a 32-team league (2 conferences, 4 divisions) to test the 84 games per team requirement
        const nhlTeams: Teams[] = [];
        let idCounter = 1;
        for (const conf of ['1', '2']) {
            const confDivisions = conf === '1' ? ['1', '2'] : ['3', '4'];
            for (const div of confDivisions) {
                for (let i = 0; i < 8; i++) {
                    nhlTeams.push(createMockTeam(`team${idCounter++}`, conf, div));
                }
            }
        }

        schedule(nhlTeams, '3');

        // 32 teams playing 84 games each means 1344 total games (32 * 84 / 2)
        expect(scheduleList.length).toBe(1344);

        // Verify each team plays exactly 84 games
        const gamesPerTeam: Record<string, number> = {};
        nhlTeams.forEach(t => gamesPerTeam[t.id] = 0);
        
        scheduleList.forEach(game => {
            gamesPerTeam[game.home]++;
            gamesPerTeam[game.away]++;
        });

        Object.values(gamesPerTeam).forEach(count => {
            expect(count).toBe(84);
        });
    });

    it('should generate a double double-round schedule for other ids', () => {
        schedule(teams, 'default');
        expect(scheduleList.length).toBe(24);
    });

    it('should handle empty teams list gracefully', () => {
        schedule([], '1');
        expect(scheduleList.length).toBe(0);
        expect(JSON.parse(localStorage.getItem('teamsList') as string)).toEqual([]);
    });
});

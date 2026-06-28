import { renderHook, act } from '@testing-library/react';
import { useGameSimulation } from '../hooks/useGameSimulation';

describe('useGameSimulation', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(
      'teamsList',
      JSON.stringify([
        {
          id: 'team1',
          name: 'Team 1',
          abbreviation: 'T1',
          points: 10,
          game_counter: 5,
          wins: 5,
          loses_ot: 0,
          goals_diff: 10,
          status: '',
          rating: 80,
        },
        {
          id: 'team2',
          name: 'Team 2',
          abbreviation: 'T2',
          points: 8,
          game_counter: 5,
          wins: 4,
          loses_ot: 0,
          goals_diff: 5,
          status: '',
          rating: 75,
        },
      ])
    );
    localStorage.setItem('leagueId', JSON.stringify('1'));
    localStorage.setItem(
      'scheduleList',
      JSON.stringify([{ id: '1', home: 'team1', away: 'team2' }])
    );
    localStorage.setItem('gameIndex', JSON.stringify(0));
    localStorage.setItem('favoriteTeams', JSON.stringify(['team1']));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('initializes state correctly from localStorage', () => {
    const { result } = renderHook(() => useGameSimulation());

    expect(result.current.gameCounter).toBe(0);
    expect(result.current.leagueId).toBe('1');
    expect(result.current.teams.length).toBe(2);
    expect(result.current.scheduleList.length).toBe(1);
    expect(result.current.isFavoriteGame(result.current.scheduleList[0])).toBe(true);
  });

  it('updates counter correctly', () => {
    const { result } = renderHook(() => useGameSimulation());

    act(() => {
      result.current.updateCounter();
    });

    expect(result.current.gameCounter).toBe(1);
    expect(result.current.isSimulate).toBe(false);
  });

  it('simulates game and updates state when buttonHandler is called', () => {
    const { result } = renderHook(() => useGameSimulation());

    act(() => {
      result.current.buttonHandler();
    });

    expect(result.current.homeGoals).toBeGreaterThanOrEqual(0);
    expect(result.current.awayGoals).toBeGreaterThanOrEqual(0);
    expect(result.current.isSimulate).toBe(true);
  });
});

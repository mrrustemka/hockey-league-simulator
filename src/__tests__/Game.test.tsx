import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Game from '../components/Game';
import * as useGameSimulationModule from '../hooks/useGameSimulation';

jest.mock('../hooks/useGameSimulation');

describe('Game Component', () => {
  const mockUseGameSimulation = useGameSimulationModule.useGameSimulation as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockTeams = [
    { id: 'team1', name: 'Team1', abbreviation: 'T1', points_percentage: 0, color: '#000000', status: '' },
    { id: 'team2', name: 'Team2', abbreviation: 'T2', points_percentage: 0, color: '#ffffff', status: '' }
  ];

  it('renders simulating status when game is not favorite', () => {
    mockUseGameSimulation.mockReturnValue({
      teams: mockTeams,
      teamsUpdate: [],
      leagueId: '1',
      scheduleList: [
        { id: '1', home: 'team1', away: 'team2' }
      ],
      gameCounter: 0,
      homeGoals: 0,
      awayGoals: 0,
      typeOfOt: '',
      isSimulate: false,
      isFavoriteGame: () => false,
      buttonHandler: jest.fn(),
      updateCounter: jest.fn(),
      getPlayOffTeams: jest.fn(),
    });

    render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );

    expect(screen.getByText(/Simulating/i)).toBeTruthy();
  });

  it('renders controls panel when game is favorite', () => {
    mockUseGameSimulation.mockReturnValue({
      teams: mockTeams,
      teamsUpdate: [],
      leagueId: '1',
      scheduleList: [
        { id: '1', home: 'team1', away: 'team2' }
      ],
      gameCounter: 0,
      homeGoals: 0,
      awayGoals: 0,
      typeOfOt: '',
      isSimulate: false,
      isFavoriteGame: () => true,
      buttonHandler: jest.fn(),
      updateCounter: jest.fn(),
      getPlayOffTeams: jest.fn(),
    });

    render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );

    expect(screen.getByRole('button', { name: /Simulate/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Next/i })).toBeTruthy();
  });

  it('renders start play-off when schedule is completed', () => {
    mockUseGameSimulation.mockReturnValue({
      teams: mockTeams,
      teamsUpdate: [],
      leagueId: '1',
      scheduleList: [
        { id: '1', home: 'team1', away: 'team2' }
      ],
      gameCounter: 1, // Counter equals schedule length
      homeGoals: 0,
      awayGoals: 0,
      typeOfOt: '',
      isSimulate: false,
      isFavoriteGame: () => false,
      buttonHandler: jest.fn(),
      updateCounter: jest.fn(),
      getPlayOffTeams: jest.fn(),
    });

    render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );

    expect(screen.getByRole('button', { name: /Start Play-Off/i })).toBeTruthy();
  });
});

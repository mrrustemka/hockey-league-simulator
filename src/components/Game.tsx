import { Button, Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Schedule, Teams } from '../data/types';
import Header from './Header';
import PassedMatchups from './PassedMatchups';
import SeasonSeries from './SeasonSeries';
import UpcomingGames from './UpcomingGames';
import Standings from './Standings';
import MatchupCards from './MatchupCards';
import SimulationControls from './SimulationControls';
import { useGameSimulation } from '../hooks/useGameSimulation';
import { champs } from '../data/champs';
import '../styles/Game.css';

const { Title } = Typography;

function Game() {
  useEffect(() => {
    document.title = 'Hockey Simulator - Season Simulation';
    window.scrollTo(0, 0);
  }, []);

  const {
    teams,
    teamsUpdate,
    leagueId,
    scheduleList,
    gameCounter,
    homeGoals,
    awayGoals,
    typeOfOt,
    isSimulate,
    isFavoriteGame,
    buttonHandler,
    updateCounter,
    getPlayOffTeams,
  } = useGameSimulation();

  const League = champs.find((champ) => champ.id === leagueId);

  if (scheduleList && gameCounter < scheduleList.length) {
    const game = scheduleList[gameCounter];
    const away: Teams = teams.find((element: { id: string }) => element.id === game.away) as Teams;
    const home: Teams = teams.find((element: { id: string }) => element.id === game.home) as Teams;
    
    const homePointsPercentage: string = home.points_percentage
      .toFixed(3)
      .replace(/^0/, '');
    const awayPointsPercentage: string = away.points_percentage
      .toFixed(3)
      .replace(/^0/, '');

    const isFavorite = isFavoriteGame(game);

    return (
      <>
        <Header id={leagueId} />
        <Row className='layout'>
          <Col className='layout__content' span={14}>
            <Standings teamsUpdate={teamsUpdate} League={League} leagueId={leagueId} />
          </Col>
          <Col className='layout__side-panel' span={10}>
            <Row>
              <Card className='controls-panel__counter'>
                <Col span={24}>
                  <Title level={3}>
                    Games Left: {scheduleList.length - gameCounter}
                  </Title>
                </Col>
              </Card>
            </Row>
            <Row className='cards-row'>
              <MatchupCards
                home={home}
                away={away}
                homePointsPercentage={homePointsPercentage}
                awayPointsPercentage={awayPointsPercentage}
              />
            </Row>
            
            <SimulationControls
              isSimulate={isSimulate}
              awayGoals={awayGoals}
              homeGoals={homeGoals}
              typeOfOt={typeOfOt}
              isFavorite={isFavorite}
              buttonHandler={buttonHandler}
              updateCounter={updateCounter}
            />

            {isFavorite ? (
              <Row className='season-series slide-in-left'>
                <SeasonSeries
                  games={scheduleList.filter(
                    (g: Schedule) =>
                      (g.away === away.id && g.home === home.id) ||
                      (g.away === home.id && g.home === away.id)
                  )}
                  teams={teams}
                />
              </Row>
            ) : null}

            <div className='games-info'>
              {scheduleList.slice(Math.max(0, gameCounter - 6), gameCounter).length > 0 && (
                <Row className='passed-games slide-in-left'>
                  <PassedMatchups
                    schedule={scheduleList
                      .slice(Math.max(0, gameCounter - 6), gameCounter)
                      .reverse()}
                  />
                </Row>
              )}
              {scheduleList.slice(gameCounter + 1).length > 0 && (
                <Row className='upcoming-games slide-in-left'>
                  <UpcomingGames
                    schedule={scheduleList.slice(gameCounter + 1, gameCounter + 7)}
                    teams={teams}
                  />
                </Row>
              )}
            </div>
          </Col>
        </Row>
      </>
    );
  } else {
    return (
      <div className='playoff'>
        <Header id={leagueId} />
        <Row className='playoff__container'>
          <Col span={14} className='playoff__container-panel'>
            <Standings teamsUpdate={teamsUpdate} League={League} leagueId={leagueId} />
          </Col>
          <Col span={10}>
            <Link to='playoff'>
              <Button
                className='playoff__start-play-off'
                size='large'
                onClick={() => {
                  getPlayOffTeams();
                }}
              >
                Start Play-Off
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Game;

import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { GameResult, Schedule, Teams } from "../Data/types";
import { scheduleList } from "../Data/schedule";
import Sheet from "./Sheet";
import UpcomingGame from "./UpcomingGame";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const { Title } = Typography;

function Game() {
  const location = useLocation();
  const teams = location.state.teams;
  let [teamsUpdate, setTeamsUpdate] = useState<Teams[]>(teams || {});
  let [gameCounter, setGameCounter] = useState<number>(0);
  let [homeGoals, setHomeGoals] = useState<number>(0);
  let [awayGoals, setAwayGoals] = useState<number>(0);
  let [typeOfOt, setTypeOfOt] = useState<string>("");
  const [isSimulate, setIsSimulate] = useState<boolean>(false);
  const [gameIndex, setGameIndex] = useState<number>(0);
  const playOffTeam: number =
    teamsUpdate.length > 16
      ? 16
      : teamsUpdate.length > 8
      ? 8
      : teamsUpdate.length > 4
      ? 4
      : 2;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateCounter = () => {
    setGameCounter(gameCounter + 1);
    setIsSimulate(false);
  };

  const buttonHandler = () => {
    const lastGame: GameResult = Simulate(scheduleList[gameCounter]);

    if (lastGame) {
      setHomeGoals(lastGame.homeGoals);
      setAwayGoals(lastGame.awayGoals);
      setTypeOfOt(lastGame.overtime);
    }
  };

  function Simulate(game: Schedule) {
    setGameIndex(scheduleList.indexOf(game) + 1);
    let home: Teams = {
      abbreviation: "",
      city: "",
      country: "",
      game_counter: 0,
      goals_against: 0,
      goals_diff: 0,
      goals_for: 0,
      id: 0,
      logo: "",
      loses: 0,
      loses_ot: 0,
      name: "",
      points: 0,
      rating: 0,
      wins: 0,
      play_off_rank: 0,
      play_off_round_wins: 0,
      color: "#ffffff",
      flag: "",
      isPlayOff: false
    };
    let away: Teams = {
      abbreviation: "",
      city: "",
      country: "",
      game_counter: 0,
      goals_against: 0,
      goals_diff: 0,
      goals_for: 0,
      id: 0,
      logo: "",
      loses: 0,
      loses_ot: 0,
      name: "",
      points: 0,
      rating: 0,
      wins: 0,
      play_off_rank: 0,
      play_off_round_wins: 0,
      color: "#ffffff",
      flag: "",
      isPlayOff: false
    };
    function getGoals(min: number, max: number, rating: number) {
      return Math.round(
        ((Math.floor(Math.random() * (max - min + 1)) + min) * rating) / 100
      );
    }

    function getTeamInfo(team: string): Teams {
      const foundTeam = teams.find(
        (element: { abbreviation: string }) => element.abbreviation === team
      );
      if (!foundTeam) {
        throw new Error(`Team with abbreviation "${team}" not found`);
      }
      return foundTeam;
    }

    const homeType: Teams | void = getTeamInfo(game.home);
    if (homeType !== undefined) {
      home = homeType;
    }

    const awayType: Teams | void = getTeamInfo(game.away);
    if (awayType !== undefined) {
      away = awayType;
    }

    //Goals
    let hGoals: number = getGoals(0, 9, home.rating);
    let aGoals: number = getGoals(0, 9, away.rating);

    // Make more realistic game score

    if (hGoals - aGoals >= 4 || aGoals - hGoals >= 4) {
      if (Math.random() < 0.9) {
        aGoals += 1;
      }
    }

    // OT or S/O
    let overtime: string = "";
    if (hGoals === aGoals) {
      if (Math.random() > 0.5) {
        hGoals += 1;
        // away.points += 1;
      } else {
        aGoals += 1;
        // home.points += 1;
      }
      if (Math.random() > 0.5) {
        overtime = "Overtime";
      } else {
        overtime = "Shootout";
      }
    }

    // Points

    if (hGoals > aGoals) {
      home.points += 2;
      home.wins += 1;
      if (overtime === "Shootout" || overtime === "Overtime") {
        away.loses_ot += 1;
        away.points += 1;
      } else {
        away.loses += 1;
        away.points += 0;
      }
    } else {
      away.points += 2;
      away.wins += 1;
      if (overtime === "Shootout" || overtime === "Overtime") {
        home.loses_ot += 1;
        home.points += 1;
      } else {
        home.loses += 1;
        home.points += 0;
      }
    }

    // Goals & Games Stats

    home.goals_for += hGoals;
    home.goals_against += aGoals;
    home.game_counter += 1;
    home.goals_diff += hGoals - aGoals;
    away.goals_for += aGoals;
    away.goals_against += hGoals;
    away.game_counter += 1;
    away.goals_diff += aGoals - hGoals;

    let result: GameResult = {
      home: home.abbreviation,
      away: away.abbreviation,
      homeGoals: hGoals,
      awayGoals: aGoals,
      overtime: overtime
    };
    const sortedTeams: Teams[] = teamsSort(teams);
    if (gameCounter + 1 === scheduleList.length) {
      sortedTeams.map((team: Teams, index: number) =>
        index < playOffTeam ? (team.isPlayOff = true) : { team }
      );
    } else {
      sortedTeams
        .slice(0, playOffTeam)
        .map((checkTeam: Teams, index: number) =>
          sortedTeams
            .slice(index + 1)
            .filter(
              (team: Teams) =>
                team.points +
                  2 * (sortedTeams.length - 1 - team.game_counter) >=
                checkTeam.points
            ).length +
            index +
            1 <=
          playOffTeam
            ? (checkTeam.isPlayOff = true)
            : { ...checkTeam }
        );
    }
    setTeamsUpdate(sortedTeams);
    setIsSimulate(true);
    return result;
  }

  function teamsSort(teams: Teams[]): Teams[] {
    if (scheduleList && gameCounter < scheduleList.length) {
      return teams.sort((team1, team2) => {
        if (team1.points !== team2.points) {
          return team2.points - team1.points;
        }

        if (team1.game_counter !== team2.game_counter) {
          return team1.game_counter - team2.game_counter;
        }

        if (team1.wins !== team2.wins) {
          return team2.wins - team1.wins;
        }

        if (team1.loses_ot !== team2.loses_ot) {
          return team2.loses_ot - team1.loses_ot;
        }

        if (team1.goals_diff !== team2.goals_diff) {
          return team2.goals_diff - team1.goals_diff;
        }

        return 0;
      });
    } else {
      // teamsUpdate.slice(0, playOffTeam).map((team: Teams) => {
      //   if (!team.isPlayOff) {
      //     return { ...team, isPlayOff: true };
      //   }
      //   return team;
      // });
      return teams;
    }
  }

  function getTeamRating(team: string): number {
    return (
      teams.findIndex(
        (element: { abbreviation: string }) => element.abbreviation === team
      ) + 1
    );
  }

  if (scheduleList && gameCounter < scheduleList.length) {
    const away: Teams = teams.find(
      (element: { abbreviation: string }) =>
        element.abbreviation === scheduleList[gameCounter].away
    );
    const home: Teams = teams.find(
      (element: { abbreviation: string }) =>
        element.abbreviation === scheduleList[gameCounter].home
    );
    const homeRating: number = getTeamRating(scheduleList[gameCounter].home);
    const awayRating: number = getTeamRating(scheduleList[gameCounter].away);
    const whiteColors: string[] = [
      "#000000",
      "#002255",
      "#0a1d3d",
      "#003366",
      "#15377e",
      "#000080",
      "#082868",
      "#001489"
    ];
    return (
      <div>
        <Header id={location.state.id} />
        <Row className="layout">
          <Col className="layout__content" span={14}>
            <Sheet teamsData={teamsUpdate} id={location.state.id} />
          </Col>
          <Col className="layout__side-panel" span={10}>
            <Row className="cards-row">
              <Col className="cards-row__card-column slide-in-left" span={12}>
                <Card
                  className="card card--hoverable"
                  hoverable
                  cover={
                    <img
                      alt={away.name + "Logo"}
                      src={away.logo}
                      loading="lazy"
                    />
                  }
                  style={{
                    backgroundColor: away.color
                  }}
                >
                  <Title
                    className="card__title"
                    level={4}
                    style={{
                      color:
                        away.color && whiteColors.includes(away.color)
                          ? "#ffffff"
                          : "initial"
                    }}
                  >
                    {away.abbreviation}
                  </Title>
                  <Title
                    level={5}
                    className="card__info card__info--position-away"
                    style={{
                      color:
                        away.color && whiteColors.includes(away.color)
                          ? "#ffffff"
                          : "initial",
                      opacity:
                        away.color && whiteColors.includes(away.color)
                          ? "1"
                          : "0.45"
                    }}
                  >
                    {awayRating === 1
                      ? awayRating + "st"
                      : awayRating === 2
                      ? awayRating + "nd"
                      : awayRating === 3
                      ? awayRating + "rd"
                      : awayRating + "th"}
                  </Title>
                  <Title
                    level={5}
                    className="card__info card__info--result-away"
                    style={{
                      color:
                        away.color && whiteColors.includes(away.color)
                          ? "#ffffff"
                          : "initial",
                      opacity:
                        away.color && whiteColors.includes(away.color)
                          ? "1"
                          : "0.45"
                    }}
                  >
                    {away.wins}-{away.loses}-{away.loses_ot}
                  </Title>
                </Card>
              </Col>
              <Col className="cards-row__card-column" span={12}>
                <Card
                  className="card card--hoverable"
                  hoverable
                  cover={<img alt={home.name + "Logo"} src={home.logo} />}
                  style={{
                    backgroundColor: home.color
                  }}
                >
                  <Title
                    className="card__title"
                    level={4}
                    style={{
                      color:
                        home.color && whiteColors.includes(home.color)
                          ? "#ffffff"
                          : "initial"
                    }}
                  >
                    {home.abbreviation}
                  </Title>
                  <Title
                    level={5}
                    className="card__info card__info--position-home"
                    style={{
                      color:
                        home.color && whiteColors.includes(home.color)
                          ? "#ffffff"
                          : "initial",
                      opacity:
                        home.color && whiteColors.includes(home.color)
                          ? "1"
                          : "0.45"
                    }}
                  >
                    {homeRating === 1
                      ? homeRating + "st"
                      : homeRating === 2
                      ? homeRating + "nd"
                      : homeRating === 3
                      ? homeRating + "rd"
                      : homeRating + "th"}
                  </Title>
                  <Title
                    level={5}
                    className="card__info card__info--result-home"
                    style={{
                      color:
                        home.color && whiteColors.includes(home.color)
                          ? "#ffffff"
                          : "initial",
                      opacity:
                        home.color && whiteColors.includes(home.color)
                          ? "1"
                          : "0.45"
                    }}
                  >
                    {home.wins}-{home.loses}-{home.loses_ot}
                  </Title>
                </Card>
              </Col>
            </Row>
            <Row className="simulate-panel">
              <Col span={24} className="simulate-panel__card">
                <Card hoverable>
                  <Title
                    className="simulate-panel__score slide-in-left"
                    level={2}
                  >
                    {isSimulate ? awayGoals : " "} -{" "}
                    {isSimulate ? homeGoals : " "}
                  </Title>
                  <Title className="simulate-panel__ot-type" level={3}>
                    {isSimulate ? typeOfOt : ""}
                  </Title>
                </Card>
              </Col>
            </Row>
            <Row className="controls-panel">
              <Col span={24} className="controls-panel__buttons">
                <Button
                  className="controls-panel__button controls-panel__button--simulate pulse"
                  onClick={buttonHandler}
                  disabled={isSimulate}
                  size="large"
                >
                  Simulate
                </Button>
                <Button
                  className="controls-panel__button controls-panel__button--next"
                  onClick={updateCounter}
                  disabled={!isSimulate}
                  size="large"
                >
                  Next Game
                </Button>
              </Col>
              <Card>
                <Col span={24} className="controls-panel__counter">
                  <Title level={3}>
                    {gameIndex}/{scheduleList.length}
                  </Title>
                </Col>
              </Card>
            </Row>
            {scheduleList.slice(gameCounter + 1).length > 0 ? (
              <Row className="upcoming-games slide-in-left">
                <Title className="upcoming-games__title" level={2}>
                  Upcoming Games
                </Title>
                <UpcomingGame
                  schedule={scheduleList.slice(
                    gameCounter + 1,
                    gameCounter + 7
                  )}
                  teams={teams}
                />
              </Row>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="playoff">
        <Header id={location.state.id} />
        <Row className="playoff__container">
          <Col span={14} className="playoff__container-panel">
            <Sheet teamsData={teamsUpdate} id={location.state.id} />
          </Col>
          <Col span={10}>
            <Link
              to="playoff"
              state={{
                teams: teamsUpdate.slice(0, playOffTeam),
                name: location.state.name,
                id: location.state.id
              }}
            >
              <Button className="playoff__start-play-off" size="large">
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

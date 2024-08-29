import React, { useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { teams } from "../data/teams";
import { GameResult, Schedule, Teams } from "../data/types";
import { schedule, scheduleList } from "../data/schedule";
import Sheet from "./Sheet";
import UpcomingGame from "./UpcomingGame";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const { Meta } = Card;
const { Title } = Typography;
schedule();

function Game() {
  let [teamsUpdate, setTeamsUpdate] = useState<Teams[]>(teams);
  let [gameCounter, setGameCounter] = useState<number>(0);
  let [homeGoals, setHomeGoals] = useState<number>(0);
  let [awayGoals, setAwayGoals] = useState<number>(0);
  let [typeOfOt, setTypeOfOt] = useState<string>("");
  const [isSimulate, setIsSimulate] = useState<boolean>(false);
  const [gameIndex, setGameIndex] = useState<number>(0);
  const [isPlayOff, setIsPlayOff] = useState(false);

  const updateCounter = () => {
    setGameCounter(gameCounter + 1);
    setIsSimulate(false);
    if (scheduleList.length - 1 === gameCounter) {
      setIsPlayOff(true);
    }
  };

  const buttonHandler = () => {
    let lastGame: GameResult | undefined = Simulate(scheduleList[gameCounter]);
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
    };
    function getGoals(min: number, max: number, rating: number) {
      return Math.round(((Math.floor(Math.random() * (max - min + 1)) + min) * rating) / 100);

    }

    function getTeamInfo(team: string): any {
      return teams.find(
        (element) => element.abbreviation === team
      );
    }

    const homeType: Teams | undefined = getTeamInfo(game.home);
    if (homeType !== undefined) {
      home = homeType;
    }

    const awayType: Teams | undefined = getTeamInfo(game.away);
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
        away.points += 1
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
      overtime: overtime,
    };
    setTeamsUpdate(teamsSort(teams));
    setIsSimulate(true);
    return result;
  }

  function teamsSort(teams: Teams[]) {
    return teams.sort((team1, team2) =>
      team1.points > team2.points
        ? -1
        : team1.points === team2.points
        ? team1.game_counter < team2.game_counter
          ? -1
          : team1.game_counter === team2.game_counter
          ? team1.goals_diff > team2.goals_diff
            ? -1
              ? team1.goals_diff === team2.goals_diff
                ? team1.rating > team2.rating
                  ? -1
                  : 1
                : 1
                ? -1
                : 1
              : 1
            : 1
          : 1
        : 1
    );
  }

  function getTeamRating(team: string): number {
    return teams.findIndex((element) => element.abbreviation === team) + 1;
  } 

  if (scheduleList && gameCounter < scheduleList.length) {
    let homeRating: number = getTeamRating(scheduleList[gameCounter].home);
    let awayRating: number = getTeamRating(scheduleList[gameCounter].away);
    return (
      <div>
        <Row>
          <Col span={14}>
            <Sheet teamsData={teamsUpdate} />
          </Col>
          <Col span={10}>
            <Row className="row-panel-cards">
              <Col span={12}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={
                        teams.find(
                          (element) =>
                            element.abbreviation ===
                            scheduleList[gameCounter].away
                        )?.name + "Logo"
                      }
                      src={
                        teams.find(
                          (element) =>
                            element.abbreviation ===
                            scheduleList[gameCounter].away
                        )?.logo
                      }
                    />
                  }
                >
                  <Title level={4}>
                    {
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].away
                      )?.abbreviation
                    }
                  </Title>
                  <Title
                    level={5}
                    className="row-panel-cards-info-position-away"
                  >
                    {awayRating === 1
                      ? awayRating + "st"
                      : awayRating === 2
                      ? awayRating + "nd"
                      : awayRating === 3
                      ? awayRating + "rd"
                      : awayRating + "th"}
                  </Title>
                  <Title level={5} className="row-panel-cards-info-result-away">
                    {
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].away
                      )?.wins
                    }
                    -
                    {
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].away
                      )?.loses
                    }
                    -
                    {
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].away
                      )?.loses_ot
                    }
                  </Title>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={
                        teams.find(
                          (element) =>
                            element.abbreviation ===
                            scheduleList[gameCounter].home
                        )?.name + "Logo"
                      }
                      src={
                        teams.find(
                          (element) =>
                            element.abbreviation ===
                            scheduleList[gameCounter].home
                        )?.logo
                      }
                    />
                  }
                >
                  <Title level={4}>
                    {
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].home
                      )?.abbreviation
                    }
                  </Title>
                  <Title
                    level={5}
                    className="row-panel-cards-info-position-home"
                  >
                    {homeRating === 1
                      ? homeRating + "st"
                      : homeRating === 2
                      ? homeRating + "nd"
                      : homeRating === 3
                      ? homeRating + "rd"
                      : homeRating + "th"}
                  </Title>
                  <Title level={5} className="row-panel-cards-info-result-home">
                    {
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].home
                      )?.wins
                    }
                    -
                    {
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].home
                      )?.loses
                    }
                    -
                    {
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].home
                      )?.loses_ot
                    }
                  </Title>
                </Card>
              </Col>
            </Row>
            <Row className="panel-score">
              <Col span={24} className="panel-simulate">
                <Card hoverable>
                  <Title>{isSimulate ? awayGoals : " "}</Title>
                  <Title>-</Title>
                  <Title>{isSimulate ? homeGoals : " "}</Title>
                  <Title level={3}>{isSimulate ? typeOfOt : ""}</Title>
                </Card>
              </Col>
            </Row>
            <Row className="row-panel-simulate">
              <Col span={24} className="panel-simulate">
                <Button
                  onClick={buttonHandler}
                  disabled={isSimulate}
                  size="large"
                >
                  Simulate
                </Button>
                <Button
                  onClick={updateCounter}
                  disabled={!isSimulate}
                  size="large"
                >
                  Next Game
                </Button>
              </Col>
              <Card>
                <Col span={24} className="panel-counter">
                  <Title level={3}>
                    {gameIndex}/{scheduleList.length}
                  </Title>
                </Col>
              </Card>
            </Row>
            <Row className="upcoming-games">
              <Title level={2}>Upcoming Games</Title>
              <UpcomingGame
                schedule={scheduleList.slice(gameCounter + 1, gameCounter + 7)}
              />
            </Row>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="champion">
        <Row className="champion-container">
          <Col span={14} className="champion-container-panel">
            <Sheet teamsData={teamsUpdate} />
          </Col>
          <Col span={10} className="champion-container-panel">
            {/* <Title level={2} className="champion-container-panel">
              There are no Games. The Champion is
              <div>
                <img
                  src={teamsUpdate[0].logo}
                  alt={teamsUpdate[0].name + " Logo"}
                />
                {" " + teamsUpdate[0].name}
              </div>
            </Title> */}
            <Title level={2} className="champion-container-panel">
              <Link to="playoff" state={{ teams: teamsUpdate.slice(0, teamsUpdate.length >= 16 ? 16 : teamsUpdate.length >= 8 ? 8 : teamsUpdate.length >= 4 ? 4 : 2) }}>Start Play-Off</Link>
            </Title>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Game;
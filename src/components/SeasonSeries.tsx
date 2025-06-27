import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { GameResult, Schedule, Teams } from '../data/types';
import '../Styles/SeasonSeries.css';

const { Title } = Typography;

function SeasonSeries(props: { games: Schedule[]; teams: Teams[] }) {
  return (
    <>
      <Title className='season-series__title' level={2}>
        Season Series
      </Title>
      <div
        className='season-series__cards'
        style={{ gridTemplateColumns: `repeat(${props.games.length}, 1fr)` }}
      >
        {props.games.map((game) => (
          <Card
            hoverable
            className='season-series-card'
            key={game.id}
            cover={
              <div className='season-series-card__container'>
                <h2 className='season-series-card__status--away'>
                  {
                    props.teams
                      .find((team) => team.id === game.away)
                      ?.game_results?.find(
                        (result: GameResult) => result.id === game.id
                      )?.away_status
                  }
                </h2>
                <h2 className='season-series-card__score--away'>
                  {
                    props.teams
                      .find((team) => team.id === game.away)
                      ?.game_results?.find(
                        (result: GameResult) => result.id === game.id
                      )?.away_goals
                  }
                </h2>
                <Link
                  className='season-series-card__team-link--away'
                  to={`/hockey-league-simulator/season/team/${
                    props.teams.find((team) => team.id === game.away)?.id
                  }`}
                >
                  <img
                    className='season-series-card__team-logo season-series-card__team-logo--away'
                    alt={
                      props.teams.find((team) => team.id === game.away)?.name +
                      ' Logo'
                    }
                    src={
                      props.teams.find((team) => team.id === game.away)?.logo
                    }
                    loading='lazy'
                  />
                </Link>
                <h3 className='season-series-card__vs'>@</h3>
                <Link
                  className='season-series-card__team-link--home'
                  to={`/hockey-league-simulator/season/team/${
                    props.teams.find((team) => team.id === game.home)?.id
                  }`}
                >
                  <img
                    className='season-series-card__team-logo season-series-card__team-logo--home'
                    alt={
                      props.teams.find((team) => team.id === game.home)?.name +
                      ' Logo'
                    }
                    src={
                      props.teams.find((team) => team.id === game.home)?.logo
                    }
                    loading='lazy'
                  />
                </Link>
                <h2 className='season-series-card__status--home'>
                  {
                    props.teams
                      .find((team) => team.id === game.home)
                      ?.game_results?.find(
                        (result: GameResult) => result.id === game.id
                      )?.home_status
                  }
                </h2>
                <h3 className='season-series-card__overtime'>
                  {
                    props.teams
                      .find((team) => team.id === game.home)
                      ?.game_results?.find(
                        (result: GameResult) => result.id === game.id
                      )?.overtime
                  }
                </h3>
                <h2 className='season-series-card__score--home'>
                  {
                    props.teams
                      .find((team) => team.id === game.home)
                      ?.game_results?.find(
                        (result: GameResult) => result.id === game.id
                      )?.home_goals
                  }
                </h2>
              </div>
            }
          ></Card>
        ))}
      </div>
    </>
  );
}

export default SeasonSeries;

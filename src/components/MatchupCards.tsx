import { Card, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Teams } from '../data/types';
import { whiteTeams } from '../data/whiteList';

const { Title } = Typography;

interface MatchupCardsProps {
  home: Teams;
  away: Teams;
  homePointsPercentage: string;
  awayPointsPercentage: string;
}

function MatchupCards({ home, away, homePointsPercentage, awayPointsPercentage }: MatchupCardsProps) {
  return (
    <>
      <Col className='cards-row__card-column slide-in-left' span={12}>
        <Link to={`/hockey-league-simulator/season/team/${away.id}`}>
          <Card
            className='card card--hoverable'
            hoverable
            cover={<img alt={away.name + 'Logo'} src={away.logo} loading='lazy' />}
            style={{
              backgroundColor: away.color,
            }}
          >
            <Title
              className='card__title'
              level={4}
              style={{
                color: away.color && whiteTeams.includes(away.color) ? '#ffffff' : 'initial',
              }}
            >
              {away.abbreviation}
            </Title>
            <Title
              level={5}
              className='card__info card__info--position-away'
              style={{
                color: away.color && whiteTeams.includes(away.color) ? '#ffffff' : 'initial',
                opacity: away.color && whiteTeams.includes(away.color) ? '1' : '0.45',
              }}
            >
              {awayPointsPercentage}
            </Title>
            <Title level={5} className='card__info card__info--status-away'>
              {away.status !== '' ? away.status : ''}
            </Title>
            <Title
              level={5}
              className='card__info card__info--result-away'
              style={{
                color: away.color && whiteTeams.includes(away.color) ? '#ffffff' : 'initial',
                opacity: away.color && whiteTeams.includes(away.color) ? '1' : '0.45',
              }}
            >
              {away.wins}-{away.loses}-{away.loses_ot}
            </Title>
          </Card>
        </Link>
      </Col>
      <Col className='cards-row__card-column' span={12}>
        <Link to={`/hockey-league-simulator/season/team/${home.id}`}>
          <Card
            className='card card--hoverable'
            hoverable
            cover={<img alt={home.name + 'Logo'} src={home.logo} loading='lazy' />}
            style={{
              backgroundColor: home.color,
            }}
          >
            <Title
              className='card__title'
              level={4}
              style={{
                color: home.color && whiteTeams.includes(home.color) ? '#ffffff' : 'initial',
              }}
            >
              {home.abbreviation}
            </Title>
            <Title
              level={5}
              className='card__info card__info--position-home'
              style={{
                color: home.color && whiteTeams.includes(home.color) ? '#ffffff' : 'initial',
                opacity: home.color && whiteTeams.includes(home.color) ? '1' : '0.45',
              }}
            >
              {homePointsPercentage}
            </Title>
            <Title level={5} className='card__info card__info--status-home'>
              {home.status !== '' ? home.status : ''}
            </Title>
            <Title
              level={5}
              className='card__info card__info--result-home'
              style={{
                color: home.color && whiteTeams.includes(home.color) ? '#ffffff' : 'initial',
                opacity: home.color && whiteTeams.includes(home.color) ? '1' : '0.45',
              }}
            >
              {home.wins}-{home.loses}-{home.loses_ot}
            </Title>
          </Card>
        </Link>
      </Col>
    </>
  );
}

export default MatchupCards;

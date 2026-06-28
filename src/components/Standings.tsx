import { Col, Typography } from 'antd';
import Sheet from './Sheet';
import Legend from './Legend';
import { Teams } from '../data/types';

const { Title } = Typography;

interface StandingsProps {
  teamsUpdate: Teams[];
  League: any;
  leagueId: string;
}

function Standings({ teamsUpdate, League, leagueId }: StandingsProps) {
  if ((leagueId === '3' || leagueId === '4') && League?.divisions && League.conferences) {
    return (
      <>
        <Title level={3} className='standings__title standings__title--level-3'>
          {League.conferences[0].name}
        </Title>
        <Title level={5} className='standings__title standings__title--level-5'>
          {League.divisions[0].name}
        </Title>
        <Sheet
          teamsData={teamsUpdate.filter((team) => team.division_id === '1').slice(0, 3)}
          id={leagueId}
        />
        <Title level={5} className='standings__title standings__title--level-5'>
          {League.divisions[1].name}
        </Title>
        <Sheet
          teamsData={teamsUpdate.filter((team) => team.division_id === '2').slice(0, 3)}
          id={leagueId}
        />
        <Title level={5} className='standings__title standings__title--level-5'>
          Wild Card
        </Title>
        <Sheet
          teamsData={teamsUpdate
            .filter((team) => team.division_id === '1' || team.division_id === '2')
            .reduce<Teams[][]>((acc, team) => {
              if (team.division_id === '1') {
                acc[0].push(team);
              } else {
                acc[1].push(team);
              }
              return acc;
            }, [[], []])
            .map((arr) => arr.slice(3))
            .flat()}
          id={leagueId}
        />
        <Title level={3} className='standings__title standings__title--level-3'>
          {League.conferences[1].name}
        </Title>
        <Title level={5} className='standings__title standings__title--level-5'>
          {League.divisions[2].name}
        </Title>
        <Sheet
          teamsData={teamsUpdate.filter((team) => team.division_id === '3').slice(0, 3)}
          id={leagueId}
        />
        <Title level={5} className='standings__title standings__title--level-5'>
          {League.divisions[3].name}
        </Title>
        <Sheet
          teamsData={teamsUpdate.filter((team) => team.division_id === '4').slice(0, 3)}
          id={leagueId}
        />
        <Title level={5} className='standings__title standings__title--level-5'>
          Wild Card
        </Title>
        <Sheet
          teamsData={teamsUpdate
            .filter((team) => team.division_id === '3' || team.division_id === '4')
            .reduce<Teams[][]>((acc, team) => {
              if (team.division_id === '3') {
                acc[0].push(team);
              } else {
                acc[1].push(team);
              }
              return acc;
            }, [[], []])
            .map((arr) => arr.slice(3))
            .flat()}
          id={leagueId}
        />
        <Legend />
      </>
    );
  } else if ((leagueId === '1' || leagueId === '2' || leagueId === '11') && League?.conferences) {
    return (
      <>
        <Title level={3} className='standings__title standings__title--level-3'>
          {League.conferences[0].name}
        </Title>
        <Sheet teamsData={teamsUpdate.filter((team) => team.conference_id === '1')} id={leagueId} />
        <Title level={3} className='standings__title standings__title--level-3'>
          {League.conferences[1].name}
        </Title>
        <Sheet teamsData={teamsUpdate.filter((team) => team.conference_id === '2')} id={leagueId} />
        <Legend />
      </>
    );
  } else {
    return (
      <>
        <Sheet teamsData={teamsUpdate} id={leagueId} />
        <Legend />
      </>
    );
  }
}

export default Standings;

import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { Teams } from '../data/types';
import '../styles/Sheet.css';

function Sheet(props: { teamsData: Teams[]; id: string }) {
  let rank: number = 0;
  const worldChamps: string[] = ['1', '2'];
  const internationalChamps: string[] = ['3', '4', '10'];
  const totalTeams: number = JSON.parse(
    localStorage.getItem('teamsList') || '[]'
  ).length;
  const favorites: string[] = JSON.parse(
    localStorage.getItem('favoriteTeams') || '[]'
  );

  return (
    <>
      <Table
        dataSource={props.teamsData.map((team, index) => ({
          ...team,
          key: index,
        }))}
        pagination={false}
        size='small'
        rowKey={(record) => record.name}
        rowClassName={(team, index) => {
          return favorites.includes(team?.id ?? '') ? 'favorite' : '';
        }}
      >
        <Table.Column
          title='Rank'
          dataIndex=''
          key='rank'
          render={() => {
            rank++;
            return (
              <div key={uuidv4()} className='table-slide-in-left'>
                <p className='table__column-rank'>
                  {rank > props.teamsData.length ? (rank = 0) : rank}
                </p>
              </div>
            );
          }}
          className='table__column table__column--rank'
        />
        <Table.Column
          title='Team'
          dataIndex='name'
          key='team'
          className='table__column table__column--name'
          render={(dataIndex) => {
            const team = props.teamsData.find(
              (item: { name: string }) => item.name === dataIndex
            );

            const logo = team?.logo;
            const is_playoff = team?.is_playoff;
            const status = team?.status;
            const teamId = team?.id;
            const postFix = favorites.includes(team?.id ?? '')
              ? '\u{2B50}'
              : '  ';

            return (
              <div className='table__team' key={uuidv4()}>
                {is_playoff && (
                  <div className='table__column-name--is_playoff'>x</div>
                )}
                <img
                  src={logo}
                  alt={`${dataIndex} Logo`}
                  width='16px'
                  className='table__team-logo'
                  loading='lazy'
                />
                <Link
                  to={`/hockey-league-simulator/season/team/${teamId}`}
                  className='table__column-name'
                >
                  {` ${dataIndex}`}
                </Link>
                {' ' + postFix + ' '} {status}
              </div>
            );
          }}
        />
        <Table.Column
          title='Rating'
          dataIndex='rating'
          key='rating'
          sorter={(a: { rating: number }, b: { rating: number }) =>
            a.rating - b.rating
          }
          className='table__column table__column--rating'
        />
        {worldChamps.includes(props.id) ? (
          <></>
        ) : (
          <Table.Column
            title='City'
            key='city'
            className='table__column table__column--city'
            render={(record) => {
              const { city, flag } = record;
              return (
                <>
                  {internationalChamps.includes(props.id) ? (
                    <img
                      src={flag}
                      alt={city + ' Logo'}
                      width={'16px'}
                      className='table__column-flag'
                      loading='lazy'
                    />
                  ) : (
                    <></>
                  )}
                  <p className='table__column-city'>{' ' + city}</p>
                </>
              );
            }}
          />
        )}
        <Table.Column
          title='GP'
          dataIndex='game_counter'
          key='game_counter'
          defaultSortOrder='descend'
          sorter={{
            compare: (
              a: { game_counter: number },
              b: { game_counter: number }
            ) => b.game_counter - a.game_counter,
            multiple: 4,
          }}
          render={(gameCounter) => {
            let className = 'table__column-games';
            if (
              gameCounter >
              totalTeams * (props.id === '1' || props.id === '2' ? 0.75 : 1.5)
            ) {
              className = 'table__column-games--high';
            } else if (
              gameCounter >
              totalTeams * (props.id === '1' || props.id === '2' ? 0.5 : 1)
            ) {
              className = 'table__column-games--medium';
            } else if (
              gameCounter >
              totalTeams * (props.id === '1' || props.id === '2' ? 0.25 : 0.5)
            ) {
              className = 'table__column-games--low';
            }

            return (
              <div className={className} key={uuidv4()}>
                <p>{gameCounter}</p>
              </div>
            );
          }}
          className='table__column table__column--games'
        />
        <Table.Column
          title='W'
          dataIndex='wins'
          key='wins'
          defaultSortOrder='descend'
          sorter={{
            compare: (a: { wins: number }, b: { wins: number }) =>
              a.wins - b.wins,
            multiple: 3,
          }}
          className='table__column table__column--wins'
        />
        <Table.Column
          title='L'
          dataIndex='loses'
          key='loses'
          className='table__column table__column--loses'
        />
        <Table.Column
          title='OT'
          dataIndex='loses_ot'
          key='loses_ot'
          defaultSortOrder='descend'
          sorter={{
            compare: (a: { loses_ot: number }, b: { loses_ot: number }) =>
              b.loses_ot - a.loses_ot,
            multiple: 2,
          }}
          className='table__column table__column--loses-ot'
        />
        <Table.Column
          title='PTS'
          dataIndex='points'
          key='points'
          defaultSortOrder='descend'
          sorter={{
            compare: (a: { points: number }, b: { points: number }) =>
              a.points - b.points,
            multiple: 5,
          }}
          className='table__column table__column--points'
        />
        <Table.Column
          title='P%'
          dataIndex='points_percentage'
          key='points_percentage'
          className='table__column table__column--points_percentage'
          render={(points_percentage: number) =>
            points_percentage.toFixed(3).replace(/^0/, '')
          }
        />
        <Table.Column
          title='DIFF'
          dataIndex='goals_diff'
          key='goals_diff'
          defaultSortOrder='descend'
          sorter={{
            compare: (a: { goals_diff: number }, b: { goals_diff: number }) =>
              a.goals_diff - b.goals_diff,
            multiple: 1,
          }}
          render={(dataIndex) => {
            return (
              <div key={uuidv4()}>
                <p
                  className={
                    dataIndex > 0
                      ? 'table__column-diff--positive'
                      : dataIndex === 0
                      ? ''
                      : 'table__column-diff--negative'
                  }
                >
                  {dataIndex > 0 ? '+' + dataIndex : dataIndex}
                </p>
              </div>
            );
          }}
          className='table__column table__column--diff'
        />
      </Table>
    </>
  );
}

export default Sheet;

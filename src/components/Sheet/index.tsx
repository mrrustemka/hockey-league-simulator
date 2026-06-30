import { useMemo } from 'react';
import { Table } from 'antd';
import { Teams } from '../../data/types';
import '../../styles/index.css';
import { WORLD_CHAMPS_IDS, INTERNATIONAL_CHAMPS_IDS } from './constants';
import { SheetProps } from './types';
import TeamCell from './TeamCell';
import CityCell from './CityCell';
import GpCell from './GpCell';
import DiffCell from './DiffCell';

function Sheet({ teamsData, id }: SheetProps) {
  const isWorldChamp = WORLD_CHAMPS_IDS.has(id);
  const isInternationalChamp = INTERNATIONAL_CHAMPS_IDS.has(id);

  const totalTeams = useMemo<number>(
    () => JSON.parse(localStorage.getItem('teamsList') || '[]').length,
    []
  );

  const favoritesSet = useMemo<Set<string>>(
    () => new Set(JSON.parse(localStorage.getItem('favoriteTeams') || '[]')),
    []
  );

  return (
    <>
      <Table<Teams>
        dataSource={teamsData.map((team, index) => ({ ...team, key: index }))}
        pagination={false}
        size='small'
        rowKey={(record) => record.name}
        rowClassName={(team) =>
          favoritesSet.has(team?.id ?? '') ? 'favorite' : ''
        }
      >
        {/* Rank */}
        <Table.Column<Teams>
          title='Rank'
          key='rank'
          render={(_text, _record, index) => (
            <div className='table-slide-in-left'>
              <p className='table__column-rank'>{index + 1}</p>
            </div>
          )}
          className='table__column table__column--rank'
        />

        {/* Team */}
        <Table.Column<Teams>
          title='Team'
          dataIndex='name'
          key='team'
          className='table__column table__column--name'
          render={(name: string, record) => (
            <TeamCell
              name={name}
              record={record}
              isFavorite={favoritesSet.has(record.id)}
            />
          )}
        />

        {/* Rating */}
        <Table.Column<Teams>
          title='Rating'
          dataIndex='rating'
          key='rating'
          sorter={(a, b) => a.rating - b.rating}
          className='table__column table__column--rating'
        />

        {/* City — hidden for World Championship leagues */}
        {!isWorldChamp && (
          <Table.Column<Teams>
            title='City'
            dataIndex='city'
            key='city'
            className='table__column table__column--city'
            render={(city: string, record) => (
              <CityCell
                city={city}
                flag={record.flag}
                showFlag={isInternationalChamp}
              />
            )}
          />
        )}

        {/* GP */}
        <Table.Column<Teams>
          title='GP'
          dataIndex='game_counter'
          key='game_counter'
          defaultSortOrder='descend'
          sorter={{
            compare: (a, b) => b.game_counter - a.game_counter,
            multiple: 4,
          }}
          render={(gameCounter: number) => (
            <GpCell
              gameCounter={gameCounter}
              totalTeams={totalTeams}
              isWorldChamp={isWorldChamp}
            />
          )}
          className='table__column table__column--games'
        />

        {/* W */}
        <Table.Column<Teams>
          title='W'
          dataIndex='wins'
          key='wins'
          defaultSortOrder='descend'
          sorter={{
            compare: (a, b) => a.wins - b.wins,
            multiple: 3,
          }}
          className='table__column table__column--wins'
        />

        {/* L */}
        <Table.Column<Teams>
          title='L'
          dataIndex='loses'
          key='loses'
          className='table__column table__column--loses'
        />

        {/* OT */}
        <Table.Column<Teams>
          title='OT'
          dataIndex='loses_ot'
          key='loses_ot'
          defaultSortOrder='descend'
          sorter={{
            compare: (a, b) => b.loses_ot - a.loses_ot,
            multiple: 2,
          }}
          className='table__column table__column--loses-ot'
        />

        {/* PTS */}
        <Table.Column<Teams>
          title='PTS'
          dataIndex='points'
          key='points'
          defaultSortOrder='descend'
          sorter={{
            compare: (a, b) => a.points - b.points,
            multiple: 5,
          }}
          className='table__column table__column--points'
        />

        {/* P% */}
        <Table.Column<Teams>
          title='P%'
          dataIndex='points_percentage'
          key='points_percentage'
          className='table__column table__column--points_percentage'
          render={(_text, record) =>
            record.points_percentage.toFixed(3).replace(/^0/, '')
          }
        />

        {/* DIFF */}
        <Table.Column<Teams>
          title='DIFF'
          dataIndex='goals_diff'
          key='goals_diff'
          defaultSortOrder='descend'
          sorter={{
            compare: (a, b) => a.goals_diff - b.goals_diff,
            multiple: 1,
          }}
          render={(diff: number) => <DiffCell diff={diff} />}
          className='table__column table__column--diff'
        />
      </Table>
    </>
  );
}

export default Sheet;

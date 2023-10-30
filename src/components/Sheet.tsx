import { Table } from "antd";
import { useState } from "react";
import { Teams } from "../data/types";

const { Column } = Table;

export function Sheet({ teams }: any) {
  const [teamsData, setTeamsData] = useState<Teams[]>(teams);
  return (
    <Table dataSource={teamsData} pagination={false} size="small">
      <Column title="Team" dataIndex="name" key="name" />
      <Column
        title="Rating"
        dataIndex="rating"
        key="rating"
        sorter={(a: { rating: number }, b: { rating: number }) =>
          a.rating - b.rating
        }
      />
      <Column title="City" dataIndex="city" key="city" />
      <Column
        title="G"
        dataIndex="game_counter"
        key="game_counter"
        sorter={{
          compare: (a: { game_counter: number }, b: { game_counter: number }) =>
            b.game_counter - a.game_counter,
          multiple: 2,
        }}
      />
      <Column
        title="P"
        dataIndex="points"
        key="points"
        sorter={{
          compare: (a: { points: number }, b: { points: number }) =>
            a.points - b.points,
          multiple: 3,
        }}
      />
      <Column
        title="GF/GA"
        dataIndex="goals_diff"
        key="goals_diff"
        sorter={{
          compare: (a: { goals_diff: number }, b: { goals_diff: number }) =>
            a.goals_diff - b.goals_diff,
          multiple: 1,
        }}
      />
    </Table>
  );
}

export default Sheet;

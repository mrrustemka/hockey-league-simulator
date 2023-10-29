import { Table } from "antd";
import { useState } from "react";
import { Teams } from "../data/types";
// import teamsUpdate from "../components/Game";
// import { teams } from "../data/teams";
// import { v4 as uuidv4 } from "uuid";

const columns = [
  {
    title: "Team",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    sorter: (a: { rating: number }, b: { rating: number }) =>
      a.rating - b.rating,
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "G",
    dataIndex: "game_counter",
    key: "game_counter",
    sorter: {
      compare: (a: { game_counter: number }, b: { game_counter: number }) =>
        b.game_counter - a.game_counter,
      multiple: 2,
    },
  },
  {
    title: "P",
    dataIndex: "points",
    key: "points",
    sorter: {
      compare: (a: { points: number }, b: { points: number }) =>
        a.points - b.points,
      multiple: 3,
    },
  },
  {
    title: "GF/GA",
    dataIndex: "goals_diff",
    key: "goals_diff",
    sorter: {
      compare: (a: { goals_diff: number }, b: { goals_diff: number }) =>
        a.goals_diff - b.goals_diff,
      multiple: 1,
    },
  },
];

export function Sheet({ teams }: any) {
  const [teamsData, setTeamsData] = useState<Teams[]>(teams);
  // setTeamsData(teams);
  return (
    <Table
      dataSource={teamsData}
      columns={columns}
      pagination={false}
      size="small"
    />
  );
}

export default Sheet;

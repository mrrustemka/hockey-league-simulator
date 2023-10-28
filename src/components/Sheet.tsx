import { Table } from "antd";
import { teams } from "../data/teams";

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
      multiple: 1,
    },
  },
  {
    title: "P",
    dataIndex: "points",
    key: "points",
    sorter: {
      compare: (a: { points: number }, b: { points: number }) =>
        a.points - b.points,
      multiple: 2,
    },
  },
  {
    title: "GF/GA",
    dataIndex: "goals_for",
    key: "goals_for",
  },
];

export function Sheet() {
  return (
    <Table
      dataSource={teams}
      columns={columns}
      pagination={false}
      size="small"
    />
  );
}

export default Sheet;

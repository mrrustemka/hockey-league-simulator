import { Table } from "antd";
import { useState } from "react";
import { Teams } from "../data/types";
import kec from "../images/aik.png";

export function Sheet({ teams }: any) {
  const [teamsData, setTeamsData] = useState<Teams[]>(teams);
  return (
    <Table dataSource={teamsData} pagination={false} size="small">
      <Table.Column title="Rank" dataIndex="" key="rank" />
      <Table.Column
        title="Team"
        dataIndex="name"
        key="name"
        render={(dataIndex) => {
          const logo = teamsData.find((item) => item.name === dataIndex)?.logo;
          return (
            <div>
              <img
                src={logo}
                alt={dataIndex + " Logo"}
                width={"16px"}
                className="table-team-logo"
              />
              <p className="table-team-name">{" " + dataIndex}</p>
            </div>
          );
        }}
      />
      <Table.Column
        title="Rating"
        dataIndex="rating"
        key="rating"
        sorter={(a: { rating: number }, b: { rating: number }) =>
          a.rating - b.rating
        }
      />
      <Table.Column title="City" dataIndex="city" key="city" />
      <Table.Column
        title="G"
        dataIndex="game_counter"
        key="game_counter"
        sorter={{
          compare: (a: { game_counter: number }, b: { game_counter: number }) =>
            b.game_counter - a.game_counter,
          multiple: 2,
        }}
      />
      <Table.Column
        title="P"
        dataIndex="points"
        key="points"
        sorter={{
          compare: (a: { points: number }, b: { points: number }) =>
            a.points - b.points,
          multiple: 3,
        }}
        className="table-points"
      />
      <Table.Column
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

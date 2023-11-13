import { Table } from "antd";
import { Teams } from "../data/types";

function Sheet({ teamsData }: Teams[] | any) {
  let rank: number = 0;

  return (
    <Table dataSource={[...teamsData]} pagination={false} size="small">
      <Table.Column
        title="Rank"
        dataIndex=""
        key="rank"
        render={() => {
          rank++;
          return (
            <div>
              <p>{rank > teamsData.length ? (rank = 0) : rank}</p>
            </div>
          );
        }}
      />
      <Table.Column
        title="Team"
        dataIndex="name"
        key="name"
        render={(dataIndex) => {
          const logo = teamsData.find(
            (item: { name: any }) => item.name === dataIndex
          )?.logo;
          return (
            <div>
              <img
                src={logo}
                alt={dataIndex + " Logo"}
                width={"16px"}
                className="table-team-logo"
              />
              <p className="table-column-name">{" " + dataIndex}</p>
            </div>
          );
        }}
        className="column-name"
      />
      <Table.Column
        title="Rating"
        dataIndex="rating"
        key="rating"
        sorter={(a: { rating: number }, b: { rating: number }) =>
          a.rating - b.rating
        }
        className="table-column-stats"
      />
      <Table.Column
        title="City"
        dataIndex="city"
        key="city"
        className="table-column-stats"
      />
      <Table.Column
        title="GP"
        dataIndex="game_counter"
        key="game_counter"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { game_counter: number }, b: { game_counter: number }) =>
            b.game_counter - a.game_counter,
          multiple: 4,
        }}
        className="table-column-stats"
      />
      <Table.Column
        title="W"
        dataIndex="wins"
        key="wins"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { wins: number }, b: { wins: number }) =>
            a.wins - b.wins,
          multiple: 3,
        }}
        className="table-column-stats"
      />
      <Table.Column
        title="L"
        dataIndex="loses"
        key="loses"
        sorter={{
          compare: (a: { game_counter: number }, b: { game_counter: number }) =>
            b.game_counter - a.game_counter,
        }}
        className="table-column-stats"
      />
      <Table.Column
        title="OT"
        dataIndex="loses_ot"
        key="loses_ot"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { game_counter: number }, b: { game_counter: number }) =>
            b.game_counter - a.game_counter,
          multiple: 2,
        }}
        className="table-column-stats"
      />
      <Table.Column
        title="PTS"
        dataIndex="points"
        key="points"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { points: number }, b: { points: number }) =>
            a.points - b.points,
          multiple: 5,
        }}
        className="table-column-points table-table-column-stats"
      />
      <Table.Column
        title="DIFF"
        dataIndex="goals_diff"
        key="goals_diff"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { goals_diff: number }, b: { goals_diff: number }) =>
            a.goals_diff - b.goals_diff,
          multiple: 1,
        }}
        render={(dataIndex) => {
          return (
            <div>
              <p
                className={
                  dataIndex > 0
                    ? "table-column-diff-positive"
                    : dataIndex === 0
                    ? ""
                    : "table-column-diff-negative"
                }
              >
                {dataIndex > 0 ? "+" + dataIndex : dataIndex}
              </p>
            </div>
          );
        }}
        className="table-column-stats"
      />
    </Table>
  );
}

export default Sheet;

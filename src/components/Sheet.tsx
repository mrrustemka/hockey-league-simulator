import { Table } from "antd";
import { Teams } from "../data/types";

function Sheet(props: { teamsData: Teams[] }) {
  let rank: number = 0;

  return (
    <Table dataSource={[...props.teamsData]} pagination={false} size="small">
      <Table.Column
        title="Rank"
        dataIndex=""
        key="rank"
        render={() => {
          rank++;
          return (
            <div>
              <p className="table__column-rank">
                {rank > props.teamsData.length ? (rank = 0) : rank}
              </p>
            </div>
          );
        }}
        className="table__column table__column--rank"
      />
      <Table.Column
        title="Team"
        dataIndex="name"
        key="name"
        render={(dataIndex) => {
          const logo = props.teamsData.find(
            (item: { name: string }) => item.name === dataIndex
          )?.logo;
          return (
            <div className="table__team">
              <img
                src={logo}
                alt={dataIndex + " Logo"}
                width={"16px"}
                className="table__team-logo"
              />
              <p className="table__column-name">{" " + dataIndex}</p>
            </div>
          );
        }}
        className="table__column table__column--name"
      />
      <Table.Column
        title="Rating"
        dataIndex="rating"
        key="rating"
        sorter={(a: { rating: number }, b: { rating: number }) =>
          a.rating - b.rating
        }
        className="table__column table__column--rating"
      />
      <Table.Column
        title="City"
        dataIndex="city"
        key="city"
        className="table__column table__column--city"
      />
      <Table.Column
        title="GP"
        dataIndex="game_counter"
        key="game_counter"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { game_counter: number }, b: { game_counter: number }) =>
            b.game_counter - a.game_counter,
          multiple: 4
        }}
        render={(gameCounter) => {
          let className = "table__column-games";

          if (gameCounter > [...props.teamsData].length * 0.75) {
            className = "table__column-games--high";
          } else if (gameCounter > [...props.teamsData].length * 0.5) {
            className = "table__column-games--medium";
          } else if (gameCounter > [...props.teamsData].length * 0.25) {
            className = "table__column-games--low";
          }

          return (
            <div className={className}>
              <p>{gameCounter}</p>
            </div>
          );
        }}
        className="table__column table__column--games"
      />
      <Table.Column
        title="W"
        dataIndex="wins"
        key="wins"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { wins: number }, b: { wins: number }) =>
            a.wins - b.wins,
          multiple: 3
        }}
        className="table__column table__column--wins"
      />
      <Table.Column
        title="L"
        dataIndex="loses"
        key="loses"
        className="table__column table__column--loses"
      />
      <Table.Column
        title="OT"
        dataIndex="loses_ot"
        key="loses_ot"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { loses_ot: number }, b: { loses_ot: number }) =>
            b.loses_ot - a.loses_ot,
          multiple: 2
        }}
        className="table__column table__column--loses-ot"
      />
      <Table.Column
        title="PTS"
        dataIndex="points"
        key="points"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { points: number }, b: { points: number }) =>
            a.points - b.points,
          multiple: 5
        }}
        className="table__column table__column--points"
      />
      <Table.Column
        title="DIFF"
        dataIndex="goals_diff"
        key="goals_diff"
        defaultSortOrder="descend"
        sorter={{
          compare: (a: { goals_diff: number }, b: { goals_diff: number }) =>
            a.goals_diff - b.goals_diff,
          multiple: 1
        }}
        render={(dataIndex) => {
          return (
            <div>
              <p
                className={
                  dataIndex > 0
                    ? "table__column-diff--positive"
                    : dataIndex === 0
                    ? ""
                    : "table__column-diff--negative"
                }
              >
                {dataIndex > 0 ? "+" + dataIndex : dataIndex}
              </p>
            </div>
          );
        }}
        className="table__column table__column--diff"
      />
    </Table>
  );
}

export default Sheet;

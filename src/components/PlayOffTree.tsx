import { Table } from "antd";
import { Teams } from "../data/types";

function PlayOffTree(props: { teamsData: Teams[] }) {
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
              <p>{rank > props.teamsData.length ? (rank = 0) : rank}</p>
            </div>
          );
        }}
        className="table-column-rank"
      />
      <Table.Column
        title="Team"
        dataIndex="name"
        key="name"
        render={(dataIndex) => {
          const logo = props.teamsData.find(
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
    </Table>
  );
}

export default PlayOffTree;

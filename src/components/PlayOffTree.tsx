import { Table } from "antd";
import { Teams } from "../data/types";

function PlayOffTree(props: { teamsData: Teams[] }) {
  let rank: number = 0;
  let playOff: Teams[] = [];
  let copy: Teams[] = props.teamsData.slice().reverse();
  props.teamsData.map((team): void => {
    team.playOffPosition = props.teamsData.indexOf(team) + 1;
  });

  for (let i: number = 0; i < 8; i++) {
    playOff.unshift(props.teamsData[i]);
    playOff.unshift(copy[i]);
  }
  console.log(playOff);
  return (
    <Table dataSource={[...playOff]} pagination={false} size="small">
      <Table.Column
        title="Rank"
        dataIndex="playOffPosition"
        key="playOffPosition"
        className="table-column-rank"
      />
      <Table.Column
        title="Team"
        dataIndex="name"
        key="name"
        render={(dataIndex) => {
          const logo = playOff.find(
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

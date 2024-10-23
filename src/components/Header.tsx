import { Typography } from "antd";
import { champs } from "../Data/champs";

const { Title } = Typography;
function Header(props: { id: string }) {
  const whiteList: string[] = ["5"];
  return (
    <header className="header">
      {props.id === "" ? (
        <></>
      ) : (
        <img
          className="header__image"
          src={champs.find((champ) => champ.id === props.id)?.image}
          alt={champs.find((champ) => champ.id === props.id)?.name + " Logo"}
          style={{
            backgroundColor: whiteList.includes(props.id)
              ? "#ffffff"
              : "transparent"
          }}
        />
      )}
      <Title className="header__title">
        {props.id === ""
          ? "Select a Championship"
          : champs.find((champ) => champ.id === props.id)?.name}
      </Title>
    </header>
  );
}

export default Header;

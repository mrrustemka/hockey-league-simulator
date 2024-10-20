import { Typography } from "antd";
import { champs } from "../Data/champs";

const { Title } = Typography;
function Header({ id }: any) {
  const whiteList: string[] = ["5"];
  return (
    <header className="header">
      {id === "" ? (
        <></>
      ) : (
        <img
          className="header__image"
          src={champs.find((champ) => champ.id === id)?.image}
          alt={champs.find((champ) => champ.id === id)?.name + " Logo"}
          style={{
            backgroundColor: whiteList.includes(id) ? "#ffffff" : "transparent"
          }}
        />
      )}
      <Title className="header__title">
        {id === ""
          ? "Select a Championship"
          : champs.find((champ) => champ.id === id)?.name}
      </Title>
    </header>
  );
}

export default Header;

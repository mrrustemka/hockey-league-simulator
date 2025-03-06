import { Typography } from "antd";
import { champs } from "../data/champs";
import { whiteLeagues } from "../data/whiteList";
import "../Styles/Header.css";

const { Title } = Typography;
function Header(props: { id: string }) {
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
            backgroundColor: whiteLeagues.includes(props.id)
              ? "#ffffff"
              : "transparent"
          }}
          loading="lazy"
        />
      )}
      <Title className="header__title">
        {props.id === ""
          ? "Select a Championship"
          : champs.find((champ) => champ.id === props.id)?.name}
      </Title>

      {props.id === "" ? (
        <></>
      ) : (
        <img
          className="header__cup"
          src={champs.find((champ) => champ.id === props.id)?.cup}
          alt={champs.find((champ) => champ.id === props.id)?.name + " Logo"}
          loading="lazy"
        />
      )}
    </header>
  );
}

export default Header;

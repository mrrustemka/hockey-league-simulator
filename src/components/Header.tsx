import React from "react";
import { Typography } from "antd";

const { Title } = Typography;
function Header({ text }: any) {
  return (
    <header className="header">
      <Title className="header__title">{text}</Title>
    </header>
  );
}

export default Header;

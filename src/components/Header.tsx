import React from "react";
import { Typography } from "antd";

const { Title } = Typography;
function Header() {
  return (
    <header className="header">
      <Title className="header__title">Hockey World Championship</Title>
    </header>
  );
}

export default Header;

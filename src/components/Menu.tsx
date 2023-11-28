import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Menu = () => {
  return (
    <nav className="">
      <Link to="." className="" key={uuidv4()}>
        Season
      </Link>
      <Link to="play-off" className="" key={uuidv4()}>
        Play-Off
      </Link>
    </nav>
  );
};

export default Menu;

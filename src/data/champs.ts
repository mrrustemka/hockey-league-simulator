import { League } from "./types";
import world from "../images/world.png";
import ehl from "../images/ehl.jpg";

import { europeLeague, worldChampionship } from "./teams";

export const champs: League[] = [
  {
    id: "1",
    name: "Hockey World Championship",
    description: "",
    image: world,
    teams: worldChampionship
  },
  {
    id: "2",
    name: "Europe Hockey League",
    description: "",
    image: ehl,
    teams: europeLeague
  }
];

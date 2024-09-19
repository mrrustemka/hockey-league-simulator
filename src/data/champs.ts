import { League } from "./types";
import world_1 from "../images/world_1.png";
import world_2 from "../images/world_2.png";
import ehl from "../images/ehl.jpg";
import nhl_pic from "../images/nhl.png";

import {
  europeLeague,
  worldChampionship_1,
  nhl,
  worldChampionship_2
} from "./teams";

export const champs: League[] = [
  {
    id: "1",
    name: "Hockey World Championship",
    description:
      "The World Hockey Championship is an exciting global event where the best ice hockey teams from across the world come together. It's not just about fast-paced action and sharp shooting — it's about national pride, teamwork, and intense rivalries. Fans from all walks of life come together to support their countries, creating a colorful atmosphere both in the arenas and at home.",
    image: world_1,
    teams: worldChampionship_1,
    teamsCount: 16
  },
  {
    id: "2",
    name: "European Hockey League",
    description:
      "The European Hockey League is a fantasy league featuring the best hockey teams from the top hockey countries in Europe: Sweden, Finland, Switzerland, Germany, Czech Republic and Slovakia.",
    image: ehl,
    teams: europeLeague,
    teamsCount: 34
  },
  {
    id: "3",
    name: "National Hockey League",
    description: "",
    image: nhl_pic,
    teams: nhl,
    teamsCount: 32
  },
  {
    id: "4",
    name: "European Hockey League Division I",
    description: "",
    image: world_2,
    teams: worldChampionship_2,
    teamsCount: 2
  }
];

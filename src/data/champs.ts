import { League } from "./types";
import world from "../images/world.png";
import ehl from "../images/ehl.jpg";

import { europeLeague, worldChampionship } from "./teams";

export const champs: League[] = [
  {
    id: "1",
    name: "Hockey World Championship",
    description:
      "The World Hockey Championship is an exciting global event where the best ice hockey teams from across the world come together. It's not just about fast-paced action and sharp shooting — it's about national pride, teamwork, and intense rivalries. Fans from all walks of life come together to support their countries, creating a colorful atmosphere both in the arenas and at home.",
    image: world,
    teams: worldChampionship,
    teamsCount: 18
  },
  {
    id: "2",
    name: "European Hockey League",
    description:
      "The European Hockey League is a fantasy league featuring the best hockey teams from the top hockey countries in Europe: Sweden, Finland, Switzerland, Germany, Czech Republic and Slovakia.",
    image: ehl,
    teams: europeLeague,
    teamsCount: 34
  }
  // {
  //   id: "3",
  //   name: "European Hockey League",
  //   description:
  //     "The European Hockey League is a fantasy league featuring the best hockey teams from the top hockey countries in Europe: Sweden, Finland, Switzerland, Germany, Czech Republic and Slovakia.",
  //   image: ehl,
  //   teams: europeLeague,
  //   teamsCount: 34
  // },
  // {
  //   id: "4",
  //   name: "European Hockey League",
  //   description:
  //     "The European Hockey League is a fantasy league featuring the best hockey teams from the top hockey countries in Europe: Sweden, Finland, Switzerland, Germany, Czech Republic and Slovakia.",
  //   image: ehl,
  //   teams: europeLeague,
  //   teamsCount: 34
  // }
];

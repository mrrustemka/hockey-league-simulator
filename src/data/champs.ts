import { League } from "./types";
import world_1 from "../images/world_1.png";
import world_2 from "../images/world_2.png";
import ehl from "../images/ehl.png";
import nhl_pic from "../images/nhl.png";
import shl_pic from "../images/shl.png";
import na_pic from "../images/na.png";
import del_pic from "../images/del.png";
import sm_pic from "../images/sm.png";
import extraliga_pic from "../images/extraliga_pic.png";
import ice_pic from "../images/ice_pic.png";

import {
  europeLeague,
  worldChampionship_1,
  nhl,
  worldChampionship_2,
  shl,
  na,
  del,
  sm,
  extraliga,
  ice
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
      "The European Hockey League is a fantasy league featuring the best hockey teams from the top hockey countries in Europe: Sweden, Finland, Switzerland, Germany, Czech Republic, England and Slovakia.",
    image: ehl,
    teams: europeLeague,
    teamsCount: 36
  },
  {
    id: "3",
    name: "National Hockey League",
    description:
      "The National Hockey League featuring US and Canadian teams. The league has the highest level of any league.",
    image: nhl_pic,
    teams: nhl,
    teamsCount: 32
  },
  {
    id: "4",
    name: "European Hockey League Division I",
    description: "Second level of World Championship.",
    image: world_2,
    teams: worldChampionship_2,
    teamsCount: 12
  },
  {
    id: "5",
    name: "Swedish Hockey League",
    description:
      "Highest division in the Swedish ice hockey system. The league was founded in 1975 and the winner is awarded the Le Mat Trophy. SHL was ranked the No. 1 league in Europe.",
    image: shl_pic,
    teams: shl,
    teamsCount: 14
  },
  {
    id: "6",
    name: "National League",
    description:
      "The National League a league in Switzerland and is the top tier of the Swiss league system. NL was ranked the No. 2 league in Europe.",
    image: na_pic,
    teams: na,
    teamsCount: 14
  },
  {
    id: "7",
    name: "Deutsche Eishockey Liga",
    description:
      "DEL is a German professional hockey league and the highest division in German hockey. The DEL was ranked the No. 3 league in Europe.",
    image: del_pic,
    teams: del,
    teamsCount: 14
  },
  {
    id: "8",
    name: "SM-Liiga",
    description:
      "The SM-liiga, colloquially called the Finnish Elite League. The winner of the Liiga playoffs is awarded the Kanada-malja at the end of each season. SM-liiga was ranked the No. 4 league in Europe.",
    image: sm_pic,
    teams: sm,
    teamsCount: 16
  },
  {
    id: "9",
    name: "Extraliga",
    description:
      "The highest-level hockey league in the Czech Republic. ELH was ranked the No. 5 league in Europe.",
    image: extraliga_pic,
    teams: extraliga,
    teamsCount: 14
  },
  {
    id: "10",
    name: "ICE Hockey League",
    description:
      "Central European hockey league that also serves as the top-tier ice hockey league in Austria. It currently features additional teams from Hungary, Italy, and Slovenia. ELH was ranked the No. 6 league in Europe.",
    image: ice_pic,
    teams: ice,
    teamsCount: 13
  }
];

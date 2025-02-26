import { Teams } from "../types";
import ash from "../../Images/ice_ash.png";
import ash_1 from "../../Images/Gallery/Ice/Ash/ash_1.jpg";
import ash_2 from "../../Images/Gallery/Ice/Ash/ash_2.jpg";
import ash_3 from "../../Images/Gallery/Ice/Ash/ash_3.webp";
import aus from "../../Images/w1_aus.png";
import avs from "../../Images/ice_avs.png";
import avs_1 from "../../Images/Gallery/Ice/Avs/avs_1.jpg";
import avs_2 from "../../Images/Gallery/Ice/Avs/avs_2.jpg";
import avs_3 from "../../Images/Gallery/Ice/Avs/avs_3.webp";
import bwl from "../../Images/ice_bwl.png";
import bwl_1 from "../../Images/Gallery/Ice/Bwl/bwl_1.jpg";
import bwl_2 from "../../Images/Gallery/Ice/Bwl/bwl_2.jpg";
import bwl_3 from "../../Images/Gallery/Ice/Bwl/bwl_3.webp";
import g99 from "../../Images/ice_g99.png";
import g99_1 from "../../Images/Gallery/Ice/G99/g99_1.jpeg";
import g99_2 from "../../Images/Gallery/Ice/G99/g99_2.jpeg";
import g99_3 from "../../Images/Gallery/Ice/G99/g99_3.webp";
import hcb from "../../Images/ice_hcb.png";
import hcb_1 from "../../Images/Gallery/Ice/Hcb/hcb_1.jpg";
import hcb_2 from "../../Images/Gallery/Ice/Hcb/hcb_2.jpg";
import hcb_3 from "../../Images/Gallery/Ice/Hcb/hcb_3.jpg";
import hcb_4 from "../../Images/Gallery/Ice/Hcb/hcb_4.webp";
import hci from "../../Images/ice_hci.png";
import hci_1 from "../../Images/Gallery/Ice/Hci/hci_1.jpg";
import hci_2 from "../../Images/Gallery/Ice/Hci/hci_2.jpg";
import hci_3 from "../../Images/Gallery/Ice/Hci/hci_3.webp";
import hcp from "../../Images/ice_hcp.png";
import hcp_1 from "../../Images/Gallery/Ice/Hcp/hcp_1.jpg";
import hcp_2 from "../../Images/Gallery/Ice/Hcp/hcp_2.jpg";
import hcp_3 from "../../Images/Gallery/Ice/Hcp/hcp_3.webp";
import hko from "../../Images/ice_hko.png";
import hko_1 from "../../Images/Gallery/Ice/Hko/hko_1.jpg";
import hko_2 from "../../Images/Gallery/Ice/Hko/hko_2.jpg";
import hko_3 from "../../Images/Gallery/Ice/Hko/hko_3.webp";
import hun from "../../Images/w2_hun.png";
import ita from "../../Images/w2_ita.png";
import kac from "../../Images/ice_kac.png";
import kac_1 from "../../Images/Gallery/Ice/Kac/kac_1.jpg";
import kac_2 from "../../Images/Gallery/Ice/Kac/kac_2.jpg";
import kac_3 from "../../Images/Gallery/Ice/Kac/kac_3.webp";
import piv from "../../Images/ice_piv.png";
import piv_1 from "../../Images/Gallery/Ice/Piv/piv_1.jpg";
import piv_2 from "../../Images/Gallery/Ice/Piv/piv_2.jpg";
import piv_3 from "../../Images/Gallery/Ice/Piv/piv_3.webp";
import rbs from "../../Images/ice_rbs.png";
import rbs_1 from "../../Images/Gallery/Ice/Rbs/rbs_1.jpg";
import rbs_2 from "../../Images/Gallery/Ice/Rbs/rbs_2.jpg";
import rbs_3 from "../../Images/Gallery/Ice/Rbs/rbs_3.webp";
import sln from "../../Images/w1_sln.png";
import vic from "../../Images/ice_vic.png";
import vic_1 from "../../Images/Gallery/Ice/Vic/vic_1.jpg";
import vic_2 from "../../Images/Gallery/Ice/Vic/vic_2.jpg";
import vic_3 from "../../Images/Gallery/Ice/Vic/vic_3.webp";
import vsv from "../../Images/ice_vsv.png";
import vsv_1 from "../../Images/Gallery/Ice/Vsv/vsv_1.jpg";
import vsv_2 from "../../Images/Gallery/Ice/Vsv/vsv_2.jpg";
import vsv_3 from "../../Images/Gallery/Ice/Vsv/vsv_3.webp";

export const ice: Teams[] = [
  {
    id: 1,
    name: "EC KAC",
    abbreviation: "KAC",
    country: "AUS",
    city: "Klagenfurt",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: kac,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    flag: aus,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [kac_1, kac_2],
    arena_name: "Stadthalle",
    arena_dedcription: "",
    arena_capacity: 5500,
    arena_photo: kac_3
  },
  {
    id: 2,
    name: "TIWAG Innsbruck - Die Haie",
    abbreviation: "HCI",
    country: "AUS",
    city: "Innsbruck",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: hci,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#d6271f",
    flag: aus,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [hci_1, hci_2],
    arena_name: "Tiroler Wasserkraft Arena",
    arena_dedcription:
      "Tiroler Wasserkraft Arena is an indoor sporting arena located in Innsbruck, Austria. The arena was built in 2005.",
    arena_capacity: 7212,
    arena_photo: hci_3
  },
  {
    id: 3,
    name: "EC VSV",
    abbreviation: "VSV",
    country: "AUS",
    city: "Villach",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: vsv,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#001489",
    flag: aus,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [vsv_1, vsv_2],
    arena_name: "	Villacher Stadthalle",
    arena_dedcription:
      "Stadthalle Villach is an indoor sporting arena located in Villach, Austria. The arena was built in 1969.",
    arena_capacity: 4500,
    arena_photo: vsv_3
  },
  {
    id: 4,
    name: "Red Bull Salzburg",
    abbreviation: "RBS",
    country: "AUS",
    city: "Salzburg",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: rbs,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#df003c",
    flag: aus,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [rbs_1, rbs_2],
    arena_name: "Eisarena Salzburg",
    arena_dedcription:
      "Eisarena Salzburg is an indoor sports arena, located in Salzburg, Austria. The arena was built in 1960.",
    arena_capacity: 3400,
    arena_photo: rbs_3
  },
  {
    id: 5,
    name: "Black Wings Linz",
    abbreviation: "BWL",
    country: "AUS",
    city: "Linz",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: bwl,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#000000",
    flag: aus,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [bwl_1, bwl_2],
    arena_name: "	Linz AG Eisarena",
    arena_dedcription: "",
    arena_capacity: 4865,
    arena_photo: bwl_3
  },
  {
    id: 6,
    name: "HCB Südtirol Alperia",
    abbreviation: "HCB",
    country: "ITA",
    city: "Bolzano",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: hcb,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#e73025",
    flag: ita,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [hcb_1, hcb_2, hcb_3],
    arena_name: "Sparkasse Arena",
    arena_dedcription:
      "The Sparkasse Arena, formerly called PalaOnda or Eiswelle, is an indoor sports arena in Bolzano, Italy. It was built to host the 1994 Men's World Ice Hockey Championships along with Forum di Assago.",
    arena_capacity: 7200,
    arena_photo: hcb_4
  },
  {
    id: 7,
    name: "Pustertal Wölfe",
    abbreviation: "HCP",
    country: "ITA",
    city: "Brunico",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: hcp,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffc734",
    flag: ita,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [hcp_1, hcp_2],
    arena_name: "	Intercable Arena",
    arena_dedcription: "",
    arena_capacity: 3100,
    arena_photo: hcp_3
  },
  {
    id: 8,
    name: "Hydro Fehérvár AV19",
    abbreviation: "AVS",
    country: "HUN",
    city: "Székesfehérvár",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: avs,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#0a84ff",
    flag: hun,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [avs_1, avs_2],
    arena_name: "AlbaAréna",
    arena_dedcription: "",
    arena_capacity: 6000,
    arena_photo: avs_3
  },
  {
    id: 9,
    name: "HK Olimpija",
    abbreviation: "HKO",
    country: "SLN",
    city: "Ljubljana",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 88,
    game_counter: 0,
    logo: hko,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#00b050",
    flag: sln,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [hko_1, hko_2],
    arena_name: "Tivoli Hall",
    arena_dedcription:
      "Tivoli Hall is a complex of two multi-purpose indoor sports arenas in the Tivoli City Park in Ljubljana, the capital of Slovenia. The complex was opened in 1965.",
    arena_capacity: 6800,
    arena_photo: hko_3
  },
  {
    id: 10,
    name: "Pioneers Vorarlberg",
    abbreviation: "PIV",
    country: "AUS",
    city: "Feldkirch",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 86,
    game_counter: 0,
    logo: piv,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    flag: aus,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [piv_1, piv_2],
    arena_name: "Vorarlberghalle",
    arena_dedcription:
      "Vorarlberghalle is an indoor sporting arena located in Feldkirch, Austria. The arena was built in 1977.",
    arena_capacity: 5200,
    arena_photo: piv_3
  },
  {
    id: 11,
    name: "Vienna Capitals",
    abbreviation: "VIC",
    country: "AUS",
    city: "Vienna",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 63,
    game_counter: 0,
    logo: vic,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffed00",
    flag: aus,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [vic_1, vic_2],
    arena_name: "Steffl Arena",
    arena_dedcription:
      "Steffl Arena is an indoor sporting arena located in Vienna, Austria. The arena was opened in January 1995. It underwent major renovations in 2010 and 2011.",
    arena_capacity: 7022,
    arena_photo: vic_3
  },
  {
    id: 12,
    name: "Asiago Hockey 1935",
    abbreviation: "ASH",
    country: "ITA",
    city: "Asiago",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 57,
    game_counter: 0,
    logo: ash,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#345baf",
    flag: ita,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [ash_1, ash_2],
    arena_name: "Pala Hodegart",
    arena_dedcription: "",
    arena_capacity: 3000,
    arena_photo: ash_3
  },
  {
    id: 13,
    name: "Graz 99ers",
    abbreviation: "G99",
    country: "AUS",
    city: "Graz",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 50,
    game_counter: 0,
    logo: g99,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#b96535",
    flag: aus,
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [g99_1, g99_2],
    arena_name: "Eisstadion Liebenau",
    arena_dedcription:
      "Eisstadion Liebenau, currently named Merkur Eisstadion for sponsorship reasons, is an indoor sporting arena located in Graz, Austria. The arena was built in 1963.",
    arena_capacity: 4126,
    arena_photo: g99_3
  }
];

import { Teams } from "../types";
import aik from "../../Images/ehl_aik.png";
import fbk from "../../Images/ehl_fbk.png";
import fro from "../../Images/ehl_fro.png";
import lak from "../../Images/ehl_lak.png";
import lhf from "../../Images/ehl_lhf.png";
import tik from "../../Images/ehl_tik.png";
import hv71 from "../../Images/shl_hv71.png";
import iko from "../../Images/shl_iko.png";
import lhc from "../../Images/shl_lhc.png";
import lif from "../../Images/shl_lif.png";
import mif from "../../Images/shl_mif.png";
import modo from "../../Images/shl_modo.png";
import ore from "../../Images/shl_ore.png";
import rbk from "../../Images/shl_rbk.png";
import aik_1 from "../../Images/Gallery/Shl/Aik/aik_1.jpg";
import aik_2 from "../../Images/Gallery/Shl/Aik/aik_2.jpg";
import aik_3 from "../../Images/Gallery/Shl/Aik/aik_3.jpg";
import aik_4 from "../../Images/Gallery/Shl/Aik/aik_4.jpg";
import fbk_1 from "../../Images/Gallery/Shl/Fbk/fbk_1.jpg";
import fbk_2 from "../../Images/Gallery/Shl/Fbk/fbk_2.jpg";
import fbk_3 from "../../Images/Gallery/Shl/Fbk/fbk_3.jpg";
import fbk_4 from "../../Images/Gallery/Shl/Fbk/fbk_4.jpg";
import fro_1 from "../../Images/Gallery/Shl/Fro/fro_1.jpg";
import fro_2 from "../../Images/Gallery/Shl/Fro/fro_2.jpg";
import fro_3 from "../../Images/Gallery/Shl/Fro/fro_3.jpg";
import fro_4 from "../../Images/Gallery/Shl/Fro/fro_4.jpg";
import hv71_1 from "../../Images/Gallery/Shl/Hv71/hv71_1.jpg";
import hv71_2 from "../../Images/Gallery/Shl/Hv71/hv71_2.jpg";
import hv71_3 from "../../Images/Gallery/Shl/Hv71/hv71_3.jpg";
import hv71_4 from "../../Images/Gallery/Shl/Hv71/hv71_4.jpg";
import iko_1 from "../../Images/Gallery/Shl/Iko/iko_1.jpg";
import iko_2 from "../../Images/Gallery/Shl/Iko/iko_2.jpg";
import iko_3 from "../../Images/Gallery/Shl/Iko/iko_3.jpg";
import iko_4 from "../../Images/Gallery/Shl/Iko/iko_4.jpg";
import lak_1 from "../../Images/Gallery/Shl/Lak/lak_1.jpg";
import lak_2 from "../../Images/Gallery/Shl/Lak/lak_2.jpg";
import lak_3 from "../../Images/Gallery/Shl/Lak/lak_3.jpg";
import lak_4 from "../../Images/Gallery/Shl/Lak/lak_4.jpg";
import lhc_1 from "../../Images/Gallery/Shl/Lhc/lhc_1.jpg";
import lhc_2 from "../../Images/Gallery/Shl/Lhc/lhc_2.jpg";
import lhc_3 from "../../Images/Gallery/Shl/Lhc/lhc_3.jpg";
import lhc_4 from "../../Images/Gallery/Shl/Lhc/lhc_4.jpg";
import lhf_1 from "../../Images/Gallery/Shl/Lhf/lhf_1.jpg";
import lhf_2 from "../../Images/Gallery/Shl/Lhf/lhf_2.jpg";
import lhf_3 from "../../Images/Gallery/Shl/Lhf/lhf_3.jpg";
import lhf_4 from "../../Images/Gallery/Shl/Lhf/lhf_4.jpg";
import lif_1 from "../../Images/Gallery/Shl/Lif/lif_1.jpg";
import lif_2 from "../../Images/Gallery/Shl/Lif/lif_2.jpg";
import lif_3 from "../../Images/Gallery/Shl/Lif/lif_3.jpg";
import lif_4 from "../../Images/Gallery/Shl/Lif/lif_4.jpg";
import mif_1 from "../../Images/Gallery/Shl/Mif/mif_1.jpg";
import mif_2 from "../../Images/Gallery/Shl/Mif/mif_2.jpg";
import mif_3 from "../../Images/Gallery/Shl/Mif/mif_3.jpg";
import mif_4 from "../../Images/Gallery/Shl/Mif/mif_4.jpg";
import modo_1 from "../../Images/Gallery/Shl/Modo/modo_1.jpg";
import modo_2 from "../../Images/Gallery/Shl/Modo/modo_2.jpg";
import modo_3 from "../../Images/Gallery/Shl/Modo/modo_3.jpg";
import modo_4 from "../../Images/Gallery/Shl/Modo/modo_4.jpg";
import ore_1 from "../../Images/Gallery/Shl/Ore/ore_1.jpg";
import ore_2 from "../../Images/Gallery/Shl/Ore/ore_2.jpg";
import ore_3 from "../../Images/Gallery/Shl/Ore/ore_3.jpg";
import ore_4 from "../../Images/Gallery/Shl/Ore/ore_4.jpg";
import rbk_1 from "../../Images/Gallery/Shl/Rbk/rbk_1.jpg";
import rbk_2 from "../../Images/Gallery/Shl/Rbk/rbk_2.jpg";
import rbk_3 from "../../Images/Gallery/Shl/Rbk/rbk_3.jpg";
import rbk_4 from "../../Images/Gallery/Shl/Rbk/rbk_4.jpg";
import tik_1 from "../../Images/Gallery/Shl/Tik/tik_1.jpg";
import tik_2 from "../../Images/Gallery/Shl/Tik/tik_2.jpg";
import tik_3 from "../../Images/Gallery/Shl/Tik/tik_3.jpg";
import tik_4 from "../../Images/Gallery/Shl/Tik/tik_4.jpg";

export const shl: Teams[] = [
  {
    id: 1,
    name: "Lakers",
    abbreviation: "LAK",
    country: "Swe",
    city: "Vaxjo",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: lak,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#f07831",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [lak_1, lak_2, lak_3, lak_4]
  },
  {
    id: 2,
    name: "AIK",
    abbreviation: "AIK",
    country: "Swe",
    city: "Skelleftea",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: aik,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#000000",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [aik_1, aik_2, aik_3, aik_4]
  },
  {
    id: 3,
    name: "Frolunda HC",
    abbreviation: "FRO",
    country: "Swe",
    city: "Frolunda",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: fro,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#00573f",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [fro_1, fro_2, fro_3, fro_4]
  },
  {
    id: 4,
    name: "Farjestad BK",
    abbreviation: "FBK",
    country: "Swe",
    city: "Farjestad",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: fbk,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [fbk_1, fbk_2, fbk_3, fbk_4]
  },
  {
    id: 5,
    name: "Timra IK",
    abbreviation: "TIK",
    country: "SWE",
    city: "Timra",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: tik,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ec3e34",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [tik_1, tik_2, tik_3, tik_4]
  },
  {
    id: 6,
    name: "Lulea Hockey",
    abbreviation: "LHF",
    country: "Swe",
    city: "Lulea",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: lhf,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffcd00",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [lhf_1, lhf_2, lhf_3, lhf_4]
  },
  {
    id: 7,
    name: "Leksands IF",
    abbreviation: "LIF",
    country: "Swe",
    city: "Leksand",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: lif,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#001489",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [lif_1, lif_2, lif_3, lif_4]
  },
  {
    id: 8,
    name: "Linkoping HC",
    abbreviation: "LHC",
    country: "Swe",
    city: "Linkoping",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: lhc,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#003690",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [lhc_1, lhc_2, lhc_3, lhc_4]
  },
  {
    id: 9,
    name: "Rogle BK",
    abbreviation: "RBK",
    country: "Swe",
    city: "Angelholm",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 90,
    game_counter: 0,
    logo: rbk,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [rbk_1, rbk_2, rbk_3, rbk_4]
  },
  {
    id: 10,
    name: "Orebro Hockey",
    abbreviation: "ORE",
    country: "Swe",
    city: "Orebro",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 86,
    game_counter: 0,
    logo: ore,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#c12823",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [ore_1, ore_2, ore_3, ore_4]
  },
  {
    id: 11,
    name: "Modo Hockey",
    abbreviation: "MODO",
    country: "Swe",
    city: "Ornskoldsvik",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 86,
    game_counter: 0,
    logo: modo,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#e01c21",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [modo_1, modo_2, modo_3, modo_4]
  },
  {
    id: 12,
    name: "Malmö Redhawks",
    abbreviation: "MIF",
    country: "Swe",
    city: "Malmo",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 85,
    game_counter: 0,
    logo: mif,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#000000",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [mif_1, mif_2, mif_3, mif_4]
  },
  {
    id: 13,
    name: "HV71",
    abbreviation: "HV71",
    country: "Swe",
    city: "Jonkoping",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 69,
    game_counter: 0,
    logo: hv71,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#04234d",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [hv71_1, hv71_2, hv71_3, hv71_4]
  },
  {
    id: 14,
    name: "IK Oskarshamn",
    abbreviation: "IKO",
    country: "Swe",
    city: "Oskarshamn",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 50,
    game_counter: 0,
    logo: iko,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#0d4082",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [iko_1, iko_2, iko_3, iko_4]
  }
];

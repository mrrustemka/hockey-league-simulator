import { Teams } from "../types";
import ajo from "../../Images/na_ajo.png";
import ajo_1 from "../../Images/Gallery/Na/Ajo/ajo_1.jpg";
import ajo_2 from "../../Images/Gallery/Na/Ajo/ajo_2.jpg";
import ajo_3 from "../../Images/Gallery/Na/Ajo/ajo_3.jpg";
import amb from "../../Images/na_amb.png";
import amb_1 from "../../Images/Gallery/Na/Amb/amb_1.jpg";
import amb_2 from "../../Images/Gallery/Na/Amb/amb_2.jpg";
import amb_3 from "../../Images/Gallery/Na/Amb/amb_3.jpg";
import evz from "../../Images/ehl_evz.png";
import evz_1 from "../../Images/Gallery/Na/Evz/evz_1.jpg";
import evz_2 from "../../Images/Gallery/Na/Evz/evz_2.jpg";
import evz_3 from "../../Images/Gallery/Na/Evz/evz_3.jpg";
import evz_4 from "../../Images/Gallery/Na/Evz/evz_4.jpg";
import frg from "../../Images/na_frg.png";
import frg_1 from "../../Images/Gallery/Na/Frg/frg_1.jpg";
import frg_2 from "../../Images/Gallery/Na/Frg/frg_2.jpg";
import frg_3 from "../../Images/Gallery/Na/Frg/frg_3.jpg";
import frg_4 from "../../Images/Gallery/Na/Frg/frg_4.jpg";
import gen from "../../Images/ehl_gen.png";
import gen_1 from "../../Images/Gallery/Na/Gen/gen_1.jpg";
import gen_2 from "../../Images/Gallery/Na/Gen/gen_2.jpg";
import gen_3 from "../../Images/Gallery/Na/Gen/gen_3.jpg";
import gen_4 from "../../Images/Gallery/Na/Gen/gen_4.jpg";
import hcb from "../../Images/ehl_hcb.png";
import hcb_1 from "../../Images/Gallery/Na/Hcb/hcb_1.jpg";
import hcb_2 from "../../Images/Gallery/Na/Hcb/hcb_2.jpg";
import hcb_3 from "../../Images/Gallery/Na/Hcb/hcb_3.jpg";
import hcb_4 from "../../Images/Gallery/Na/Hcb/hcb_4.jpg";
import hcd from "../../Images/ehl_hcd.png";
import hcd_1 from "../../Images/Gallery/Na/Hcd/hcd_1.jpg";
import hcd_2 from "../../Images/Gallery/Na/Hcd/hcd_2.jpg";
import hcd_3 from "../../Images/Gallery/Na/Hcd/hcd_3.jpg";
import hcd_4 from "../../Images/Gallery/Na/Hcd/hcd_4.jpg";
import hcl from "../../Images/ehl_hcl.png";
import hcl_1 from "../../Images/Gallery/Na/Hcl/hcl_1.jpg";
import hcl_2 from "../../Images/Gallery/Na/Hcl/hcl_2.jpg";
import hcl_3 from "../../Images/Gallery/Na/Hcl/hcl_3.jpg";
import hcl_4 from "../../Images/Gallery/Na/Hcl/hcl_4.jpg";
import klo from "../../Images/na_klo.png";
import klo_1 from "../../Images/Gallery/Na/Klo/klo_1.jpg";
import klo_2 from "../../Images/Gallery/Na/Klo/klo_2.jpg";
import klo_3 from "../../Images/Gallery/Na/Klo/klo_3.jpg";
import klo_4 from "../../Images/Gallery/Na/Klo/klo_4.jpg";
import lhc from "../../Images/na_lhc.png";
import lhc_1 from "../../Images/Gallery/Na/Lhc/lhc_1.jpg";
import lhc_2 from "../../Images/Gallery/Na/Lhc/lhc_2.jpg";
import lhc_3 from "../../Images/Gallery/Na/Lhc/lhc_3.jpg";
import rjl from "../../Images/na_rjl.png";
import rjl_1 from "../../Images/Gallery/Na/Rjl/rjl_1.jpg";
import rjl_2 from "../../Images/Gallery/Na/Rjl/rjl_2.jpg";
import rjl_3 from "../../Images/Gallery/Na/Rjl/rjl_3.jpg";
import scb from "../../Images/ehl_scb.png";
import scb_1 from "../../Images/Gallery/Na/Scb/scb_1.jpg";
import scb_2 from "../../Images/Gallery/Na/Scb/scb_2.jpg";
import scb_3 from "../../Images/Gallery/Na/Scb/scb_3.jpg";
import scb_4 from "../../Images/Gallery/Na/Scb/scb_4.jpg";
import scl from "../../Images/na_scl.png";
import scl_1 from "../../Images/Gallery/Na/Scl/scl_1.jpg";
import scl_2 from "../../Images/Gallery/Na/Scl/scl_2.jpg";
import scl_3 from "../../Images/Gallery/Na/Scl/scl_3.jpg";
import zsc from "../../Images/ehl_zsc.png";
import zsc_1 from "../../Images/Gallery/Na/Zsc/zsc_1.jpg";
import zsc_2 from "../../Images/Gallery/Na/Zsc/zsc_2.jpg";
import zsc_3 from "../../Images/Gallery/Na/Zsc/zsc_3.jpg";
import zsc_4 from "../../Images/Gallery/Na/Zsc/zsc_4.jpg";

export const na: Teams[] = [
  {
    id: 1,
    name: "ZSC LIONS",
    abbreviation: "ZSC",
    country: "Swi",
    city: "Zurich",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: zsc,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#0068b6",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [zsc_1, zsc_2, zsc_3, zsc_4]
  },
  {
    id: 2,
    name: "EV Zug",
    abbreviation: "EVZ",
    country: "SWI",
    city: "Zug",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: evz,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#1d72ae",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [evz_1, evz_2, evz_3, evz_4]
  },
  {
    id: 3,
    name: "SC BERN",
    abbreviation: "SCB",
    country: "Swi",
    city: "Bern",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: scb,
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
    photos: [scb_1, scb_2, scb_3, scb_4]
  },
  {
    id: 4,
    name: "HC Davos",
    abbreviation: "HCD",
    country: "Swi",
    city: "Davos",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: hcd,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffee00",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [hcd_1, hcd_2, hcd_3, hcd_4]
  },
  {
    id: 5,
    name: "Lausanne HC",
    abbreviation: "LHC",
    country: "Swi",
    city: "Lausanne",
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
    color: "#e40021",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [lhc_1, lhc_2, lhc_3]
  },
  {
    id: 6,
    name: "Fribourg-Gottéron",
    abbreviation: "FRG",
    country: "Swi",
    city: "Fribourg",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: frg,
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
    photos: [frg_1, frg_2, frg_3, frg_4]
  },
  {
    id: 7,
    name: "HC Lugano",
    abbreviation: "HCL",
    country: "SWI",
    city: "Lugano",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 97,
    game_counter: 0,
    logo: hcl,
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
    photos: [hcl_1, hcl_2, hcl_3, hcl_4]
  },
  {
    id: 8,
    name: "HC Ambrì-Piotta",
    abbreviation: "AMB",
    country: "Swi",
    city: "Ambrì",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 97,
    game_counter: 0,
    logo: amb,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#002361",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [amb_1, amb_2, amb_3]
  },
  {
    id: 9,
    name: "Geneve Servette HC",
    abbreviation: "GEN",
    country: "Swi",
    city: "Geneva",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 92,
    game_counter: 0,
    logo: gen,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#6d182d",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [gen_1, gen_2, gen_3, gen_4]
  },
  {
    id: 10,
    name: "EHC Biel-Bienne",
    abbreviation: "HCB",
    country: "Swi",
    city: "Biel",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 92,
    game_counter: 0,
    logo: hcb,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffcd01",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [hcb_1, hcb_2, hcb_3, hcb_4]
  },
  {
    id: 11,
    name: "SCL Tigers",
    abbreviation: "SCL",
    country: "Swi",
    city: "Langnau",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 88,
    game_counter: 0,
    logo: scl,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffd600",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [scl_1, scl_2, scl_3]
  },
  {
    id: 12,
    name: "SC Rapperswil-Jona Lakers",
    abbreviation: "RJL",
    country: "Swi",
    city: "Rapperswil",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 81,
    game_counter: 0,
    logo: rjl,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#01316c",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [rjl_1, rjl_2, rjl_3]
  },
  {
    id: 13,
    name: "EHC Kloten",
    abbreviation: "KLO",
    country: "Swi",
    city: "Kloten",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 65,
    game_counter: 0,
    logo: klo,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#c21938",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [klo_1, klo_2, klo_3, klo_4]
  },
  {
    id: 14,
    name: "HC Ajoie",
    abbreviation: "AJO",
    country: "Swi",
    city: "Porrentruy",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 50,
    game_counter: 0,
    logo: ajo,
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
    photos: [ajo_1, ajo_2, ajo_3]
  }
];

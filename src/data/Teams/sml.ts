import { Teams } from "../types";
import ass from "../../Images/sml_ass.png";
import ass_1 from "../../Images/Gallery/Sml/Ass/ass_1.jpg";
import ass_2 from "../../Images/Gallery/Sml/Ass/ass_2.jpg";
import ass_3 from "../../Images/Gallery/Sml/Ass/ass_3.jpg";
import hpk from "../../Images/sml_hpk.png";
import hpk_1 from "../../Images/Gallery/Sml/Hpk/hpk_1.jpg";
import hpk_2 from "../../Images/Gallery/Sml/Hpk/hpk_2.jpg";
import hpk_3 from "../../Images/Gallery/Sml/Hpk/hpk_3.jpg";
import hpk_4 from "../../Images/Gallery/Sml/Hpk/hpk_4.jpg";
import ifk from "../../Images/ehl_ifk.png";
import ifk_1 from "../../Images/Gallery/Sml/Ifk/ifk_1.jpg";
import ifk_2 from "../../Images/Gallery/Sml/Ifk/ifk_2.jpg";
import ifk_3 from "../../Images/Gallery/Sml/Ifk/ifk_3.jpg";
import ifk_4 from "../../Images/Gallery/Sml/Ifk/ifk_4.jpg";
import ilv from "../../Images/ehl_ilv.png";
import ilv_1 from "../../Images/Gallery/Sml/Ilv/ilv_1.jpg";
import ilv_2 from "../../Images/Gallery/Sml/Ilv/ilv_2.jpg";
import ilv_3 from "../../Images/Gallery/Sml/Ilv/ilv_3.jpg";
import ilv_4 from "../../Images/Gallery/Sml/Ilv/ilv_4.jpg";
import ilv_5 from "../../Images/Gallery/Sml/Ilv/ilv_5.jpg";
import juk from "../../Images/sml_juk.png";
import juk_1 from "../../Images/Gallery/Sml/Juk/juk_1.jpg";
import juk_2 from "../../Images/Gallery/Sml/Juk/juk_2.jpg";
import juk_3 from "../../Images/Gallery/Sml/Juk/juk_3.jpg";
import jyp from "../../Images/sml_jyp.png";
import jyp_1 from "../../Images/Gallery/Sml/Jyp/jyp_1.jpg";
import jyp_2 from "../../Images/Gallery/Sml/Jyp/jyp_2.jpg";
import jyp_3 from "../../Images/Gallery/Sml/Jyp/jyp_3.jpg";
import kal from "../../Images/sml_kal.png";
import kal_1 from "../../Images/Gallery/Sml/Kal/kal_1.jpg";
import kal_2 from "../../Images/Gallery/Sml/Kal/kal_2.jpg";
import kal_3 from "../../Images/Gallery/Sml/Kal/kal_3.jpg";
import kal_4 from "../../Images/Gallery/Sml/Kal/kal_4.jpg";
import kar from "../../Images/sml_kar.png";
import kar_1 from "../../Images/Gallery/Sml/Kar/kar_1.jpg";
import kar_2 from "../../Images/Gallery/Sml/Kar/kar_2.jpg";
import kar_3 from "../../Images/Gallery/Sml/Kar/kar_3.jpg";
import kes from "../../Images/sml_kes.png";
import kes_1 from "../../Images/Gallery/Sml/Kes/kes_1.jpg";
import kes_2 from "../../Images/Gallery/Sml/Kes/kes_2.jpg";
import kes_3 from "../../Images/Gallery/Sml/Kes/kes_3.jpg";
import koo from "../../Images/sml_koo.png";
import koo_1 from "../../Images/Gallery/Sml/Koo/koo_1.jpg";
import koo_2 from "../../Images/Gallery/Sml/Koo/koo_2.jpg";
import koo_3 from "../../Images/Gallery/Sml/Koo/koo_3.jpg";
import luk from "../../Images/sml_luk.png";
import luk_1 from "../../Images/Gallery/Sml/Luk/luk_1.jpg";
import luk_2 from "../../Images/Gallery/Sml/Luk/luk_2.jpg";
import luk_3 from "../../Images/Gallery/Sml/Luk/luk_3.jpg";
import luk_4 from "../../Images/Gallery/Sml/Luk/luk_4.jpg";
import pel from "../../Images/ehl_pel.png";
import pel_1 from "../../Images/Gallery/Sml/Pel/pel_1.jpg";
import pel_2 from "../../Images/Gallery/Sml/Pel/pel_2.jpg";
import pel_3 from "../../Images/Gallery/Sml/Pel/pel_3.jpg";
import pel_4 from "../../Images/Gallery/Sml/Pel/pel_4.jpg";
import sai from "../../Images/sml_sai.png";
import sai_1 from "../../Images/Gallery/Sml/Sai/sai_1.jpg";
import sai_2 from "../../Images/Gallery/Sml/Sai/sai_2.jpg";
import spo from "../../Images/sml_spo.png";
import spo_1 from "../../Images/Gallery/Sml/Spo/spo_1.jpg";
import spo_2 from "../../Images/Gallery/Sml/Spo/spo_2.jpg";
import tap from "../../Images/ehl_tap.png";
import tap_1 from "../../Images/Gallery/Sml/Tap/tap_1.jpg";
import tap_2 from "../../Images/Gallery/Sml/Tap/tap_2.jpeg";
import tap_3 from "../../Images/Gallery/Sml/Tap/tap_3.jpg";
import tap_4 from "../../Images/Gallery/Sml/Tap/tap_4.jpg";
import tps from "../../Images/ehl_tps.png";
import tps_1 from "../../Images/Gallery/Sml/Tps/tps_1.jpg";
import tps_2 from "../../Images/Gallery/Sml/Tps/tps_2.jpg";
import tps_3 from "../../Images/Gallery/Sml/Tps/tps_3.jpg";
import tps_4 from "../../Images/Gallery/Sml/Tps/tps_4.jpg";

export const sml: Teams[] = [
  {
    id: 1,
    name: "Tappara",
    abbreviation: "TAP",
    country: "Fin",
    city: "Tampere",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: tap,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ff6600",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [tap_1, tap_2, tap_3, tap_4]
  },
  {
    id: 2,
    name: "Pelicans",
    abbreviation: "PEL",
    country: "Fin",
    city: "Lahti",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: pel,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#f0e68c",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [pel_1, pel_2, pel_3, pel_4]
  },
  {
    id: 3,
    name: "HIFK",
    abbreviation: "IFK",
    country: "Fin",
    city: "Helsinki",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: ifk,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#082868",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [ifk_1, ifk_2, ifk_3, ifk_4]
  },
  {
    id: 4,
    name: "Ilves",
    abbreviation: "ILV",
    country: "Fin",
    city: "Tampere",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: ilv,
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
    photos: [ilv_1, ilv_2, ilv_3, ilv_4, ilv_5]
  },
  {
    id: 5,
    name: "HC TPS",
    abbreviation: "TPS",
    country: "FIN",
    city: "Turku",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 92,
    game_counter: 0,
    logo: tps,
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
    photos: [tps_1, tps_2, tps_3, tps_4]
  },
  {
    id: 6,
    name: "Kalpa",
    abbreviation: "KAL",
    country: "Fin",
    city: "Kuopio",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: kal,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#fdcb00",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [kal_1, kal_2, kal_3, kal_4]
  },
  {
    id: 7,
    name: "KooKoo",
    abbreviation: "KOO",
    country: "FIN",
    city: "Kouvola",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 89,
    game_counter: 0,
    logo: koo,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#e87026",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [koo_1, koo_2, koo_3]
  },
  {
    id: 8,
    name: "JYP",
    abbreviation: "JYP",
    country: "Fin",
    city: "Jyväskylä",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 76,
    game_counter: 0,
    logo: jyp,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#e6e6e6",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [jyp_1, jyp_2, jyp_3]
  },
  {
    id: 9,
    name: "Kärpät",
    abbreviation: "KAR",
    country: "Fin",
    city: "Oulu",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: kar,
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
    photos: [kar_1, kar_2, kar_3]
  },
  {
    id: 10,
    name: "Lukko",
    abbreviation: "LUK",
    country: "Fin",
    city: "Rauma",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: luk,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffd300",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [luk_1, luk_2, luk_3, luk_4]
  },
  {
    id: 11,
    name: "SaiPa",
    abbreviation: "SAI",
    country: "Fin",
    city: "Lappeenranta",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 62,
    game_counter: 0,
    logo: sai,
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
    photos: [sai_1, sai_2]
  },
  {
    id: 12,
    name: "Sport",
    abbreviation: "SPO",
    country: "Fin",
    city: "Vaasa",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 91,
    game_counter: 0,
    logo: spo,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ed1c24",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [spo_1, spo_2]
  },
  {
    id: 13,
    name: "Ässät",
    abbreviation: "ASS",
    country: "Fin",
    city: "Pori",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 89,
    game_counter: 0,
    logo: ass,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#d8000b",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [ass_1, ass_2, ass_3]
  },
  {
    id: 14,
    name: "Jukurit",
    abbreviation: "JUK",
    country: "Fin",
    city: "Mikkeli",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: juk,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#003172",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [juk_1, juk_2, juk_3]
  },
  {
    id: 15,
    name: "HPK",
    abbreviation: "HPK",
    country: "Fin",
    city: "Hämeenlinna",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 65,
    game_counter: 0,
    logo: hpk,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#d77f21",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [hpk_1, hpk_2, hpk_3, hpk_4]
  },
  {
    id: 16,
    name: "Kiekko-Espoo",
    abbreviation: "KES",
    country: "Fin",
    city: "Espoo",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 70,
    game_counter: 0,
    logo: kes,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#000080",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [kes_1, kes_2, kes_3]
  }
];

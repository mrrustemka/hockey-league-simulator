import { Teams } from "../types";
import aug from "../../Images/del_aug.png";
import aug_1 from "../../Images/Gallery/Del/Aug/aug_1.jpg";
import aug_2 from "../../Images/Gallery/Del/Aug/aug_2.jpg";
import aug_3 from "../../Images/Gallery/Del/Aug/aug_3.jpg";
import aug_4 from "../../Images/Gallery/Del/Aug/aug_4.jpg";
import aug_5 from "../../Images/Gallery/Del/Aug/aug_5.webp";
import bhv from "../../Images/del_bhv.png";
import bhv_1 from "../../Images/Gallery/Del/Bhv/bhv_1.jpg";
import bhv_2 from "../../Images/Gallery/Del/Bhv/bhv_2.jpg";
import bhv_3 from "../../Images/Gallery/Del/Bhv/bhv_3.jpg";
import bhv_4 from "../../Images/Gallery/Del/Bhv/bhv_4.webp";
import deg from "../../Images/del_deg.png";
import deg_1 from "../../Images/Gallery/Del/Deg/deg_1.jpg";
import deg_2 from "../../Images/Gallery/Del/Deg/deg_2.jpg";
import deg_3 from "../../Images/Gallery/Del/Deg/deg_3.jpg";
import deg_4 from "../../Images/Gallery/Del/Deg/deg_4.jpg";
import deg_5 from "../../Images/Gallery/Del/Deg/deg_5.webp";
import ebb from "../../Images/del_ebb.png";
import ebb_1 from "../../Images/Gallery/Del/Ebb/ebb_1.jpg";
import ebb_2 from "../../Images/Gallery/Del/Ebb/ebb_2.jpg";
import ebb_3 from "../../Images/Gallery/Del/Ebb/ebb_3.jpg";
import ebb_4 from "../../Images/Gallery/Del/Ebb/ebb_4.jpg";
import ebb_5 from "../../Images/Gallery/Del/Ebb/ebb_5.webp";
import fra from "../../Images/del_fra.png";
import fra_1 from "../../Images/Gallery/Del/Fra/fra_1.jpg";
import fra_2 from "../../Images/Gallery/Del/Fra/fra_2.jpg";
import fra_3 from "../../Images/Gallery/Del/Fra/fra_3.jpg";
import fra_4 from "../../Images/Gallery/Del/Fra/fra_4.webp";
import iec from "../../Images/del_iec.png";
import iec_1 from "../../Images/Gallery/Del/Iec/iec_1.jpg";
import iec_2 from "../../Images/Gallery/Del/Iec/iec_2.jpg";
import iec_3 from "../../Images/Gallery/Del/Iec/iec_3.webp";
import ing from "../../Images/del_ing.png";
import ing_1 from "../../Images/Gallery/Del/Ing/ing_1.jpg";
import ing_2 from "../../Images/Gallery/Del/Ing/ing_2.jpg";
import ing_3 from "../../Images/Gallery/Del/Ing/ing_3.jpg";
import ing_4 from "../../Images/Gallery/Del/Ing/ing_4.jpg";
import ing_5 from "../../Images/Gallery/Del/Ing/ing_5.jpg";
import ing_6 from "../../Images/Gallery/Del/Ing/ing_6.webp";
import kec from "../../Images/ehl_kec.png";
import kec_1 from "../../Images/Gallery/Del/Kec/kec_1.jpg";
import kec_2 from "../../Images/Gallery/Del/Kec/kec_2.jpg";
import kec_3 from "../../Images/Gallery/Del/Kec/kec_3.jpg";
import kec_4 from "../../Images/Gallery/Del/Kec/kec_4.jpg";
import kec_5 from "../../Images/Gallery/Del/Kec/kec_5.jpg";
import kec_6 from "../../Images/Gallery/Del/Kec/kec_6.webp";
import man from "../../Images/ehl_man.png";
import man_1 from "../../Images/Gallery/Del/Man/man_1.jpg";
import man_2 from "../../Images/Gallery/Del/Man/man_2.jpg";
import man_3 from "../../Images/Gallery/Del/Man/man_3.jpg";
import man_4 from "../../Images/Gallery/Del/Man/man_4.jpg";
import man_5 from "../../Images/Gallery/Del/Man/man_5.webp";
import nit from "../../Images/del_nit.png";
import nit_1 from "../../Images/Gallery/Del/Nit/nit_1.jpg";
import nit_2 from "../../Images/Gallery/Del/Nit/nit_2.jpg";
import nit_3 from "../../Images/Gallery/Del/Nit/nit_3.jpg";
import nit_4 from "../../Images/Gallery/Del/Nit/nit_4.webp";
import rbm from "../../Images/ehl_rbm.png";
import rbm_1 from "../../Images/Gallery/Del/Rbm/rbm_1.jpg";
import rbm_2 from "../../Images/Gallery/Del/Rbm/rbm_2.jpg";
import rbm_3 from "../../Images/Gallery/Del/Rbm/rbm_3.jpg";
import rbm_4 from "../../Images/Gallery/Del/Rbm/rbm_4.jpg";
import rbm_5 from "../../Images/Gallery/Del/Rbm/rbm_5.webp";
import str from "../../Images/del_str.png";
import str_1 from "../../Images/Gallery/Del/Str/str_1.jpg";
import str_2 from "../../Images/Gallery/Del/Str/str_2.jpg";
import str_3 from "../../Images/Gallery/Del/Str/str_3.jpg";
import str_4 from "../../Images/Gallery/Del/Str/str_4.webp";
import sww from "../../Images/del_sww.png";
import sww_1 from "../../Images/Gallery/Del/Sww/sww_1.jpg";
import sww_2 from "../../Images/Gallery/Del/Sww/sww_2.jpg";
import sww_3 from "../../Images/Gallery/Del/Sww/sww_3.jpg";
import sww_4 from "../../Images/Gallery/Del/Sww/sww_4.jpg";
import sww_5 from "../../Images/Gallery/Del/Sww/sww_5.webp";
import wob from "../../Images/ehl_wob.png";
import wob_1 from "../../Images/Gallery/Del/Wob/wob_1.jpg";
import wob_2 from "../../Images/Gallery/Del/Wob/wob_2.jpg";
import wob_3 from "../../Images/Gallery/Del/Wob/wob_3.jpg";
import wob_4 from "../../Images/Gallery/Del/Wob/wob_4.jpg";
import wob_5 from "../../Images/Gallery/Del/Wob/wob_5.webp";

export const del: Teams[] = [
  {
    id: 1,
    name: "Fischtown Pinguins",
    abbreviation: "BHV",
    country: "GER",
    city: "Bremerhaven",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: bhv,
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
    photos: [bhv_1, bhv_2, bhv_3],
    arena_name: "Eisarena Bremerhaven",
    arena_dedcription: "",
    arena_capacity: 4674,
    arena_photo: bhv_4
  },
  {
    id: 2,
    name: "Eisbären",
    abbreviation: "EBB",
    country: "Ger",
    city: "Berlin",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 96,
    game_counter: 0,
    logo: ebb,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#003366",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [ebb_1, ebb_2, ebb_3, ebb_4],
    arena_name: "Uber Arena",
    arena_dedcription:
      "Uber Arena (previously branded as O2 World and Mercedes-Benz Arena) is a multipurpose indoor arena in the Friedrichshain neighborhood of Berlin, Germany, which opened in 2008. The venue became known as Uber Arena following a long-term deal with venue operators AEG Europe in 2024. The arena was one of the most prominent elements of the Mediaspree urban redevelopment project, quickly gaining emblematic status in the debates surrounding the project's impact.",
    arena_capacity: 14200,
    arena_photo: ebb_5
  },
  {
    id: 3,
    name: "Straubing Tigers",
    abbreviation: "STR",
    country: "GER",
    city: "Straubing",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 88,
    game_counter: 0,
    logo: str,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#6b88d3",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [str_1, str_2, str_3],
    arena_name: "Eisstadion am Pulverturm",
    arena_dedcription:
      "Eisstadion am Pulverturm is an arena in Straubing, Germany. It opened in 1967. It is one of the smallest arenas in the DEL. Eisstadion am Pulverturm is on Kinseherberg 23 in the city center.",
    arena_capacity: 5635,
    arena_photo: str_4
  },
  {
    id: 4,
    name: "EHC Red Bull",
    abbreviation: "RBM",
    country: "Ger",
    city: "Munich",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 81,
    game_counter: 0,
    logo: rbm,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#0a1d3d",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [rbm_1, rbm_2, rbm_3, rbm_4],
    arena_name: "SAP Garden",
    arena_dedcription:
      "SAP Garden is an indoor arena, in Olympiapark, Munich. The arena was completed in summer 2024. The site was built at the location of the former Radstadion which was demolished in 2015.",
    arena_capacity: 10796,
    arena_photo: rbm_5
  },
  {
    id: 5,
    name: "Grizzlies",
    abbreviation: "WOB",
    country: "GER",
    city: "Wolfsburg",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 81,
    game_counter: 0,
    logo: wob,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ec6400",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [wob_1, wob_2, wob_3, wob_4],
    arena_name: "Eis Arena",
    arena_dedcription:
      "Eis Arena is an arena in Wolfsburg, Germany. Eisarena Wolfsburg opened in 2006.",
    arena_capacity: 4660,
    arena_photo: wob_5
  },
  {
    id: 6,
    name: "Schwenninger Wild Wings",
    abbreviation: "SWW",
    country: "GER",
    city: "Schwenningen",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 80,
    game_counter: 0,
    logo: sww,
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
    photos: [sww_1, sww_2, sww_3, sww_4],
    arena_name: "Helios Arena",
    arena_dedcription:
      "Helios Arena, originally known as Eisstadion am Bauchenberg, is an arena in Villingen-Schwenningen, Germany. It opened in 1976.",
    arena_capacity: 5135,
    arena_photo: sww_5
  },
  {
    id: 7,
    name: "Adler",
    abbreviation: "MAN",
    country: "Ger",
    city: "Mannheim",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 75,
    game_counter: 0,
    logo: man,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#004e9f",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [man_1, man_2, man_3, man_4],
    arena_name: "SAP Arena",
    arena_dedcription:
      "SAP Arena is a multi-purpose arena in Mannheim, Germany. Inaugurated in 2005. The SAP Arena is one of the largest in Germany and one of the most high-tech in Europe. The arena is named after its sponsor SAP.",
    arena_capacity: 13600,
    arena_photo: man_5
  },
  {
    id: 8,
    name: "Kolner Haie",
    abbreviation: "KEC",
    country: "Ger",
    city: "Koln",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 73,
    game_counter: 0,
    logo: kec,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#e30613",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [kec_1, kec_2, kec_3, kec_4, kec_5],
    arena_name: "Lanxess Arena",
    arena_dedcription:
      "Lanxess Arena is an indoor arena, in Cologne, North Rhine-Westphalia, Germany. The arena is spanned by a steel arch supporting the roof via steel cables. The height of the arch is 76 m (249 ft) and its weight is 480 tons. On June 2, 2008, it was announced that Kölnarena would be renamed Lanxess Arena, for a period of ten years. The sponsor, Lanxess AG, is a specialty chemicals group based in the Lanxess Tower in Deutz, Cologne. This naming-rights deal was extended in 2017 until December 31, 2023. Then in October 2023, it was announced that the cooperation between the arena and Lanxess had been extended for another 5 years until 2028.",
    arena_capacity: 18500,
    arena_photo: kec_6
  },
  {
    id: 9,
    name: "ERC Ingolstadt",
    abbreviation: "ING",
    country: "GER",
    city: "Ingolstadt",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 69,
    game_counter: 0,
    logo: ing,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#002255",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [ing_1, ing_2, ing_3, ing_4, ing_5],
    arena_name: "Saturn Arena",
    arena_dedcription: "Saturn Arena is an arena in Ingolstadt, Germany.",
    arena_capacity: 4815,
    arena_photo: ing_6
  },
  {
    id: 10,
    name: "Nurnberg Ice Tigers",
    abbreviation: "NIT",
    country: "GER",
    city: "Nurnberg",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 66,
    game_counter: 0,
    logo: nit,
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
    photos: [nit_1, nit_2, nit_3],
    arena_name: "Arena Nürnberger Versicherung",
    arena_dedcription:
      "The Arena Nürnberger Versicherung (originally known as the Nuremberg Arena) is a multi-use indoor arena that is located in Nuremberg, Germany.",
    arena_capacity: 7809,
    arena_photo: nit_4
  },
  {
    id: 11,
    name: "Dusseldorf EG",
    abbreviation: "DEG",
    country: "Ger",
    city: "Dusseldorf",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 58,
    game_counter: 0,
    logo: deg,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#e20018",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [deg_1, deg_2, deg_3, deg_4],
    arena_name: "PSD Bank Dome",
    arena_dedcription:
      "The PSD Bank Dome is a multi-use indoor arena in Düsseldorf, Germany, it opened in 2006.",
    arena_capacity: 14282,
    arena_photo: deg_5
  },
  {
    id: 12,
    name: "Lowen Frankfurt",
    abbreviation: "FRA",
    country: "GER",
    city: "	Frankfurt",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 55,
    game_counter: 0,
    logo: fra,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#b0baba",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [fra_1, fra_2, fra_3],
    arena_name: "Eissporthalle Frankfurt",
    arena_dedcription:
      "Eissporthalle Frankfurt or Eissporthalle am Ratsweg is an arena in the Bornheim district of Frankfurt, Germany. It has opened on 19 December 1981.",
    arena_capacity: 6946,
    arena_photo: fra_4
  },
  {
    id: 13,
    name: "Iserlohn Roosters",
    abbreviation: "IEC",
    country: "GER",
    city: "Iserlohn",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 58,
    game_counter: 0,
    logo: iec,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#003399",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [iec_1, iec_2],
    arena_name: "Balver-Zinn Arena",
    arena_dedcription: "",
    arena_capacity: 4967,
    arena_photo: iec_3
  },
  {
    id: 14,
    name: "Augsburger Panther",
    abbreviation: "AUG",
    country: "GER",
    city: "Augsburg",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 50,
    game_counter: 0,
    logo: aug,
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
    photos: [aug_1, aug_2, aug_3, aug_4],
    arena_name: "Curt Frenzel Stadium",
    arena_dedcription:
      "The Curt Frenzel Stadium (Curt-Frenzel-Stadion) is an arena in Augsburg, Germany. It was renamed in 1971 after Curt Frenzel, club president of the Panther, who died in 1970. Until 2013 the stadium was only covered by a roof. Not having walls, the stadium was the only in German professional ice hockey partly being an outdoor arena. Along with a complete renovation the arena was closed for the DEL season 2013/14. The renovation had begun in 2010 and was scheduled to be completed in 2012. However, after the first stand had been completed, fans discovered that they were not able to see parts of the ice. The stand had to be rebuilt, causing an estimate of 2,5 million Euro extra cost and leading to a not yet settled lawsuit against the responsible architect.",
    arena_capacity: 6218,
    arena_photo: aug_5
  }
];

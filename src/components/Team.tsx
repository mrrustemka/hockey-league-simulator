import { useParams, useNavigate } from "react-router-dom";
import { Teams } from "../Data/types";
import { whiteTeams } from "../Data/whiteList";
import Chart from "./Chart";
import Header from "./Header";
import "../Styles/Team.css";

function Team() {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const team: Teams | undefined = JSON.parse(
    localStorage.getItem("teamsList") || "[]"
  ).find((team: Teams) => team.id === Number(teamId));

  if (!team) {
    return <div className="team__not-found">Team not found</div>;
  }

  const chartData = team.chartData || [];
  const chartLabels = team.chartLabels || [];
  const color = team.color || "";
  const leagueId: string = JSON.parse(localStorage.getItem("leagueId") || "");

  return (
    <div className="team">
      <Header id={leagueId} />
      <div className="team__subheader">
        <button
          className="team__button team__button--back pulse"
          onClick={() => navigate(-1)}
        >
          Back to the Season
        </button>
        <h1 className="team__name">{team.name + " " + team.status}</h1>
        <img className="team__logo" src={team.logo} alt={team.name} />
      </div>
      <div
        className="team__details"
        style={{
          backgroundColor: team.color,
          color: whiteTeams.includes(team.color) ? "#fff" : "#000000"
        }}
      >
        <h3 className="team__detail-title">Points: {team.points}</h3>
        <h3 className="team__detail-title">
          Games Played: {team.game_counter}
        </h3>
        <h3 className="team__detail-title">Wins: {team.wins}</h3>
        <h3 className="team__detail-title">Losses: {team.loses}</h3>
        <h3 className="team__detail-title">Losses OT: {team.loses_ot}</h3>
        <h3 className="team__detail-title">Goals For: {team.goals_for}</h3>
        <h3 className="team__detail-title">
          Goals Against: {team.goals_against}
        </h3>
        <h3 className="team__detail-title">Goals Diff: {team.goals_diff}</h3>
        <h3 className="team__detail-title">Rating: {team.rating}</h3>
      </div>
      <Chart rank={chartData} labels={chartLabels} color={color} />
    </div>
  );
}

export default Team;

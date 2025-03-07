import { useParams, useNavigate } from "react-router-dom";
import Chart from "./Chart";
import Header from "./Header";
import { Image } from "antd";
import Gallery from "./Gallery";
import { Teams } from "../data/types";
import { whiteTeams } from "../data/whiteList";
import { Typography } from "antd";
import "../Styles/Team.css";

const { Title } = Typography;

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
  const playOffTeams: number =
    JSON.parse(localStorage.getItem("teamsList") || "[]").length > 16
      ? 16
      : JSON.parse(localStorage.getItem("teamsList") || "[]").length > 8
      ? 8
      : JSON.parse(localStorage.getItem("teamsList") || "[]").length > 4
      ? 4
      : 2;
  const photos: string[] = team.photos || [];

  return (
    <div className="team">
      <Header id={leagueId} />
      <div
        className="team__subheader"
        style={{
          backgroundColor: team.color,
          color: whiteTeams.includes(team.color) ? "#fff" : "#000000"
        }}
      >
        <button
          className="team__button team__button--back"
          onClick={() => navigate(-1)}
        >
          Back to the Season
        </button>
        {team.isPlayOff ? (
          <div>
            <div className="team__name--isPlayOff">x</div>
            <Title level={1} className="team__name">
              {team.name + " " + team.status}
            </Title>
          </div>
        ) : (
          <Title level={1} className="team__name">
            {team.name + " " + team.status}
          </Title>
        )}

        <img
          className="team__logo"
          src={team.logo}
          alt={team.name}
          loading="lazy"
        />
      </div>
      <div
        className="team__details"
        style={{
          backgroundColor: team.color,
          color: whiteTeams.includes(team.color) ? "#fff" : "#000000"
        }}
      >
        <Title 
          level={3} 
          className="team__detail-title"
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? "#fff" : "#000000",
            borderColor: whiteTeams.includes(team.color) ? "#fff" : "#000000"
          }}>
          Points: {team.points}
        </Title>
        <Title 
          level={3} 
          className="team__detail-title"
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? "#fff" : "#000000",
            borderColor: whiteTeams.includes(team.color) ? "#fff" : "#000000"
          }}>
          Games Played: {team.game_counter}
        </Title>
        <Title 
          level={3} 
          className="team__detail-title"
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? "#fff" : "#000000",
            borderColor: whiteTeams.includes(team.color) ? "#fff" : "#000000"
          }}>
          Wins: {team.wins}
        </Title>
        <Title 
          level={3} 
          className="team__detail-title"
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? "#fff" : "#000000",
            borderColor: whiteTeams.includes(team.color) ? "#fff" : "#000000"
          }}>
          Losses: {team.loses}
        </Title>
        <Title 
          level={3} 
          className="team__detail-title"
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? "#fff" : "#000000",
            borderColor: whiteTeams.includes(team.color) ? "#fff" : "#000000"
          }}>
          Losses OT: {team.loses_ot}
        </Title>
        <Title 
          level={3} 
          className="team__detail-title"
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? "#fff" : "#000000",
            borderColor: whiteTeams.includes(team.color) ? "#fff" : "#000000"
          }}>
          Goals For: {team.goals_for}
        </Title>
        <Title 
          level={3} 
          className="team__detail-title"
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? "#fff" : "#000000",
            borderColor: whiteTeams.includes(team.color) ? "#fff" : "#000000"
          }}>
          Goals Against: {team.goals_against}
        </Title>
        <Title 
          level={3} 
          className="team__detail-title"
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? "#fff" : "#000000",
            borderColor: whiteTeams.includes(team.color) ? "#fff" : "#000000"
          }}>
          Goals Diff: {team.goals_diff}
        </Title>
        <Title 
          level={3} 
          className="team__detail-title"
          style={{
            backgroundColor: team.color,
            color: whiteTeams.includes(team.color) ? "#fff" : "#000000",
            borderColor: whiteTeams.includes(team.color) ? "#fff" : "#000000"
          }}>
          Rating: {team.rating}
        </Title>
      </div>
      <Gallery photos={photos} team={team.name} />
      <Chart
        rank={chartData}
        labels={chartLabels}
        color={color}
        playOff={playOffTeams}
      />
      <Title level={2} className="team__header">
        {team.city + " " + team.name + " plays at " + team.arena_name}{" "}
      </Title>
      <Image
        className="team__arena"
        width="auto"
        src={team.arena_photo}
        preview={false}
        loading="lazy"
      />
      <Title level={5} className="team__description">
        {team.arena_dedcription}
      </Title>
    </div>
  );
}

export default Team;

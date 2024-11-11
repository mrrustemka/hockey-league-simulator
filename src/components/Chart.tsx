import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Chart(props: {
  rank: number[];
  labels: string[];
  color: string;
  playOff: number;
}) {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Rank",
        data: props.rank,
        backgroundColor: props.color,
        borderColor: props.color,
        pointBackgroundColor: "#515151",
        pointRadius: 2,
        borderWidth: 1,
        fill: true,
        tension: 0.4
      },
      {
        label: "Play-Off Line",
        data: Array(props.labels.length).fill(props.playOff),
        borderColor: "rgba(255, 99, 132, 0.7)",
        borderWidth: 1,
        borderDash: [5, 5],
        pointRadius: 0,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const
      },
      title: {
        display: true,
        text: "Season Rank"
      }
    },
    scales: {
      y: {
        reverse: true,
        min: 0,
        max: JSON.parse(localStorage.getItem("teamsList") || "[]").length
      }
    }
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export default Chart;

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

function Chart(props: { rank: number[]; labels: string[]; color: string }) {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Rank",
        data: props.rank,
        backgroundColor: props.color,
        borderColor: props.color,
        pointBackgroundColor: "#fff",
        pointRadius: 0,
        borderWidth: 1,
        fill: true,
        tension: 0.4
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

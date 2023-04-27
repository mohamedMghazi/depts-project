import { Chart as ChartJS, registerables } from 'chart.js';
import {Bar} from "react-chartjs-2";
ChartJS.register(...registerables);

export default function BarChart({ chartName = '', data = [] }) {
    if (!data || !data.length) {
        return null;
    }

    const chartData = {
        labels: data.map(project => project.name),
        datasets: [
            {
                label: 'Rank',
                backgroundColor: '#f50157',
                borderColor: '#be0041',
                borderWidth: 3,
                data: data.map(project => project.rank)
            }
        ]
    };
    const options = {
        plugins: {
            title: {
                display: true,
                text: chartName,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return <Bar data={chartData} options={options} />
}

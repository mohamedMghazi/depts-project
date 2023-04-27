import { Chart as ChartJS, registerables } from 'chart.js';
import {Bar, Doughnut} from 'react-chartjs-2';

ChartJS.register(...registerables);

const DEFAULT_TYPE = 'Bar';
const DEFAULT_LABEL = 'name';
const DEFAULT_VALUE = 'rank';
const DEFAULT_BACKGROUND_COLORS = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
];

function generateChartData(data, label, val) {
    return {
        labels: data.map((item) => item[label]),
        datasets: [
            {
                label: val.toUpperCase(),
                backgroundColor: DEFAULT_BACKGROUND_COLORS,
                borderColor: 'rgba(190,0,65,0.2)',
                borderWidth: 1,
                data: data.map((item) => item[val]),
            },
        ],
    };
}

function generateChartOptions(chartName) {
    return {
        plugins: {
            title: {
                display: true,
                text: chartName,
                position: 'bottom'
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
}

export default function Chart({ type = DEFAULT_TYPE, chartName = '', data = [], label = DEFAULT_LABEL, val = DEFAULT_VALUE }) {
    if (!data || !data.length) {
        return null;
    }

    const chartData = generateChartData(data, label, val);
    const chartOptions = generateChartOptions(chartName);

    switch (type) {
        case 'Doughnut':
            return <Doughnut data={chartData} options={chartOptions} />;

        case 'Bar':
            return <Bar data={chartData} options={chartOptions} />;

        default:
            return null;
    }
}

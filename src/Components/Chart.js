import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip
);

const CustomChart = ({ chartData }) => {
	return (
		<>
			<Line
				data={chartData}
				options={{
					scales: {
						x: {
							ticks: {
								autoSkip: true,
								maxTicksLimit: 10,
								maxRotation: 0,
							},
						},
					},
				}}
			/>
		</>
	);
};

export default CustomChart;

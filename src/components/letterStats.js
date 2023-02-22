import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function LetterStatsGroup(props) {
  const { letterStats } = props;

  const sortedStats = letterStats.sort(([a], [b]) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  // const sortedStats = letterStats.sort((a, b) => b[1] - a[1]);

  // Define the data for the chart
  const data = {
    labels: sortedStats.map(([letter]) => letter),
    datasets: [
      {
        label: 'Letter Count',
        data: sortedStats.map(([, count]) => count),

        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Define the options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Render the Bar chart
  return (
    <div className='letter-stats-group'>
      <h3>Letter Stats</h3>

      <Bar data={data} options={options} />
      {sortedStats.map(([letter, count, percent]) => (
        <div key={letter}>
          {letter}: {count} ({percent.toFixed(2)}%)
        </div>
      ))}
    </div>
  );
}

export default LetterStatsGroup;

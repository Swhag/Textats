import React, { useState } from 'react';
import '../styles/LetterChart.css';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// --------------------------------------------------------------------
// JavaScript functions
// --------------------------------------------------------------------

const handleSortChange = (stats, sortOption) => {
  if (sortOption === 'A-Z') {
    return stats.sort(([a], [b]) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }

  if (sortOption === 'High to Low') {
    return stats.sort((a, b) => b[1] - a[1]);
  }

  if (sortOption === 'Low to High') {
    return stats.sort((a, b) => a[1] - b[1]);
  }

  // Return the original stats array if the sortOption is invalid
  return stats;
};

// --------------------------------------------------------------------
// React Components
// --------------------------------------------------------------------
function LetterChart(props) {
  const { letterStats } = props;
  const sortArray = ['A-Z', 'Low to High', 'High to Low'];

  let [sortOption, setSortOption] = useState('A-Z');

  // Set sortedStats based on sortOption
  const sortedStats = handleSortChange(letterStats, sortOption);

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
    <div className='letter-stats'>
      <div className='letter-stats-header'>
        <h3>Letter Stats</h3>
        <select
          className='selectPicker'
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
          }}
        >
          {sortArray.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className='letter-stats-chart'>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default LetterChart;

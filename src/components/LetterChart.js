import React, { useState } from 'react';
import '../styles/Stats.css';

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

  const color = 'rgba(0, 0, 0, 0.6)';
  const labelColor = 'rgba(0, 0, 0, 1)';
  const gridColor = 'rgba(0, 0, 0, 0.3)';
  const backgroundColor = 'rgba(50,205,50, 0.4)';
  const borderColor = 'rgba(50,205,50, 1)';

  // Define the data for the chart
  const data = {
    labels: sortedStats.map(([letter]) => letter),
    datasets: [
      {
        label: 'Letter Count',
        data: sortedStats.map(([, count]) => count),
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  // Define the options for the chart
  const options = {
    plugins: {
      legend: {
        labels: {
          color: labelColor,
          font: {
            size: 18,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: color,
        },
        grid: {
          color: gridColor,
        },
      },
      x: {
        ticks: {
          color: color,
        },
        grid: {
          color: gridColor,
        },
      },
    },
  };

  // Render the Bar chart
  return (
    <div className='letter-chart'>
      <div className='letter-chart-header'>
        <h3>Letter Stats</h3>
        <div>
          <label>Sort By:</label>
          <select
            className='select-picker'
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
      </div>

      <Bar data={data} options={options} />
    </div>
  );
}

export default LetterChart;

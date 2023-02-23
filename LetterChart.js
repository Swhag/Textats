import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const sortHighToLow = array.sort(([a], [b]) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

function sortByAlphabet(array) {
  array.sort((a, b) => b[1] - a[1]);
}

const sortByAlphabet = array.sort((a, b) => b[1] - a[1]);

function LetterChart(props) {
  const { letterStats } = props;

  let [sortOption, setSortOption] = useState('A-Z');
  let [sortedStats, sertSortedStats] = useState(sortByAlphabet);

  const sortArray = ['A-Z', 'High to Low', 'Low to High'];

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
          onChange={(e) => {}}
        >
          {sortArray.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <Bar data={data} options={options} />
    </div>
  );
}

export default LetterChart;

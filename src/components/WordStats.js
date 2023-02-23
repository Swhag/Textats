import React from 'react';

function WordStats(props) {
  const { wordStats } = props;

  const sortedStats = wordStats.sort((a, b) => b[1] - a[1]);

  return (
    <div className='letter-stats'>
      <h3>Word Density</h3>
      {sortedStats.map(([Word, count, percent]) => (
        <div className='letter-stats-wrapper' key={Word}>
          <div>{Word} </div>
          <div className='letter-stats-count'>
            {count.toLocaleString()}
            <span className='percent'>({percent.toFixed(2)}%)</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WordStats;

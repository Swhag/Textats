import React from 'react';

function LetterStats(props) {
  const { letterStats } = props;

  const sortedStats = letterStats.sort((a, b) => b[1] - a[1]);

  return (
    <div className='letter-counts'>
      <h3>Letter Counts</h3>
      {sortedStats.map(([letter, count, percent]) => (
        <div key={letter}>
          {letter}: {count} ({percent.toFixed(2)}%)
        </div>
      ))}
    </div>
  );
}

export default LetterStats;

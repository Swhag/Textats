import React from 'react';

function LetterCounts(props) {
  const { letterCounts } = props;

  const sortedCounts = letterCounts.sort(([a], [b]) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  return (
    <div className='letter-counts'>
      <h3>Letter Counts</h3>
      {sortedCounts.map(([letter, count, percent]) => (
        <div key={letter}>
          {letter}: {count} ({percent.toFixed(2)}%)
        </div>
      ))}
    </div>
  );
}

export default LetterCounts;

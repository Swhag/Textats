import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LetterGraph({ letterCounts }) {
  const sortedCounts = letterCounts.sort(([aLetter], [bLetter]) =>
    aLetter.localeCompare(bLetter)
  );

  const maxPercent = Math.max(...sortedCounts.map(([, , percent]) => percent));

  return (
    <div className='letter-graph'>
      <h3>Letter Graph</h3>
      {sortedCounts.map(([letter, count, percent]) => (
        <div key={letter}>
          <div className='bar-container'>
            <div
              className='bar'
              style={{ width: `${(percent / maxPercent) * 100}%` }}
            ></div>
            <div className='bar-label'>
              {letter}: {count} ({percent.toFixed(2)}%)
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LetterGraph;

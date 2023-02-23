import React from 'react';
import '../styles/Stats.css';

function Stats(props) {
  const { letterStats, wordStats } = props;

  return (
    <div className='stats-container'>
      <LetterStats letterStats={letterStats} />
      <WordStats wordStats={wordStats} />
    </div>
  );
}

function LetterStats(props) {
  const { letterStats } = props;

  const sortedStats = letterStats.sort((a, b) => b[1] - a[1]);

  return (
    <div className='letter-stats'>
      <h3>Letter Density</h3>
      {sortedStats.map(([letter, count, percent]) => (
        <div className='letter-stats-wrapper' key={letter}>
          <div>{letter}: </div>
          <div className='letter-stats-count'>
            {count.toLocaleString()}
            <span className='percent'>({percent.toFixed(2)}%)</span>
          </div>
        </div>
      ))}
    </div>
  );
}

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

export default Stats;

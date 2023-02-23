import React from 'react';
import '../styles/Stats.css';

import LetterStats from './LetterStats';
import WordStats from './WordStats';

function Stats(props) {
  const { letterStats, wordStats } = props;

  return (
    <div className='stats-container'>
      <LetterStats letterStats={letterStats} />
      <WordStats wordStats={wordStats} />
    </div>
  );
}

export default Stats;

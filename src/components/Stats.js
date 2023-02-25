import React from 'react';
import '../styles/Stats.css';

function Stats(props) {
  const { letterStats, wordStats, uniqueWords } = props;

  return (
    <div className='stats-section'>
      <div className='stats-group'>
        <LetterStats letterStats={letterStats} />
        <WordStats wordStats={wordStats} />
      </div>

      <WordStatsLength uniqueWords={uniqueWords} />
    </div>
  );
}

function LetterStats(props) {
  const { letterStats } = props;

  const sortedStats = letterStats.sort((a, b) => b[1] - a[1]);

  return (
    <div className='stats-container'>
      <h3>Letter Density</h3>
      <div className='stats'>
        {sortedStats.map(([letter, count, percent]) => (
          <div className='stats-block' key={letter}>
            <div className='stats-word'>{letter}: </div>
            <div className='stats-count'>
              {count.toLocaleString()}
              <span className='percent'>({percent.toFixed(2)}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function WordStats(props) {
  const { wordStats } = props;

  const sortedStats = wordStats.sort((a, b) => b[1] - a[1]);

  return (
    <div className='stats-container'>
      <h3>Keyword Density</h3>
      <div className='stats'>
        {sortedStats.map(([word, count, percent]) => (
          <div className='stats-block' key={word}>
            <div className='stats-word'>{word} </div>
            <div className='stats-count'>
              {count.toLocaleString()}
              <span className='percent'>({percent.toFixed(2)}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WordStatsLength(props) {
  const { uniqueWords } = props;

  // sort uniqueWords by word length, shortest to longest
  const sortedWords = uniqueWords.sort((a, b) => {
    // Compare by length first
    if (b.length !== a.length) {
      return b.length - a.length;
    }
    // If length is the same, compare alphabetically
    for (let i = 0; i < a.length; i++) {
      if (a[i] < b[i]) {
        return -1;
      } else if (a[i] > b[i]) {
        return 1;
      }
    }
    return 0;
  });

  return (
    <div className='stats-container'>
      <h3>Words by Length</h3>
      <div className='stats'>
        {sortedWords.map((word, index) => (
          <div className='stats-block' key={index}>
            <div className='stats-word'>{word} </div>
            <div className='stats-count'>{word.length} Letters</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;

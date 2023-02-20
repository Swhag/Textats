import React, { useState } from 'react';
import '../styles/textCounter.css';
function TextAnalyzer() {
  const [text, setText] = useState('');
  const [letterCounts, setLetterCounts] = useState(null);

  function handleTextChange(event) {
    const textValue = event.target.value;
    setText(textValue);

    const counts = countLetters(textValue);
    setLetterCounts(counts);
  }

  function countLetters(str) {
    const counts = {};

    for (let i = 0; i < str.length; i++) {
      const letter = str[i].toLowerCase();

      if (letter.match(/[a-z]/i)) {
        counts[letter] = (counts[letter] || 0) + 1;
      }
    }

    return counts;
  }

  return (
    <div className='text-analyzer'>
      <h2>Text Analyzer</h2>

      <textarea
        className='text-field'
        type='text'
        name='text'
        value={text}
        onChange={handleTextChange}
      ></textarea>

      <div className='counter-group'>
        <div>Characters: {text.length}</div>
        <div>Words: {text.trim().split(/\s+/).length}</div>
        <div>Lines: {text.split('\n').length}</div>
      </div>

      {letterCounts && (
        <div className='letter-counts'>
          <h3>Letter Counts</h3>
          {Object.entries(letterCounts).map(([letter, count]) => (
            <div key={letter}>
              {letter}: {count}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TextAnalyzer;

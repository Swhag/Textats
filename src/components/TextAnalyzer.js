import React, { useState } from 'react';
import '../styles/textCounter.css';
// import LetterGraph from './Chart';

function TextAnalyzer() {
  const [text, setText] = useState('');
  const [letterCounts, setLetterCounts] = useState(null);

  function handleTextChange(event) {
    const textValue = event.target.value;
    setText(textValue);

    const counts = countLetters(textValue);
    setLetterCounts(counts);
  }

  function countLetters(textValue) {
    const counts = {};
    const totalLetters = textValue.replace(/[^a-zA-Z]/g, '').length;
    const result = [];

    for (let i = 0; i < textValue.length; i++) {
      const letter = textValue[i].toLowerCase();

      if (letter.match(/[a-z]/i)) {
        if (counts[letter] === undefined) {
          counts[letter] = 0;
        }
        counts[letter]++;
      }
    }

    const letters = Object.keys(counts);

    for (let j = 0; j < letters.length; j++) {
      const letter = letters[j];
      const count = counts[letter];
      result.push([letter, count, (count / totalLetters) * 100]);
    }

    return result;
  }

  return (
    <div className='text-analyzer'>
      <h2>Text Analyzer</h2>
      <TextField value={text} onChange={handleTextChange} />
      <CounterGroup text={text} />
      {letterCounts && <LetterCounts letterCounts={letterCounts} />}
    </div>
  );
}

function TextField({ value, onChange }) {
  return (
    <textarea
      className='text-field'
      type='text'
      name='text'
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

function CounterGroup({ text }) {
  const wordCount = text.trim().split(/\s+/).length;
  const lineCount = text.split('\n').length;
  const charCount = text.length;

  return (
    <div className='counter-group'>
      <div>Characters: {charCount}</div>
      <div>Words: {wordCount}</div>
      <div>Lines: {lineCount}</div>
    </div>
  );
}

function LetterCounts({ letterCounts }) {
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

export default TextAnalyzer;

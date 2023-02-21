import React, { useState } from 'react';
import '../styles/textCounter.css';

import TextField from './TextField';
import CounterGroup from './CounterGroup';
import LetterCounts from './LetterCounts';

function getCounts(textValue) {
  const lowerCaseText = textValue.toLowerCase();
  const characters = lowerCaseText.split('');
  const letters = characters.filter((char) => /[a-z]/.test(char));

  const counts = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (counts[letter] === undefined) {
      counts[letter] = 0;
    }
    counts[letter]++;
  }

  return counts;
}

function getLetterStats(textValue) {
  const counts = getCounts(textValue);
  const totalLetters = textValue.replace(/[^a-zA-Z]/g, '').length;
  const letters = Object.keys(counts);
  const result = [];

  for (let j = 0; j < letters.length; j++) {
    const letter = letters[j];
    const count = counts[letter];
    const letterPercentage = (count / totalLetters) * 100;

    result.push([letter, count, letterPercentage]);
  }

  return result;
}

function TextAnalyzer() {
  const [text, setText] = useState('');
  const [letterCounts, setLetterCounts] = useState(null);

  function handleTextChange(event) {
    const textValue = event.target.value;
    setText(textValue);

    const counts = getLetterStats(textValue);
    setLetterCounts(counts);
  }

  return (
    <div className='text-analyzer'>
      <h2>Text Analyzer</h2>
      <TextField text={text} handleTextChange={handleTextChange} />
      <CounterGroup text={text} />
      {letterCounts && <LetterCounts letterCounts={letterCounts} />}
    </div>
  );
}

export default TextAnalyzer;

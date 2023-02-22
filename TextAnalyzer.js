import React, { useState } from 'react';
import '../styles/TextAnalyzer.css';

import TextField from './TextField';
import CounterGroup from './CounterGroup';
import LetterStatsGroup from './letterStats';

// takes textValue and returns filtered array of alphabet letters
function filterLetters(textValue) {
  const letterArray = [];

  for (let i = 0; i < textValue.length; i++) {
    const char = textValue[i].toUpperCase();
    if (char >= 'A' && char <= 'Z') {
      letterArray.push(char);
    }
  }
  return letterArray;
}

// counts the occurrence of each letter
function getLetterCount(textValue) {
  const filteredText = filterLetters(textValue);
  const letterCount = {};

  for (let i = 0; i < filteredText.length; i++) {
    const letter = filteredText[i];
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
  return letterCount;
}

// Calculates and returns the letter count and percentage of each letter as an array of arrays.
function getLetterStats(textValue) {
  const counts = getLetterCount(textValue);
  const totalLetters = filterLetters(textValue).length;
  const letters = Object.keys(counts);
  const result = [];

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const count = counts[letter];
    const letterPercentage = (count / totalLetters) * 100;

    result.push([letter, count, letterPercentage]);
  }

  return result;
}

function TextAnalyzer() {
  const [text, setText] = useState('');
  const [letterStats, setLetterStats] = useState([]);

  function handleTextChange(event) {
    const textValue = event.target.value;
    setText(textValue);

    const stats = getLetterStats(textValue);
    setLetterStats(stats);
  }

  return (
    <div className='text-analyzer'>
      <h2>Text Analyzer</h2>
      <TextField text={text} handleTextChange={handleTextChange} />
      <CounterGroup text={text} />
      <LetterStatsGroup letterStats={letterStats} />
    </div>
  );
}

export default TextAnalyzer;

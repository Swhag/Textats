import React, { useState } from 'react';
import '../styles/TextAnalyzer.css';

import TextField from './TextField';
import CounterGroup from './CounterGroup';
import LetterChart from './LetterChart';
import Stats from './Stats';
import TextSummarizer from './TextSummarizer';

// --------------------------------------------------------------------
// JavaScript functions
// --------------------------------------------------------------------

// takes textValue and returns filtered array of letters (alphabet only)
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

// calculates the letter count and percentage of each letter as an array of arrays.
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

// takes textValue returns an array of words
function getWords(textValue) {
  const wordsArray = textValue
    .replace(/[^\w\s]/gi, '')
    .toLowerCase()
    .split(/\s+/);

  return wordsArray;
}

// takes an array of words and filters out stop words
function filterWords(textValue) {
  const stopWords = [
    'a',
    'an',
    'and',
    'as',
    'at',
    'be',
    'but',
    'by',
    'for',
    'if',
    'in',
    'is',
    'it',
    'of',
    'on',
    'or',
    'so',
    'the',
    'to',
    'with',
    // Add more as needed
  ];
  const wordsArray = getWords(textValue);

  const filteredArray = wordsArray.filter((word) => !stopWords.includes(word));
  return filteredArray;
}

// counts the occurrences of each unique word
function countWordOccurrences(textValue) {
  const wordsArray = filterWords(textValue);
  const wordCounts = {};

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (wordCounts[word] === undefined) {
      wordCounts[word] = 1;
    } else {
      wordCounts[word]++;
    }
  }
  return wordCounts;
}

// calculates the percentage of each unique word
function getWordStats(textValue) {
  const wordCounts = countWordOccurrences(textValue);
  const totalWords = getWords(textValue).length;
  const words = Object.keys(wordCounts);
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const count = wordCounts[word];
    const wordPercentage = (count / totalWords) * 100;

    result.push([word, count, wordPercentage]);
  }

  return result;
}

// --------------------------------------------------------------------
// React Components
// --------------------------------------------------------------------

function TextAnalyzer() {
  const [text, setText] = useState('');
  const [letterStats, setLetterStats] = useState([]);
  const [wordStats, setWordStats] = useState([]);
  const [uniqueWords, setUniqueWords] = useState([]);

  function handleTextChange(event) {
    const textValue = event.target.value;
    setText(textValue);

    const LetterStats = getLetterStats(textValue);
    setLetterStats(LetterStats);

    const WordStats = getWordStats(textValue);
    setWordStats(WordStats);

    const wordsArray = getWords(textValue);
    const uniqueWordsArray = [...new Set(wordsArray)];
    setUniqueWords(uniqueWordsArray);
  }

  return (
    <div className='text-analyzer'>
      <h2>Text Analyzer</h2>

      <div className='content-container'>
        <div className='content-left'>
          <TextField text={text} handleTextChange={handleTextChange} />
          <CounterGroup text={text} />
          <TextSummarizer text={text} />
        </div>

        <div className='content-right'>
          <LetterChart letterStats={letterStats} />
          <Stats
            letterStats={letterStats}
            wordStats={wordStats}
            uniqueWords={uniqueWords}
          />
        </div>
      </div>
    </div>
  );
}

export default TextAnalyzer;

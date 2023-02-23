import React from 'react';
import '../styles/counterGroup.css';

function CounterGroup(props) {
  const { text } = props;

  // if text is equal to " ", then wordCount word and line count is set to 0 instead of 1
  const words = text.trim().split(/\s+/);
  const lines = text.split('\n');
  const charCount = text.length.toLocaleString();
  const charCountWithoutSpaces = text
    .replace(/\s/g, '')
    .length.toLocaleString();
  const wordCount = words[0] === '' ? 0 : words.length.toLocaleString();
  const lineCount = lines[0] === '' ? 0 : lines.length.toLocaleString();

  return (
    <div className='counter-group'>
      <div className='label'>
        Characters: <span className='counter'>{charCount}</span>
      </div>
      <div className='label'>
        Characters (No Spaces):
        <span className='counter'>{charCountWithoutSpaces}</span>
      </div>
      <div className='label'>
        Words: <span className='counter'>{wordCount}</span>
      </div>
      <div className='label'>
        Lines: <span className='counter'>{lineCount}</span>
      </div>
    </div>
  );
}

export default CounterGroup;

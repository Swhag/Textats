import React from 'react';
import '../styles/counterGroup.css';

function CounterGroup(props) {
  const { text } = props;

  const wordCount = text.trim().split(/\s+/).length;
  const lineCount = text.split('\n').length;
  const charCount = text.length;

  return (
    <div className='counter-group'>
      <div className='label'>
        Characters: <span className='counter'>{charCount}</span>
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

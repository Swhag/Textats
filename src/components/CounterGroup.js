import React from 'react';

function CounterGroup(props) {
  const { text } = props;

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

export default CounterGroup;

import React from 'react';
import '../styles/textCounter.css';

function TextCounter(props) {
  return (
    <container className='case-converter'>
      <h2>Convert Case</h2>
      <textarea className='text-field' type='text' name='text'></textarea>
    </container>
  );
}

export default TextCounter;

import React from 'react';

function TextField(props) {
  const { text, handleTextChange } = props;

  return (
    <div className='text-field-container'>
      <textarea
        className='text-field'
        type='text'
        name='text'
        value={text}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
}

export default TextField;

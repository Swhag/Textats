import React from 'react';

function TextField(props) {
  const { text, handleTextChange } = props;

  return (
    <textarea
      className='text-field'
      type='text'
      name='text'
      value={text}
      onChange={handleTextChange}
    ></textarea>
  );
}

export default TextField;

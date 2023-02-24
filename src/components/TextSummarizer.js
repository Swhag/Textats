import React, { useState } from 'react';

function TextSummarizer(props) {
  const { text } = props;
  const [inputText, setInputText] = useState(text);
  const [summary, setSummary] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSummarize = () => {
    const API_KEY = 'a7fdd77a5b7574ed5bccfd7b78c940a9';
    // encode text value to ensure it is properly formatted in the API request
    const txtParam = encodeURIComponent(text);
    const url = `https://api.meaningcloud.com/summarization-1.0?key=${API_KEY}&txt=${txtParam}&sentences=3`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === '0') {
          setSummary(data.summary);
        } else {
          console.log('Error:', data.status.msg);
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      {/* <textarea value={inputText} onChange={handleInputChange} /> */}
      <button onClick={handleSummarize}>Summarize</button>
      <div>{summary}</div>
    </div>
  );
}

export default TextSummarizer;

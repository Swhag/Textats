import React, { useState } from 'react';
import CounterGroup from './CounterGroup';
import '../styles/TextSummarizer.css';

function TextSummarizer(props) {
  const { text } = props;
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = () => {
    const API_KEY = 'a7fdd77a5b7574ed5bccfd7b78c940a9';
    // encode text value to ensure it is properly formatted in the API request
    const txtParam = encodeURIComponent(text);
    const url = `https://api.meaningcloud.com/summarization-1.0?key=${API_KEY}&txt=${txtParam}&sentences=3`;

    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === '0') {
          setSummary(data.summary);
        } else {
          console.log('Error:', data.status.msg);
        }
      })
      .catch((error) => console.error('Error:', error))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className='text-info'>
        <CounterGroup text={text} />
        <button className='summary-btn' onClick={handleSummarize}>
          {isLoading ? (
            <>
              <div className='loading-spinner'>
                Summarizing... <i className='fa fa-spinner fa-spin fa-lg'></i>
              </div>
            </>
          ) : (
            'Summarize Text'
          )}
        </button>
      </div>
      {summary && <div className='summary'>{summary}</div>}
    </>
  );
}

export default TextSummarizer;

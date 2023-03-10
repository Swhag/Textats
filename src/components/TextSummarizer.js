import React, { useState } from 'react';
import CounterGroup from './CounterGroup';
import '../styles/TextSummarizer.css';

function TextSummarizer(props) {
  const { text, setText } = props;
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleClearClick = () => {
    setText('');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setCopyButtonText('Copied!');
    setTimeout(() => {
      setCopyButtonText('Copy');
    }, 4000);
  };

  const handleSummarize = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
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
      <div className='text-info-row'>
        <CounterGroup text={text} handleClearClick={handleClearClick} />
        <div className='button-group'>
          <button onClick={handleClearClick}>Clear</button>
          <button onClick={handleCopyClick}>{copyButtonText}</button>
          <button onClick={handleSummarize}>
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
      </div>
      {summary && <div className='summary'>{summary}</div>}
    </>
  );
}

export default TextSummarizer;

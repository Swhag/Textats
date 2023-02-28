import React, { useState, useEffect } from 'react';

function Info(props) {
  const [messages, setMessages] = useState([
    'The letter "E" is the most commonly used letter in the English language. Test it out yourself!',
    'By contrast, the least commonly used letters in English are X, Q, and Z.',
    'The longest English word that can be spelled without repeating any letters is "uncopyrightable".',
    'The longest word in English which doesn’t use the letter E is "floccinaucinihilipilification"',
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    setIsMessageVisible(true);

    const intervalId = setInterval(() => {
      setIsMessageVisible(false);
      setTimeout(() => {
        setCurrentMessageIndex(
          (currentMessageIndex) => (currentMessageIndex + 1) % messages.length
        );
        setIsMessageVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [messages.length]);

  return (
    <>
      <div className='message-container'>
        <h2>Fun Facts</h2>
        <p
          className={`info-message ${isMessageVisible ? 'fade-in' : ''}`}
          key={currentMessageIndex}
        >
          {messages[currentMessageIndex]}
        </p>
      </div>
      <div className='info'>
        <p>
          <span className='bold'>Textats</span> is a tool designed to assist
          students, writers, and social media enthusiasts with their
          text-related needs. With Textats, users can easily analyze their text
          and obtain valuable insights such as the character count (with and
          without spaces), and the number of words. The app also features a
          letter occurrence graph, keyword density analysis, and lists of words
          sorted by length.
        </p>
        <p>
          Whether you're a student working on a research paper or a social media
          enthusiast crafting the perfect tweet within the 280 character limit,
          Textats can help you achieve your goals. You can also use this to
          generate a quick summary of your text, saving you time and effort in
          the writing process.
        </p>
      </div>
    </>
  );
}

export default Info;

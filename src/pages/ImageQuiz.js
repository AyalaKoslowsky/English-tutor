import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ImageQuiz.css';

const ImageQuiz = () => {
  const [correctWord, setCorrectWord] = useState('');
  const [wordOptions, setWordOptions] = useState([]);
  const [selectedWord, setSelectedWord] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const fetchQuizData = () => {
    axios.get('http://127.0.0.1:5000/get_random_objects')
      .then(response => {
        console.log('Quiz data:', response.data);  // Debugging line
        setCorrectWord(response.data.correct_word);
        setWordOptions(response.data.word_options);
        setSelectedWord('');
        setResultMessage('');
      })
      .catch(error => console.error('Error fetching quiz data:', error));
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  const handleWordClick = (word) => {
    setSelectedWord(word);
    if (word === correctWord) {
      setResultMessage('Right');
    } else {
      setResultMessage('Wrong');
    }
    setTimeout(fetchQuizData, 2000);  // Fetch new quiz data after 2 seconds
  };

  return (
    <div>
      {correctWord && <img src={`${process.env.PUBLIC_URL}/${correctWord.toLowerCase()}.png`} alt="Random Object" className="quiz-image" />}
      <div>
        {wordOptions.map((word, index) => (
          <button key={index} onClick={() => handleWordClick(word)}>
            {word}
          </button>
        ))}
      </div>
      {selectedWord && <p>{resultMessage}</p>}
    </div>
  );
};

export default ImageQuiz;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function VoiceToText() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState({ success: 0, failure: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/word')
      .then((res) => {
        setWords(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const { transcript, listening } = useSpeechRecognition();

  const handleSuccessfulAttempt = () => {
    if (attempts.success < 4) {
      setAttempts({ ...attempts, success: attempts.success + 1 });
    } else {
      window.location.href = '/pass';
    }
  };

  const handleFailedAttempt = () => {
    if (attempts.failure < 3) {
      setAttempts({ ...attempts, failure: attempts.failure + 1 });
    } else {
      window.location.href = '/fail';
    }
  };

  const handleSpeechRecognitionResult = () => {
    if (currentWordIndex !== null) {
      if (transcript.toLowerCase() === words[currentWordIndex].word.toLowerCase()) {
        handleSuccessfulAttempt();
      } else {
        handleFailedAttempt();
      }
    }
  };

  const startListeningAndUpdateData = () => {
    SpeechRecognition.startListening();

    // Generate a new random index to display a different word
    const newWordIndex = Math.floor(Math.random() * words.length);
    setCurrentWordIndex(newWordIndex);

    handleSpeechRecognitionResult();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg mx-auto p-4 lg:items-center">
        <div>
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <div>
              {currentWordIndex !== null && (
                <div className='mb-16 justify-center items-center'>{words[currentWordIndex].word}</div>
              )}
            </div>
          )}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Voice to Text</h2>
        <div className="mb-4">
          <p className="text-lg mb-2">Transcript:</p>
          <div className="bg-gray-100 p-2 rounded-md h-16 overflow-y-auto">
            {transcript}
          </div>
        </div>
        <button
          onClick={startListeningAndUpdateData}
          disabled={listening}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md mr-8 ${
            listening && 'opacity-50 cursor-not-allowed'
          }`}
        >
          Start Listening
        </button>
        <button
          onClick={SpeechRecognition.stopListening}
          disabled={!listening}
          className={`bg-red-500 text-white px-4 py-2 rounded-md ${
            !listening && 'opacity-50 cursor-not-allowed'
          }`}
        >
          Stop Listening
        </button>
      </div>
    </div>
  );
}

export default VoiceToText;
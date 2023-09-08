import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';
import speaker from "../../assets/sigthted-test/speaker.svg"


function VoiceToText() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState({ success: 0, failure: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  
  

  const { speak } = useSpeechSynthesis();

  const predefinedText = "Please make sure to cover your one eye before start the test by clicking the blue button below and do the test for both eyes.";



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
      window.location.href = '/eye-sight-pass';
    }
  };

  const handleFailedAttempt = () => {
    if (attempts.failure < 3) {
      setAttempts({ ...attempts, failure: attempts.failure + 1 });
    } else {
      window.location.href = '/eye-sight-fail';
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
    setIsHidden(true);
  };


  const handleSpeak = () => {
    speak({ text: predefinedText, rate: 0.6 });
  };


  

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="max-w-lg lg:items-center justify-between">

        <div className='flex items-center gap-5 bg-[#004AAD]  justify-center p-2 rounded-md cursor-pointer hover:bg-[#0003ad] mb-24' style={{ visibility: isHidden ? 'hidden' : 'visible' }} onClick={handleSpeak}>
            <img src={speaker} alt='speaker' className='w-[50px] ' />
            <h1 className='font-semibold text-3xl text-white' >Instructions</h1>
        </div>

        <div className=''>
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <div>
              {currentWordIndex !== null && (
                <div className='mb-24 flex justify-center items-center'>{words[currentWordIndex].word}</div>
              )}
            </div>
          )}
        </div>
        
       <div className='position-absolute'>
        <div className="mb-4">
            
            <div className="bg-gray-100  rounded-md h-16 lg:w-[500px] overflow-y-auto" style={{ visibility: isHidden ? 'visible' : 'hidden' }}>
                {transcript}
            </div>
            </div>
            <div className='flex justify-between'>
                    <button
                    onClick={startListeningAndUpdateData}
                    disabled={listening}
                    className={`bg-[#004AAD] text-white px-4 py-2 rounded-md mr-4 lg:w-full ${
                        listening && 'opacity-50 cursor-not-allowed'
                    }`}
                    >
                    Start Listening
                    </button>
                    <button
                    onClick={SpeechRecognition.stopListening}
                    disabled={!listening}
                    className={`bg-red-500 text-white px-4 py-2 rounded-md lg:w-full ${
                        !listening && 'opacity-50 cursor-not-allowed'
                    }`}
                    >
                    Stop Listening
                    </button>
            </div>
       </div>
      </div>
    </div>
  );
}

export default VoiceToText;
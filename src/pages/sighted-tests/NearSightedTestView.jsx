import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function VoiceToText() {
  const [data, setData] = useState({}); // Initialize data as an object
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/sighted/')
      .then((res) => {
        setData(res.data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  const { transcript, listening } = useSpeechRecognition();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg mx-auto p-4 lg:items-center">
        <div>
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <div>
              {/* Access the "message" property from the data object */}
              <div>{data.message}</div>
            </div>
          )}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Voice to Text</h2>
        <div className="mb-4">
          <p className="text-lg mb-2">Transcript:</p>
          <div className="bg-gray-100 p-2 rounded-md h-32 overflow-y-auto">
            {transcript}
          </div>
        </div>
        <button
          onClick={SpeechRecognition.startListening}
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

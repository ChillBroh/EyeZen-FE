import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NearSightedTestView = () => {
  const [characters, setCharacters] = useState([
    "E",
    "F P",
    "T  O  Z",
    "L P E D",
    "P E C F D",
    "E D F C Z P",
    "F E L O P Z D ",
    "D E F P O T E C",
    "L E F O D F C T",
    "F D P L T C E O",
  ]);
  const [fontSizes, setFontSizes] = useState([
    400, 300, 200, 140, 120, 80, 60, 40, 30, 20,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const startSpeechRecognition = () => {
      if (
        "SpeechRecognition" in window ||
        "webkitSpeechRecognition" in window
      ) {
        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition = new SpeechRecognition();
        recognition.continuous = true;

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.onresult = (event) => {
          const last = event.results.length - 1;
          const spokenWord = event.results[last][0].transcript
            .toLowerCase()
            .trim();

          if (
            spokenWord === "yes" ||
            spokenWord === "yas" ||
            spokenWord === "years" ||
            spokenWord === "ears"
          ) {
            if (currentIndex < characters.length - 1) {
              setCurrentIndex(currentIndex + 1);
            }
          } else if (spokenWord === "no") {
            // Navigate to 'near-sighted-result' path
            navigate("/near-sighted-result");
          } else {
            // Reset the transcript for any other spoken words
            setTranscript("");
          }
        };

        recognition.start();

        return () => {
          recognition.stop();
        };
      } else {
        // Fallback for unsupported browsers (inform the user that speech recognition is not available)
        console.log("Speech recognition is not supported in this browser.");
      }
    };

    startSpeechRecognition();
  }, [currentIndex, characters, navigate]);

  return (
    <div className="h-screen flex justify-center items-center">
      <h1
        className="font-bold"
        style={{ fontSize: `${fontSizes[currentIndex]}px` }}
      >
        {characters[currentIndex]}
      </h1>
      {isListening}
    </div>
  );
};

export default NearSightedTestView;

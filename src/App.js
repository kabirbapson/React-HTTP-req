import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log(error);
      });
    }
    
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Set the selected file as the source of the audio element
      audioRef.current.src = URL.createObjectURL(file);
    }
  };
  return (
    <div className="App">
      <h1>time is</h1>
      <div>
        <h1>Audio Player</h1>
        <audio ref={audioRef} controls>
          Your browser does not support the audio element.
        </audio>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <button onClick={handlePlay}>Play</button>
        <button onClick={() => fileInputRef.current.click()}>
          Select Audio File
        </button>
      </div>
      <button onClick={handlePlay}>Get Time</button>
    </div>
  );
}

export default App;

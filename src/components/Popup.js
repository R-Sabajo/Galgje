import React from 'react';

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable }) => {
  let finalMessage = '';
  let revealWord = '';
  return (
    <div className="popup-container">
      <div className="popup">
        <h2 id="final-message">Je hebt gewonnen!</h2>
        <button>Opnieuw Spelen</button>
      </div>
    </div>
  );
};

export default Popup;

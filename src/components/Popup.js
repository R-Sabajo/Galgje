import React, { useEffect } from 'react';
import dancing from '../images/dancing.gif';

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = '';
  let selectedWordArray = selectedWord.split('');
  let playable = true;
  let img = '';

  // function to check if correctLetters array includes all of the letters in the selected Word.
  let checker = (arr, target) => target.every(l => arr.includes(l));

  if (checker(correctLetters, selectedWordArray)) {
    finalMessage = `Gefeliciteerd! \n Je hebt gewonnen! \n 🎉🥳🙌🎊`;
    playable = false;
    img = (
      <img className="victoryDance" src={dancing} alt="victory dancing man" />
    );
  } else if (wrongLetters.length === 6) {
    finalMessage = `Helaas... je hebt verloren. 😢 \n het woord dat ik zocht was \n ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage !== '' ? { display: 'flex' } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <button onClick={playAgain}>Opnieuw Spelen</button>
        {img}
      </div>
    </div>
  );
};

export default Popup;

import React, { useState, useEffect } from 'react';
import Figure from './Figure';
import WordsList from './WordsList';
import Word from './Word';
import WrongLetters from './WrongLetters';
import Keyboard from './Keyboard';
import alphabetKeys from './alphabetKeys';
import Notification from './Notification';
import Popup from './Popup';
import { showNotification as show } from '../helpers/helpers';

const words = WordsList;

let selectedWord = words[
  Math.floor(Math.random() * words.length)
].toUpperCase();

export default function Game() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const letter = event.key.toUpperCase();

      if (playable && alphabetKeys.includes(letter)) {
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
            console.log(showNotification);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [showNotification, correctLetters, wrongLetters, playable]);

  const handleKeyClick = keyName => {
    const letter = keyName;

    if (playable) {
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters(currentLetters => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters(currentLetters => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      }
    }
  };

  const playAgain = () => {
    setPlayable(true);

    // empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    selectedWord = words[
      Math.floor(Math.random() * words.length)
    ].toUpperCase();
  };

  return (
    <div className="game-container">
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Keyboard handleKeyClick={handleKeyClick} />
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

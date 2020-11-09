import React, { useState } from 'react';
import GameView from './GameView';
import WordsList from './WordsList';
import Word from './Word';
import Letter from './Letter';
import alphabet from './Alphabet';

export default function Game() {
  // random word state
  const [randomWord, setRandomWord] = useState({});

  // Game started state
  const [isStarted, setIsStarted] = useState(false);

  const handleClick = () => {
    // function to select a random word from the WordsList
    const randomIndex = Math.floor(Math.random() * WordsList.length);

    // set the state for randomWord as an object.
    setRandomWord({
      randomIndex: randomIndex,
      word: WordsList[randomIndex].toUpperCase().split(''),
    });

    // Set the Game state as started.
    setIsStarted(true);
  };

  console.log(randomWord);

  // Number of guesses the players has
  const [guesses, setGuesses] = useState(5);

  // Array of letters not yet guessed by the player
  const [lettersArray, setLettersArray] = useState(alphabet);

  return (
    <main className="game">
      <GameView guessesLeft={guesses} />
      <Word
        isStarted={isStarted}
        handleClick={handleClick}
        randomWord={randomWord}
      />
      <div className="lettersBox">
        {lettersArray.map(item => (
          <Letter key={item.id} letter={item.name} />
        ))}
      </div>
    </main>
  );
}

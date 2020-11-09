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
      length: WordsList[randomIndex].length,
    });

    // Set the Game state as started.
    setIsStarted(true);
  };

  // set the answerArray with dashes according to the random word length
  let answerArray = [];

  for (let i = 0; i < randomWord.length; i++) {
    answerArray.push('_');
  }

  console.log(randomWord);
  console.log(answerArray);

  // Number of guesses the players has
  const [guesses, setGuesses] = useState(5);

  const handleLetterClick = name => {
    console.log(name);
    if (randomWord.word.includes(name)) {
      console.log('correct');
    } else {
      console.log('wrong');
    }
  };

  // Array of letters not yet guessed by the player
  const [lettersArray, setLettersArray] = useState(alphabet);

  return (
    <main className="game">
      <GameView guessesLeft={guesses} />

      <Word
        isStarted={isStarted}
        handleClick={handleClick}
        answerArray={answerArray}
      />

      <div className="lettersBox">
        {lettersArray.map(item => (
          <Letter
            handleLetterClick={handleLetterClick}
            key={item.id}
            id={item.id}
            name={item.name}
          />
        ))}
      </div>
    </main>
  );
}

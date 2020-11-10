import React, { useState, useEffect } from 'react';
import GameView from './GameView';
import WordsList from './WordsList';
import Word from './Word';
import Letter from './Letter';
import alphabet from './Alphabet';

export default function Game() {
  const [randomWord, setRandomWord] = useState({});

  const [isStarted, setIsStarted] = useState(false);

  // function to select a random word from the WordsList
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * WordsList.length);
    setRandomWord(WordsList[randomIndex].toUpperCase().split(''));
    setIsStarted(true);
  };

  // set the answerArray with dashes according to the random word length
  const [answerArray, setAnswerArray] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < randomWord.length; i++) {
      arr.push('_');
    }
    setAnswerArray(arr);
  }, [randomWord.length]);

  console.log(randomWord);

  // Number of guesses the players has
  const [guesses, setGuesses] = useState(5);

  const handleLetterClick = name => {
    if (randomWord.includes(name)) {
      console.log(name);
      for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === name) {
          answerArray[j] = name;
        }
      }
      setAnswerArray(answerArray);
      console.log(answerArray);
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

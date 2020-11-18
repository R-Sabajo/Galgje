import React from 'react';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      {wrongLetters.length > 0 && <p></p>}
      <div>
        {wrongLetters.map((letter, i) => {
          return (
            <span className="wrong-letter" key={i}>
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default WrongLetters;

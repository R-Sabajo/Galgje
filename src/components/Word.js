import React from 'react';

export default function Word(props) {
  return (
    <div className="word_box">
      {!props.isStarted ? (
        <button className="startBtn" onClick={props.handleClick}>
          Begin Spel
        </button>
      ) : (
        <h1 className="word"> {props.answerArray}</h1>
      )}
    </div>
  );
}

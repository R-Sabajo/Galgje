import React from 'react';

export default function Word(props) {
  return (
    <div className="word_box" style={{ border: '1px dashed #333' }}>
      {!props.isStarted ? (
        <button className="startBtn" onClick={props.handleClick}>
          Begin Spel
        </button>
      ) : (
        <h1 className="word"> {props.randomWord.word}</h1>
      )}
    </div>
  );
}

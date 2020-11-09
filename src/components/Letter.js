import React from 'react';

function Letter(props) {
  return (
    <div className="letter" onClick={() => props.handleLetterClick(props.name)}>
      <p>{props.name}</p>
    </div>
  );
}

export default Letter;

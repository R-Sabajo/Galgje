import React from 'react';

function Letter(props) {
  return (
    <div className="key" onClick={() => props.handleKeyClick(props.name)}>
      <p>{props.name}</p>
    </div>
  );
}

export default Letter;

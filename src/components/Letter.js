import React from 'react';

function Letter(props) {
  const handleClick = id => {
    console.log(id);
  };

  return (
    <div className="letter" onClick={() => handleClick(props.id)}>
      <p>{props.letter}</p>
    </div>
  );
}

export default Letter;

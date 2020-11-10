import React from 'react';
import Letter from './Letter';
import alphabet from './Alphabet';

const Keyboard = () => {
  return (
    <div className="keyboard">
      {alphabet.map(item => (
        <Letter key={item.id} id={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default Keyboard;

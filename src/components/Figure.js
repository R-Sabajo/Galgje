import React from 'react';
import balk1 from '../images/balk1.png';
import balk2 from '../images/balk2.png';
import steunbalk from '../images/steunbalk.png';
import touw from '../images/touw.png';
import popje from '../images/popje.png';
import gras from '../images/gras.png';

export default function GameView({ wrongLetters }) {
  const errors = wrongLetters.length;

  return (
    <div className="figure-container galgje">
      {errors > 0 && (
        <>
          <img src={gras} alt="" className="gras" />
          <img src={gras} alt="" className="gras2" />
        </>
      )}
      {errors > 1 && <img src={balk1} alt="" className="balk1" />}
      {errors > 2 && <img src={steunbalk} alt="" className="steunbalk" />}

      {errors > 3 && <img src={balk2} alt="" className="balk2" />}
      {errors > 4 && <img src={touw} alt="" className="touw" />}
      {errors > 5 && <img src={popje} alt="" className="popje" />}
    </div>
  );
}

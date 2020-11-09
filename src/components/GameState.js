import React from 'react';
import balk1 from '../images/balk1.png';
import balk2 from '../images/balk2.png';
import steunbalk from '../images/steunbalk.png';
import touw from '../images/touw.png';
import popje from '../images/popje.png';
import gras from '../images/gras.png';

export default function GameState(props) {
  return (
    <div className="gameState">
      <div className="guesses">
        <p>
          je mag nog <span className="guesses_left">{props.guesses}</span> keer
          raden
        </p>
      </div>

      <div className="galgjeImages">
        <div className="galgje">
          <img src={gras} alt="" className="gras" />
          <img src={gras} alt="" className="gras2" />
          <img src={balk1} alt="" className="balk1" />
          <img src={balk2} alt="" className="balk2" />
          <img src={steunbalk} alt="" className="steunbalk" />
          <img src={touw} alt="" className="touw" />
          <img src={popje} alt="" className="popje" />
        </div>
      </div>
    </div>
  );
}

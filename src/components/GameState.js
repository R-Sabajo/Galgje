import React from 'react';
import balk1 from '../images/balk1.png';
import balk2 from '../images/balk2.png';
import steunbalk from '../images/steunbalk.png';
import touw from '../images/touw.png';
import popje from '../images/popje.png';

export default function GameState() {
  return (
    <div className="gameState">
      <div className="guesses">
        <p>
          je mag nog <span className="guesses_left">5</span> letters raden
        </p>
      </div>

      <div className="galgje">
        <img src={balk1} alt="" className="balk1" />
        <img src={balk2} alt="" className="balk2" />
        <img src={steunbalk} alt="" className="steunbalk" />
        <img src={touw} alt="" className="touw" />
        <img src={popje} alt="" className="popje" />
      </div>

      <div className="hints">
        <p>
          je hebt nog <span className="hints_left">3</span> hints over
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import GameState from './GameState';

export default function Game() {
  return (
    <main className="game">
      <GameState />
      <div className="word" style={{ border: '1px dashed #333' }}>
        <h2>Word</h2>
      </div>
      <div className="letters">
        <h2>Letters</h2>
      </div>
    </main>
  );
}

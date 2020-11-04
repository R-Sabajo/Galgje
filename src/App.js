import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';

function App() {
  return (
    <div className="app">
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Game />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;

import React from 'react';

import Game from './components/Game';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Tic Tac Toe</h1>
        <Game />
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import pokemonContextProvider from './contexts/PokemonContext';

function App() {
  return (
    <div className="App container">
      <pokemonContextProvider>
        <div className='row'></div>
        <div className='row'>
          <div className='col-8'>

          </div>
          <div className='col-4'>

          </div>
        </div>
      </pokemonContextProvider>
    </div>
  );
}

export default App;

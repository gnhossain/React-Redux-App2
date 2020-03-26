import React from 'react';
import './App.css';
import CatPictures from './components/CatPictures';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Open Source Cat Pictures</h1>
        <CatPictures/>
      </header>
    </div>
  );
}

export default App;

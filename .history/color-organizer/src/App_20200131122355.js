import React from 'react';
import {AddColorForm} from './ColorForm';
import './App.css';

function App() {
  const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`)

  return (
    <div className="App">
      <AddColorForm onNewColor={logColor}/>
    </div>
  );
}

export default App;

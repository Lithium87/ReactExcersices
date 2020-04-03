import React from 'react';
import {AddColorForm} from './color-form/ColorForm';
import {StarRating} from './star-rating/StarRating';
import './App.css';

function App() {
  const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`)

  return (
    <div className="App">
      <AddColorForm onNewColor={logColor}/>
      <StarRating/>
    </div>
  );
}

export default App;

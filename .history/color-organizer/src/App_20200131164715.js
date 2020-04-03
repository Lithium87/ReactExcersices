import React, {Component} from 'react';
import {AddColorForm} from './color-form/ColorForm';
import {StarRating} from './star-rating/StarRating';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      colors: []
    }
  }
  
render (){
  const {colors} = this.state;
  return (
    <div className="App">
      <AddColorForm/>
      <ColorList colors={colors}/>
    </div>
  );
}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import BinButton from './components/BinButton'

class App extends Component {
  render() {
    return (
      <div>
          <BinButton/>
          <BinButton/>
          <BinButton/>
          <BinButton/>
          <BinButton/> 
      </div>
    );
  }
}

export default Shelf;

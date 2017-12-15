import React, { Component } from 'react';
import './App.css';
import BinButton from './components/BinButton'

class Shelf extends Component {
  render() {
    return (
      <div>
          <BinButton props="Bin 1"/>
          <BinButton props="Bin 2"/>
          <BinButton props="Bin 3"/>
          <BinButton props="Bin 4"/>
          <BinButton props="Bin 5"/> 
      </div>
    );
  }
}

export default Shelf;

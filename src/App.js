import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ShelfButton from './components/ShelfButton'

class App extends Component {
  render() {
    return (
      //Simulation-1 54C 54D 54J 54E below
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">SHELFIE</h1>
        </header> 
        <main>
          <ShelfButton label="Shelf 1"/>
          <ShelfButton label="Shelf 2"/>
          <ShelfButton label="Shelf 3"/>
          <ShelfButton label="Shelf 4"/> 
        </main>  
      </div>
    );
  }
}

export default App;

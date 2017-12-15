import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ShelfButton from './components/ShelfButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SHELFIE</h1>
        </header> 
        <main>
          <ShelfButton/>
          <ShelfButton/>
          <ShelfButton/>
          <ShelfButton/> 
        </main>  
      </div>
    );
  }
}

export default App;

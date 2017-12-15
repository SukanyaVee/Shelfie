import React from 'react';

// Simulation-1 38C 38D
function ShelfButton (props) {
  render() {
    return (
      <button className="shelf-button">
        {props.label}   
      </button>
    );
  }
}

export default ShelfButton;

import React from 'react';

// Simulation-1 38C 38D
function BinButton (props) {
  render() {
    return (
      <button className="bin-button">
        {props.label}   
      </button>
    );
  }
}

export default BinButton;

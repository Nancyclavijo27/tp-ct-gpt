// AQUÍ VA TU COMPONENTE
// ¡No olvides exportarlo!

import React, { useState } from 'react';
import './RandomColor.css';

const RandomColor = () => {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function handleChangeColor() {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  }

  return (
    <div className="random-color-app">
      <div className="color-box" style={{ backgroundColor }}>
        <button onClick={handleChangeColor}>Change Color</button>
      </div>
    </div>
  );
};

export default RandomColor;


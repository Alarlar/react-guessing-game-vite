/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => { // 'onGuesss' - props
  const [currentGuess, setCurrentGuess] = useState('');

    const handleInputChange = (event) => {
      setCurrentGuess(event.target.value);
    };

    const onSubmitGuess = () => {
      if (currentGuess.trim() !== '') { // строка в номер
        onGuess(Number(currentGuess));
        setCurrentGuess(''); // тут reset
      }
    };

    return (
      <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
        />
        <Button onClick={onSubmitGuess}>Submit Guess</Button>
      </div>
    );
  };

export default GuessControl;

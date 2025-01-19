/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GameOver from "./GameOver";

const MAX_ATTEMPTS = 5;

const NumberGuessingGame = () => {
      const [numberToGuess, setNumberToGuess] = useState (getRandomNumber());
      const [numberOfGuesses, setNumberOfGuess] = useState(0);
      const [latestGuess, setCurrentGuess] = useState(null);

      function getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
      }
    
  const handleGuess = (onGuess) => {
    setlatestGuess(Number(onGuess));
    setNumberOfGuess((prev) => prev + 1)
  };

  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuess(0);
    setlatestGuess(null);
    };

    const isGameOver =
      numberOfGuesses >= MAX_ATTEMPTS || latestGuess === numberToGuesses;
    const isCorrectGuess = latestGuess === numberToGuess;

    return (
      <div>
        <h2>I'm thinking of a number from 1 to 100.</h2>
        <h2>
          Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
        </h2>
        <GuessControl onGuess={handleGuess} />
        {isGameOver && (
          <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
        )}
        {!isGameOver && (
          <GuessMessage
            guess={latestGuess}
            numberToGuess={numberToGuess}
            numberOfGuesses={numberOfGuesses}
          />
        )}
      </div>
    );
};

export default NumberGuessingGame;

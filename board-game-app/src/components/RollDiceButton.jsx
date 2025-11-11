import React from 'react'
import Dice from './Dice';
import { useState } from 'react';



const RollDiceButton = () => {

  const [diceNumber, setDiceNumber] = useState(6);
  const [userPosition, setUserPosition] = useState(0)

  const RollDice = () =>{
    
    let currentdiceNumber = Math.floor(Math.random() * (6) + 1); // rolls the dice between 1 and 6

    setDiceNumber(currentdiceNumber);
    diceTravel(currentdiceNumber);
  }


  const diceTravel = (spacesMoved) => {
    const totalSpaces = 22; // The total amount of spaces on the board is 22 (0 - 21)
    let currentPos = userPosition; // current position is where the previous position left off and will be updated in real time

    // For each step starting with the first
    for (let step = 1; step <= spacesMoved; step++) {
      setTimeout(() => {
        currentPos = (currentPos + 1) % totalSpaces; // The current position gets updated with the next step and accounts for when it loops around the board (total spaces)
        setUserPosition(currentPos); // updates the state of the User's position each iteration
      }, step * 750);
    }
  };


  return (
    <div>
    <Dice dice={diceNumber}/>
    <button onClick={RollDice}>Roll Dice!</button>
    <p>User Position {userPosition}</p> {/* This line of code is for testing */}
    </div>
  )
}

export default RollDiceButton
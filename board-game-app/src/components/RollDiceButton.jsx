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
    let newPosition = userPosition + spacesMoved;


    for(let i = userPosition; i <= newPosition; i++){
      setTimeout(() => {
        setUserPosition(i);
      }, (i - userPosition) * 750) //delays for 750 milliseconds
      
      
    }

    //setUserPosition(newPosition);


  }


  return (
    <div>
    <Dice dice={diceNumber}/>
    <button onClick={RollDice}>Roll Dice!</button>
    <p>User Position {userPosition}</p> {/* This line of code is for testing */}
    </div>
  )
}

export default RollDiceButton
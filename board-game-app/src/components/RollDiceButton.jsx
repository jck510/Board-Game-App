import React from 'react'

function RollDice(){
    // rolls the dice between 1 and 6
    alert(Math.floor(Math.random() * (6 - 1 + 1) + 1))
}


const RollDiceButton = () => {
  return (
    <div>
    <button onClick={RollDice}>Roll Dice!</button>
    </div>
  )
}

export default RollDiceButton
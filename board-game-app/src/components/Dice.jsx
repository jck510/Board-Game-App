import React from 'react'
import { useSelector } from 'react-redux'




const Dice = () => {

  const diceNumber = useSelector((state) => state.game.diceNumber);

  return (
    <div>Dice Number: {diceNumber}</div>
  )
}

export default Dice
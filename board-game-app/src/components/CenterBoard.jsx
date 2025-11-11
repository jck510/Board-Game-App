import React from 'react'
import RollDiceButton from './RollDiceButton'

const CenterBoard = ( {diceNumber, setDiceNumber, userPosition, setUserPosition}) => {
  return (
    <div className='center-main-board'>
        <h3>CenterBoard</h3>
        <RollDiceButton diceNumber={diceNumber} userPosition={userPosition}/>
    </div>
  )
}

export default CenterBoard
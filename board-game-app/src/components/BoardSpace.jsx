import React from 'react'

const BoardSpace = ({spaceName, spaceType, location, currentSpace}) => {
  return (
    <div className='board-space'>
        {/* <h3>{spaceName}</h3> */}
        
        {/* <h5>{spaceType}</h5> */}

        {spaceType == 'Good' && <div className='good-space-div'><h3 className='good-space-title'>{spaceName}</h3></div>}
        {spaceType == 'Bad' && <div className='bad-space-div'><h3 className='bad-space-title'>{spaceName}</h3></div>}
        {spaceType == 'Great' && <div className='great-space-div'><h3 className='great-space-title'>{spaceName}</h3></div>}
        {spaceType == 'Neutral' && <div className='neutral-space-div'><h3 className='neutral-space-title'>{spaceName}</h3></div>}
        {spaceType == 'Start' && <div className='start-space-div'><h3 className='start-space-title'>{spaceName}</h3></div>}
        {spaceType == 'Chance' && <div className='chance-space-div'><h3 className='chance-space-title'>{spaceName}</h3></div>}
        {spaceType == 'Risk' && <div className='risk-space-div'><h3 className='risk-space-title'>{spaceName}</h3></div>}
        
    </div>
  )
}

export default BoardSpace
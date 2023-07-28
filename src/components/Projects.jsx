import React from 'react'
import dogCareSheet from './images/dog-caresheet.png'
import memorycCardsGame from './images/Game-img.png'

export default function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectsContainer'>
        <div className='dogAppContainer'>
          <img src={dogCareSheet} alt='dog caresheet website screenshot'/>
          <a href='https://dog-basic-caresheet.netlify.app'>Click to view</a>
        </div>
        <div className='memoryGameContainer'>
          <img src={memorycCardsGame} alt='memory card game screenshot '/>
          <a href='https://mariomemorycards.netlify.app'>Click to view</a>
        </div>

      </div>
      
        <h4>Let me build YOUR vision!</h4>
  </div>
  )
}

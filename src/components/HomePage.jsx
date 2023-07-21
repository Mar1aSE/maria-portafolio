import React from 'react'
import MyImage from './MyImage'
import AboutMe from './AboutMe'
import Languages from './Languages'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='homepage'>
         <div className='leftpnl'>
        <AboutMe />
        <Languages />
        <Link to='/projects'>
          <button className='projectButton'> Featured Projects</button>
        </Link>

      </div>

       <MyImage />

    </div>
  )
}

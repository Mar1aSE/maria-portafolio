import React from 'react'
import HTML5 from '../components/images/HTML5.png'
import CSS from '../components/images/CSS.png'
import javascript from '../components/images/javascript.png'
import react from '../components/images/react.png'
export default function Languages() {
  return (
    <div className='languages'>
        <img src={HTML5} alt='HTML logo' />
        <img src={CSS} alt='CSS logo' />
        <img src={javascript} alt='javascript logo' />
        <img src={react} alt='react logo' />
    </div>
  )
}

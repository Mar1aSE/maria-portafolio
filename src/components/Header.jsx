import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='header'>
     <Link to='/'>Homepage</Link> 
     <Link to='/projects'>Projects</Link> 
     
    </div>
  )
}

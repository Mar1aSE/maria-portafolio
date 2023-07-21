import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Projects from './Projects'
import HomePage from './HomePage'

export default function Main() {
  return (
    <div className='main'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<Projects/>} />
        </Routes>

    </div>
)
}
        
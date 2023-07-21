import React from 'react'
import myImage from '../components/images/myImage.PNG'
export default function MyImage() {
  return (
    <div className='myImage'>
        <img src={myImage} alt='Maria Esquivel'/>
        <h2>Maria Esquivel</h2>
    </div>
  )
}

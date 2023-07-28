import React from 'react'
import email from '../components/images/email.png'
import linkedin from '../components/images/LinkedIn.png'
import github from '../components/images/github.png'

export default function Contact() {
  return (
    <div className='contactBar'>
        <div className='links'>
          <a href='mailto:Lupita31311@gmail.com'>
            <img src={email} alt='@ logo'/>
          </a>
          <a href='https://www.linkedin.com/in/maria-esquivel-softwareengineer/'>
            <img src={linkedin} alt='linkedin Logo'/>
          </a>
          <a href='https://github.com/Mar1aSE'>
            <img src={github} alt='github Logo'/>
          </a>
        </div>
    </div>
)
 }
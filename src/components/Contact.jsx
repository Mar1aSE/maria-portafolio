import React from 'react'
import call from '../components/images/call.png'
import email from '../components/images/email.png'
import linkedin from '../components/images/LinkedIn.png'
import github from '../components/images/github.png'
import {Link} from 'react-router-dom'
export default function Contact() {
  return (
    <div className='contactBar'>
        <div id='contactLogos' >
        <h3>Contact Me</h3>
        <a href='tel:773-971-8524'>
          <img src={call} alt='phone logo'/>
        </a>
        <a href='mailto:Lupita31311@gmail.com'>
          <img src={email} alt='@ logo'/>
        </a>

        </div>

        <div className='links'>
            <Link to='https://www.linkedin.com/in/maria-esquivel-softwareengineer/'>
                <img src={linkedin} alt='linkedin Logo'/>
            </Link>
            <Link to='https://github.com/Mar1aSE'>
                <img src={github} alt='github Logo'/>
            </Link>
        </div>

    


    </div>
  )
}

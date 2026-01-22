import React from 'react'
import about from '../assets/abb.png'
import head from '../assets/head.png'
import { ArrowRightCircle, EyeIcon } from 'lucide-react'
import '../components/nstyles/myab.css'

function MyAbout() {
  return (
    <div className='myabout1'>
      <div className='inab'>
        <img src={about} alt='About us Image' className='imhg'/> 
      </div>
      <div className='contss'>
        <div className='headingg'>
            <img src={head} alt='Head' className='hee'/>
            <p className='htst'>Who We Are</p>
        </div>
        <p className='ddd'>Tech2Shine Labs operates with a structured work allocation framework to ensure clarity, fairness, and operational efficiency. Our platform is designed for individuals seeking responsible remote participation in basic digital assignments such as Data Conversion, Data Segregation, and Captcha Code Entry projects.</p>
        <div className='inyuyu'>
            <div className='yuyu'>
                <p className='omm'><ArrowRightCircle/>Our Mission</p>
                <p>To provide a transparent, ethical, and well-structured platform that supports individuals in navigating digital work environments responsibly.</p>
            </div>
            <div className='yuyu'>
                <p className='omm'><EyeIcon/>Our Vision</p>
                <p>To become a trusted name in structured digital program facilitation through Advancedism, accountability, and user support.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyAbout

import React from 'react'
import { ArrowRightCircle, EyeIcon } from 'lucide-react'
import '../styles/mission.css'

function Missions() {
  return (
    <div className='missns'>
      <div className='inm'>
        <p className='omm'><ArrowRightCircle/>Our Mission</p>
        <p>To provide a transparent, ethical, and well-structured platform that supports individuals in navigating digital work environments responsibly.</p>
      </div>
      <div className='inm'>
        <p className='omm'><ArrowRightCircle/>Our Vision</p>
        <p>To become a trusted name in structured digital program facilitation through Advancedism, accountability, and user support.</p>
      </div>
      <div className='inm'>
        <p className='omm'><ArrowRightCircle/>Our Values</p>
        <p>Everything we do is guided by our core principles; Transparency, Advancedism, Accountability, Ethical Practices, User Support.</p>
      </div>
    </div>
  )
}

export default Missions

import React from 'react'
import '../styles/blank.css'
import { useNavigate } from 'react-router-dom'

function Blank() {
  const navigate = useNavigate()
  return (
    <div className='myblank'>
      <p>Need Help Choosing a Plan?<br/>

        Not sure which program suits you best?<br/>
        Our team is happy to help guide you.
        </p>
        <button onClick={()=>navigate('/contact')}>Contact Support</button>
    </div>
  )
}

export default Blank

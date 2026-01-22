import React from 'react'
import '../Styles/detail.css'
import { useNavigate } from 'react-router-dom'

function Detail() {

  const navigate = useNavigate();
  return (
    <div className='detail'>
        <div className='indetail' data-aos="fade-down">
            <h3>Structured Access to Genuine Remote Work Participation</h3>
            <p>
                Tech2Shine Labs helps individuals begin their remote work journey through guided onboarding, verified workflows, and Advanced support.
            </p>
            <div className='bttns'>
                <button onClick={()=>navigate('/pricing')}>Get Started</button>
                <button onClick={()=>navigate('/how-it-works')}>How it Works</button>
            </div>
        </div>
    </div>
  )
}

export default Detail
import React from 'react'
import '../Styles/extra.css'
import { useNavigate } from 'react-router-dom'

function Extra() {
  const navigate = useNavigate();
  return (
    <div className='exta'>

      <div className='never'>
        <h4>What Tech2Shine Labs Never Does?</h4>
      </div>
      <div className='ulls'>
        <ul className='ul1'>
            <li>We never charge for employment or job placement.</li>

            <li>We never ask for payments to personal-name accounts</li>
        </ul>
        <ul className='ul2'>
            <li>We never promote “guaranteed income” schemes</li>

            <li>All billing is processed under official company identity only</li>
        </ul>
      </div>
      
      <button onClick={()=>navigate('/contact')}>Contact our official support team</button>
    </div>
  )
}

export default Extra

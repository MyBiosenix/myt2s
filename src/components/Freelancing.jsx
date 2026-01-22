import React from 'react'
import FreeProp from '../Props/FreeProp'
import '../Styles/freelancing.css'
import spreadsheet from '../assets/spreadsheet-icon.webp'
import innovation from '../assets/innovation-icon.webp'
import earning from '../assets/earning-icon.webp'
import { useNavigate } from 'react-router-dom'


function Freelancing() {
    const navigate = useNavigate();
  return (
    <div className='myfree'>
        <h3 data-aos="fade-left">Transparent Pricing Plans.</h3>
        <div className='gofree' data-aos="fade-right">
            <FreeProp Icon={spreadsheet}
                title="Basic Plan"
                desc="Entry-level onboarding, basic workflows, and email support."
            />

            <FreeProp Icon={innovation}
                title="Advanced Plan"
                desc="Priority access, intermediate workflows, feedback, and faster support."
            />

            <FreeProp Icon={earning}
                title="Professional Plan"
                desc="Professional workflows with dedicated hands-on assistance."
            />
        </div>
        <button className='vfp' onClick={()=>navigate('/pricing')}>View Full Pricing</button>
        <div className='disclaim'>
            <h5>Earnings & Service Disclaimer:</h5>
            <p>Tech2Shine Labs does not offer employment or guaranteed income. All fees are charged strictly for onboarding, training, platform maintenance, and support services. Actual results vary based on individual effort and task availability.</p>
        </div>
    </div>
  )
}

export default Freelancing

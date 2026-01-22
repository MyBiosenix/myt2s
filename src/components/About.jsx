import React from 'react'
import '../Styles/about.css'
import { FaCheckCircle,FaHandsHelping,FaGlobeAmericas,FaArrowRight} from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
  return (
    <div className='about'>
        <h3>Welcome to Tech2Shine Labs</h3>
        <div className='in-about' data-aos="fade-up">
            <div className='aboutit'>
                <p>Tech2Shine Labs operates with a structured work allocation framework to ensure clarity, fairness, and operational efficiency. Our platform is designed for individuals seeking responsible remote participation in basic digital assignments such as Data Conversion, Data Segregation, and Captcha Code Entry projects.
                <br/>

                We work with independent freelancers on project-based assignments that require accuracy, consistency, and adherence to clearly defined quality Advanceds

                <p className='hl'>Highlights</p>
                <ul className='ul'>
                    <li className='li'><ArrowRight/>Verified digital workflows</li>
                    <li className='li'><ArrowRight/>Transparent expectations</li>
                    <li className='li'><ArrowRight/>Advanced onboarding</li>
                    <li className='li'><ArrowRight/>Ethical support channels</li>
                </ul>
                <br/>
                </p>
                 <button className='vass' onClick={() => navigate('/about')}>Know More<ArrowRight/></button>
            </div>
            
        </div>  
        <h3 className='ops'>Our Advanced Services</h3>
        <div className='grids'>
            <div className='ingrid' data-aos="fade-down" data-aos-delay="0">
                <FaCheckCircle className='icon'/>
                <h4>Onboarding & Verification</h4>
                <p>We guide users through secure registration, profile review, and program orientation.</p>
            </div>
            <div className='ingrid' data-aos="fade-down" data-aos-delay="200">
                <MdWorkOutline className='icon'/>
                <h4>Structured Workflows</h4>
                <p>Access to step-by-step documented digital task processes with defined timelines.</p>
            </div>
            <div className='ingrid' data-aos="fade-down" data-aos-delay="400">
                <FaHandsHelping className='icon'/>
                <h4>Technical & Operational Support</h4>
                <p>Responsive assistance via official email and ticket-based channels.</p>
            </div>
            <div className='ingrid' data-aos="fade-down" data-aos-delay="600">
                <FaGlobeAmericas className='icon'/>
                <h4>Quality Review & Feedback</h4>
                <p>Constructive performance reviews to help users maintain accuracy and consistency.</p>
            </div>
        </div>
        <button className='vas' onClick={()=>navigate('/programs')}>View All Services</button>
    </div>
  )
}

export default About

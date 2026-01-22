import React from 'react'
import '../styles/pc.css'
import { CheckCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import {
  KeyRound,
  BookOpen,
  UserPlus,
  Headset,
  ShieldCheck,
  Settings
} from "lucide-react";


function PricingComp() {
  const navigate = useNavigate();
  const data = [
    {
      name: 'Basic',
      price: '₹ 1,999/-',
      features: [
        "Complete onboarding and verification",
        "Access to introductory workflows",
        "Basic training resources",
        "Email support"
      ],
      best: "Best For: Beginners who want to explore remote participation with minimal investment."
    },
    {
      name: 'Advanced',
      price: '₹ 2,999/-',
      features: [
        "Includes everything in Starter Plan, plus",

        "Priority workflow access",

        "Intermediate task workflows",

        "Performance review and feedback",

        "Faster support response"
      ],
      best: "Best For: Individuals seeking structured growth and consistent participation",
      popular: "Most Popular"
    },
    {
      name: 'Professional',
      price: '₹ 3,999/-',
      features: [
        "Includes everything in Advanced Plan, plus:",
        "Dedicated support assistance",
        "Professional workflow access",
        "Priority reviews and escalations",
        "Personalized performance tracking"
      ],
      best: "Best For: Experienced participants who require enhanced hands-on assistance."
    }
  ]

  return (
    <div className='myprices'>
      <h3>Programs & Service Pricing</h3>

      <div className='pcard'>
        {data.map((item, index) => (
          <div className={`cardcom ${item.popular ? "popular-card" : ""}`} key={index}>
            {item.popular && <div className="popular-badge">{item.popular}</div>}
            <h4>{item.name}</h4>
            <p className='price'>{item.price}</p>
            <p className='best'>{item.best}</p>
            <button onClick={()=>navigate('/contact')}>Buy Now</button>

            <p className='includes'>Includes</p>
            <ul>
              {item.features.map((feature, i) => (
                <li key={i}>
                    <CheckCircle size={18} className="tick-icon" />
                    <span>{feature}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
      <p className='oup'>You can opt for any of the following programs under the above pricing tiers</p>
      <div className='mypop'>
        <p className='oef'>Onboarding & Enablement Fee</p>
        <div className='gtys'>
            <div className='gty1'>
                <p className='ys'>
                    <KeyRound size={18} className="tick-icon" />
                    <span>Licensed access to authorized project software</span>
                </p>
                <p className='ys'>
                    <BookOpen size={18} className="tick-icon" />
                    <span>Project-specific training and documentation</span>
                </p>
                <p className='ys'>
                    <UserPlus size={18} className="tick-icon" />
                    <span>Account setup assistance</span>
                </p>
            </div>
            <div className='gty2'>
                <p className='ys'>
                    <Headset size={18} className="tick-icon" />
                    <span>Technical and operational support</span>
                </p>
                <p className='ys'>
                    <ShieldCheck size={18} className="tick-icon" />
                    <span>Compliance verification</span>
                </p>
                <p className='ys'>
                    <Settings size={18} className="tick-icon" />
                    <span>System maintenance</span>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PricingComp

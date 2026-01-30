import React from 'react'
import Header from '../components/Header'
import APComp from '../components/APComp'
import Footer from '../components/Footer'
import Missions from '../components/Missions'
import PricingComp from '../components/PricingComp'
import Blank from '../components/Blank'
import '../styles/Ap.css'
import Patch3 from '../components/Patch3'
import ScrollTop from '../components/ScrollTop'

function Pricing() {
  return (
    <div className='myappage'>
      <Header/>
      <Patch3/>
      <PricingComp/>
      <Blank/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Pricing

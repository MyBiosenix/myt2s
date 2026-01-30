import React from 'react'
import Header from '../components/Header'
import APComp from '../components/APComp'
import Footer from '../components/Footer'
import Missions from '../components/Missions'
import '../styles/Ap.css'
import Patch1 from '../components/Patch1'
import ScrollTop from '../components/ScrollTop'

function AboutPage() {
  return (
    <div className='myappage'>
      
      <Header/>
      <Patch1/>
      <APComp/>
      <Missions/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default AboutPage

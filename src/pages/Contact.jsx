import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Ap.css'
import ContactComp from '../components/ContactComp'
import Patch6 from '../components/Patch6'
import ScrollTop from '../components/ScrollTop'

function Contact() {
  return (
    <div className='myappage'>
      <Header/>
      <Patch6/>
      <ContactComp/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Contact

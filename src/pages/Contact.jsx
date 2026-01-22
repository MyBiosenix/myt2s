import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Ap.css'
import ContactComp from '../components/ContactComp'
import Patch6 from '../components/Patch6'

function Contact() {
  return (
    <div className='myappage'>
      <Header/>
      <Patch6/>
      <ContactComp/>
      <Footer/>
    </div>
  )
}

export default Contact

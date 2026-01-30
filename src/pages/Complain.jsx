import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Ap.css'
import ComplainComp from '../components/ComplainComp'
import Patch6 from '../components/Patch6'
import ScrollTop from '../components/ScrollTop'

function Complain() {
  return (
    <div className='myappage'>
      <Header/>
      <ComplainComp/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Complain

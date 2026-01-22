import React from 'react'
import Header2 from '../components/Header2'
import Detail from '../components/Detail'
import About from '../components/About'
import Project from '../components/Project'
import HIW2 from '../components/HIW2'
import Freelancing from '../components/Freelancing'
import Reviews from '../components/Reviews'
import '../styles/home.css'
import MyAbout from '../ncomps/MyAbout'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

function Home() {
  return (
    <div className='home'>
      <div className='inhome'>
        <Header2/>
        <Detail/>
      </div>
      {/*<MyAbout/>
      <Howitworks/>*/}
      <About/>
      <Project/>
      <HIW2/>
      <Freelancing/>
      <Reviews/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home

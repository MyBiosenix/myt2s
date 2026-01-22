import React from 'react'
import '../Styles/reviewpage.css'
import Header from '../components/Header'
import RComp from '../components/RComp'
import ScrollTop from '../Components/ScrollTop'
import Patch5 from '../components/Patch5'
import Footer from '../components/Footer'

function ReviewPage() {
  return (
    <div className='myappage'>
     
        <Header/>
        <Patch5/>
        <RComp/>
        <Footer/>

    </div>
  )
}

export default ReviewPage

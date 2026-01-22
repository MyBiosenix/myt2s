import React,{useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Programs from './pages/Programs'
import ReviewPage from './pages/ReviewPage'
import Pricing from './pages/Pricing'
import HIWPage from './pages/HIWPage'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import Disclaimer from './pages/Disclaimer'
import TandC from './pages/TandC'
import AOS from "aos";
import "aos/dist/aos.css";
import Complain from './pages/Complain'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,     // animation duration
      once: true,        // animate only once
      offset: 80,        // trigger offset
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/reviews' element={<ReviewPage/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/how-it-works' element={<HIWPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/refund-policy' element={<RefundPolicy/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/terms&conditions' element={<TandC/>}/>
        <Route path='/complain' element={<Complain/>}/>
      </Routes>
    </Router>
  )
}

export default App

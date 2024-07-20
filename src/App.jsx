import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const[playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='Our PROGRAM' Title='What you will learn' />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle='Gallery' Title='Campus Life' />
        <Campus />
        <Title subtitle='TESTIMONIALS' Title='What Our Students Says' />
        <Testimonials />
        <Title subtitle='Contact Us' Title='Get In Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App

import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from '../Hero'
import myHero from './../assets/thief.png'
import HeroAbout from './HeroAbout'

const AboutSection = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen bg-cover bg-center flex flex-col justify-center text-white" style={{backgroundImage: `url(${myHero})`}}>
        <h1 className='text-7xl font-bold'>About Us</h1>
        <p className='max-w-[40%]'>We provide reliable CCTV, time attendance, and smart security systems to help businesses stay secure, efficient, and in control.</p>
    </div>
      <HeroAbout />
      <Footer />
    </div>
  )
}

export default AboutSection 
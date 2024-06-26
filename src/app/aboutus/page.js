import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutUs from '@/components/aboutus/AboutUs'
import Hero from '@/components/aboutus/HeroSection'
import Virtual from '@/components/aboutus/Virtual'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Virtual/>
      <Footer/>
    </div>
  )
}

export default page
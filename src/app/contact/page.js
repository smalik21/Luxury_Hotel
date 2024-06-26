import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ContactSection from '@/components/contact/ContactSection'
import Hero from '@/components/contact/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

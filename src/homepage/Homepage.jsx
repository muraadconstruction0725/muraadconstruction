import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Footer from '../components/Footer'
import About from './About'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import ContactUs from './ContactUs'
import Testimonials from './Testimonials'
import OurProjects from './OurProjects'
import ServiceGallery from './ServiceGallery'
import Plan from './Plan'

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <WhyChooseUs/>
      <OurProjects/>
      <ServiceGallery/>
      {/* <Plan/> */}
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

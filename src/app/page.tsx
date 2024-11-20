"use client"

import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skill';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const page = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default page
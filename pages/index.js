import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Service from '@/components/Service'
import React from 'react'

const index = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Service />
      <Achievements />
      <Portfolio />
    </>
  )
}

export default index

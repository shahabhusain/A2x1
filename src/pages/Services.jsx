import React from 'react'
import Hero from '../components/services/Hero'
import Featured from '../components/services/Serving'
import Blogo from '../components/sections/Blogo'
import Contact from '../components/sections/Contact'



const Services = () => {
  return (
    <div>
              <Hero />
      <Featured />
        <div className=' mt-[52rem]'>
        <Blogo />
        </div>
      <Contact />
    </div>
  )
}

export default Services
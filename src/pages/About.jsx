import React from 'react'
import Box from '../components/sections/Box'
import OurVision from '../components/sections/OurVision'
import OurMission from '../components/sections/OurMission'
import OurValue from '../components/sections/OurValue'
import Header from '../components/sections/Header'
import Blogo from '../components/sections/Blogo'
import Contact from '../components/sections/Contact'
const About = () => {
  return (
    <div>
        <Header />
          <Box />
      <OurVision />
      <OurMission />
      <OurValue />
      <Blogo />
      <Contact />
    </div>
  )
}

export default About
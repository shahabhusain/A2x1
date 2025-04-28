import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Features from '../components/Home/Features'
import Story from '../components/Home/Story'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <div>
           <Hero />
              <About />
              <Features />
              <Story />
              <Contact />
    </div>
  )
}

export default Home
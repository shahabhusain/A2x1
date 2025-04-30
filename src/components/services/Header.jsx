import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Header = () => {
    
    useGSAP(()=>{

        gsap.from("ul",{
            opacity:0,
            duration:1,
            delay:0.5,
        })

        gsap.from("#button",{
            opacity:0,
            duration:1,
            delay:0.8,
        })

        gsap.from("span",{
            opacity:0,
            duration:0.1,
            delay:0.3,
            stagger:0.1
        })

        gsap.from("#circle",{
            opacity:0,
            duration:0.1,
            delay:0.4,
        })
    })
  return (
    <div className=' bg1'>
         <div className='flex items-center justify-between py-3 px-12'>
             <div className=' flex items-center gap-2'>
                <div id='circle' className=' w-[35px] h-[35px] bg-[#DCFFAA] rounded-full'></div>
                <h2 className=' flex items-center text-[23px] font-[700] text-[#2E3D32]'><span>A</span><span>2</span><span>Z</span><span>H</span><span>e</span><span>a</span><span>l</span><span>t</span> <span>h</span> <span>C</span><span>a</span><span>r</span><span>e</span></h2>
             </div>
        <ul className=' bg-[#fff6] py-3 px-5 rounded-full flex items-center gap-3 z-[1000]'>
            <Link to="/" className=' py-2 px-4 bg-white text-black cursor-pointer rounded-full'>Home</Link>
            <Link to="/about" className=' py-2 px-4 bg-white text-black cursor-pointer rounded-full'>About</Link>
            <Link to="/services" className=' py-2 px-4 bg-white text-black cursor-pointer rounded-full'>Services</Link>
            <Link to="/carrer" className=' py-2 px-4 bg-white text-black cursor-pointer rounded-full'>Carrer</Link>
            <li className=' py-2 px-4 bg-white text-black cursor-pointer rounded-full'>Blog</li>
        </ul>
            <button id='button' className=' bg-white text-black py-2 px-5 z-[1000] cursor-pointer rounded-full'>Login</button>
            </div>
            <Hero />
    </div>
  )
}

export default Header
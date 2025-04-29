import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Hero = () => {
    useGSAP(()=>{
        gsap.from("#p",{
            y:-30,
            opacity:0,
            duration:1,
            delay:0.5,
            stagger:0.1,
            yoyo:true
        })
        gsap.from("#get",{
            opacity:0,
            duration:1,
            delay:0.5,
        })
    })
  return (
    <div className=' flex flex-col gap-2 max-w-[555px] pt-72 pl-12'>
        <h2 className=' text-white text-[32px] font-[600] flex items-center gap-3 flex-wrap'><p id='p'>Providing</p> <p id='p'>Compassionate</p> <p id='p'>& Reliable</p> <p id='p'>Home</p>, <p id='p'>Health</p> <p id='p'>Care</p> </h2>
        <p className=' text-[20px] font-[400] text-white'>Bringing professional, personalized care to your doorstep because your comfort and well-being matter most.</p>
        <button id='get' className=' text-xl bg-[#DCFFAA] py-2 px-5 rounded-full text-black w-fit'>Get Started</button>
    </div>
  )
}      

export default Hero
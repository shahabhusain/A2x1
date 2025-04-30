import React from 'react'
import main from '../../assets/image.png'
const Hero = () => {
  return (
    <div className='bg-[#2E3D32] w-full h-screen rounded-b-2xl '>
      <img className=' relative left-16 top-32' src={main} alt="" />
      <div className=' absolute top-[35rem] left-24'>
         <h1 className=' text-[36px] font-[600] text-white'>Right Home Care Provider</h1>
         <p className=' text-[20px] font-[400] max-w-[666px] text-white'>Key factors to consider when selecting a trustworthy home health care service for your loved ones</p>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import img1 from '../../assets/imgg1.png'
import img2 from '../../assets/imgg2.png'
import img3 from '../../assets/imgg3.png'
import img4 from '../../assets/imgg4.png'
const Blogo = () => {
  return (
    <div className=' w-[90%] mx-auto'>
        <h1 className=' text-[130px] font-[700] text-[#EEEEEE] text-center'>Our blogs</h1>
          <div className=' flex items-center gap-12 justify-between mt-12'>
          <div className='bg-[#F5F5F5] hover:bg-[#DCFFAB] transition-all duration-300 ease-in-out p-5 rounded-md flex flex-col gap-3'>
            <img className=' w-full' src={img1} alt="" />
            <h1 className=' text-[20px] font-[600] text-[#2E3D32]'>Personalized Home Care</h1>
            <p className=' text-[16px] font-[400] text-[#2E3D32]'>How tailored care plans improve the quality of life for seniors and individuals with special needs.</p>      
        </div>

        <div className='bg-[#F5F5F5] hover:bg-[#DCFFAB] transition-all duration-300 ease-in-out p-5 rounded-md flex flex-col gap-3'>
            <img className=' w-full' src={img2} alt="" />
            <h1 className=' text-[20px] font-[600] text-[#2E3D32]'>Top Tips for Caregivers</h1>
            <p className=' text-[16px] font-[400] text-[#2E3D32]'>Essential self-care strategies to prevent burnout while providing the best support for your loved ones.</p>      
        </div>

        <div className='bg-[#F5F5F5] hover:bg-[#DCFFAB] transition-all duration-300 ease-in-out p-5 rounded-md flex flex-col gap-3'>
            <img className=' w-full' src={img3} alt="" />
            <h1 className=' text-[20px] font-[600] text-[#2E3D32]'>Right Home Care Provider</h1>
            <p className=' text-[16px] font-[400] text-[#2E3D32]'>Key factors to consider when selecting a trustworthy home health care service for your loved ones.</p>      
        </div>

        <div className='bg-[#F5F5F5] hover:bg-[#DCFFAB] transition-all duration-300 ease-in-out p-5 rounded-md flex flex-col gap-3'>
            <img className=' w-full' src={img4} alt="" />
            <h1 className=' text-[20px] font-[600] text-[#2E3D32]'>Your Loved One Need</h1>
            <p className=' text-[16px] font-[400] text-[#2E3D32]'>Recognizing the key indicators that professional home care may be the right solution for your family.</p>      
        </div>
          </div>
    </div>
  )
}

export default Blogo
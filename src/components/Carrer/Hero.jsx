import React from 'react';
export default function Hero() {
  return (
     <div className=''>
      <div className=" p-4 md:p-8 flex items-center justify-center">
         <div className=' bm flex flex-col gap-5 pt-72 p-12 mt-12 rounded-2xl'>
            <h1 className=' text-[32px] font-[600] text-white'>Personal Care Assistance</h1>
            <p className=' text-[20px] font-[400] text-white max-w-[555px]'>Helping with daily activities like bathing, dressing, and meal preparation to ensure comfort and dignity.</p>
            <button className=' bg-[#DCFFAA] text-xl py-2.5 px-5 rounded-full text-black w-fit'>View more</button>
           </div>
    </div>
     </div>
  );
}
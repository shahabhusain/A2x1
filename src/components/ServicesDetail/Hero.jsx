import React from 'react';
import main from '../../assets/dmain.png'
export default function Hero() {
  return (
    <div className=" p-4 md:p-8 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md max-w-[75rem] w-full overflow-hidden mt-20">
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Left section with content */}
          <div className="flex flex-col md:w-1/2">
            {/* Back button */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Service tag */}
            <div className="bg-[#DCFFAA] text-[#2E3D32] font-medium px-6 w-fit py-2 rounded-full inline-block mb-4 text- text-[20px]">
              Service / Personal care assistance
            </div>
            
            {/* Heading */}
            <h1 className="text-3xl md:text-[42px] leading-[3.5rem] font-[600] text-[#2E3D32] mb-4">
              Dignity and Comfort in Daily Living.
            </h1>
            
            {/* Description */}
            <p className="text-[#2E3D32] text-[20px] font-[400] mb-8">
              Helping with daily activities like bathing, dressing, and meal preparation to ensure comfort and dignity.
            </p>
            
            {/* Get Started button */}
            <button className="bg-[#2E3D32] hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 w-fit">
              Get Started
            </button>
          </div>
          
          {/* Right section with image */}
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden h-full">
              <img 
                src={main} 
                alt="Caregiver helping elderly woman" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
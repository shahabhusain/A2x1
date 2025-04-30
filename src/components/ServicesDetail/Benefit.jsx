import React from 'react';
import main from '../../assets/dmain2.png'
export default function Benefit() {
  const beneficiaries = [
    {
      id: 1,
      text: "Seniors who need help with daily hygiene routines.",
      highlighted: true
    },
    {
      id: 2,
      text: "Individuals recovering from illness or surgery.",
      highlighted: false
    },
    {
      id: 3,
      text: "People with limited mobility or disabilities.",
      highlighted: true
    },
    {
      id: 4,
      text: "Families needing support with aging loved ones.",
      highlighted: true
    }
  ];

  return (
    <div className=" py-12 px-4 md:px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Image section */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={main}
              alt="Caregiver assisting elderly woman" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-[36px] font-[600] text-gray-800 mb-6">
            Who Benefits from This Care?
          </h2>
          
          <div className="space-y-4">
            {beneficiaries.map((item) => (
              <div 
                key={item.id}
                className='rounded-lg p-4 flex items-start gap-3 text-[#2E3D32] hover:text-white bg-[#DCFFAA] hover:bg-[#2E3D32]'>
                <svg 
                  className='w-5 h-5 mt-0.5 '
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="flex-1 text-[20px] font-[400]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
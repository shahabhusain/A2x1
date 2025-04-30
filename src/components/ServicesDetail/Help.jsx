import React from 'react'
import icon1 from '../../assets/icon5.png'
import icon2 from '../../assets/icon6.png'
import icon3 from '../../assets/icon7.png'
import icon4 from '../../assets/icon8.png'
import icon5 from '../../assets/icon9.png'
import icon6 from '../../assets/icon10.png'

const helpData = [
  {
    icon: icon1,
    title: 'Conversation & Socialization',
    description: 'Lively chats, games, and shared stories.'
  },
  {
    icon: icon2,
    title: 'Personalized Support',
    description: 'Established to provide trusted, professional home health care.'
  },
  {
    icon: icon3,
    title: 'Experienced Team',
    description: 'Skilled caregivers and nurses dedicated to excellence.'
  },
  {
    icon: icon4,
    title: 'Reliable Care',
    description: '24/7 care ensuring comfort and peace of mind.'
  },
  {
    icon: icon5,
    title: 'Holistic Wellness',
    description: 'Supporting physical, emotional, and mental well-being.'
  },
  {
    icon: icon6,
    title: 'Compassionate Companionship',
    description: 'Caring presence that brings warmth and reassurance.'
  },
]

const Help = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <h1 className='text-[36px] font-[600] text-[#2E3D32] text-center'>How we help</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {helpData.map((item, index) => (
          <div
            key={index}
            className="group hover:bg-[#1d2b1f] border border-[#00000027] bg-[#d1cdcd29] p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in"
          >
            <div className='w-16 h-16 rounded-full group-hover:bg-white bg-[#d1caca52] flex items-center justify-center mb-6'>
              <img src={item.icon} alt={item.title} />
            </div>
            <h3 className="text-[22px] font-semibold mb-2 text-[#2E3D32] group-hover:text-white">
              {item.title}
            </h3>
            <p className="text-[17px] font-[400] text-[#2E3D32] group-hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Help

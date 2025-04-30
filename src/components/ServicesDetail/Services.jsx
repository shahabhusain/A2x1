import React, { useState, useRef } from 'react';
import img1 from '../../assets/bg1.png'
import img2 from '../../assets/bg2.png'
import img3 from '../../assets/bg3.png'
export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  
  const services = [
    {
      id: 1,
      title: "24/7 Live-in Care",
      description: "Helping with daily activities like bathing, dressing, and meal preparation to ensure comfort and dignity.",
      imageSrc: img1
    },
    {
      id: 2,
      title: "Post-Surgical Care",
      description: "Professional assistance with mobility support, medication management, and recovery to ensure a safe healing process.",
      imageSrc: img2
    },
    {
      id: 3,
      title: "Dementia & Alzheimer's Care",
      description: "Specialized support for individuals with memory loss, focused on safety and well-being.",
      imageSrc: img3
    }
  ];
  
  const nextSlide = () => {
    if (currentSlide < services.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the first slide
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(services.length - 1); // Loop to the last slide
    }
  };
  
  return (
    <div className=" mx-auto px-20 py-12 mt-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-[600] text-gray-800">More Services for you</h2>
        
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {services.map((service) => (
            <div key={service.id} className="min-w-full flex-none px-2">
              <div className="bg-black rounded-lg overflow-hidden relative">
                <img 
                  src={service.imageSrc} 
                  alt={service.title} 
                  className="w-full object-cover opacity-80"
                />
                
                <div className="absolute bottom-12 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="mb-4 max-w-lg">{service.description}</p>
                  <button className="bg-green-200 hover:bg-green-300 text-gray-800 font-medium py-2 px-6 rounded-full transition-colors">
                    View more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
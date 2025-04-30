import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2E3D32] text-white py-16 mt-20 rounded-t-2xl px-8">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center mb-16">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full mr-3"></div>
          <span className="font-semibold">A2Z Home Health Care</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Carrier</a>
          <a href="#" className="hover:text-gray-300">Blogs</a>
        </nav>
        
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <p className="text-sm">2025. All rights reserved</p>
          <p className="text-sm mt-2"><a href="#" className="hover:underline">Privacy Policy</a></p>
        </div>
        
        <div className="md:col-span-1">
          <h3 className="text-sm font-medium mb-4">Contact us</h3>
          <p className="text-sm mb-2">+1 456 369 22 90</p>
          <p className="text-sm"><a href="mailto:info@a2zhealthcare.com" className="hover:underline">info@a2zhealthcare.com</a></p>
        </div>
        
        <div className="md:col-span-1">
          <h3 className="text-sm font-medium mb-4">Socials</h3>
          <p className="text-sm mb-2"><a href="#" className="hover:underline">Instagram</a></p>
          <p className="text-sm"><a href="#" className="hover:underline">LinkedIn</a></p>
        </div>
      </div>
      
      {/* Large Footer Text */}
      <div className="pt-16">
        <h1 className="text-4xl md:text-[107px] font-bold text-[#DCFFAA] text-center">A2Z Home Health Care</h1>
      </div>
    </footer>
  );
}
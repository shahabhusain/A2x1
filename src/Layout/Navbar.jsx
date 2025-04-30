import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  // In a real app with React Router, we would use useLocation() to get the current path
  const location = useLocation();
  
  return (
    <div className='flex fixed w-full shadow-sm top-0 z-[1000] items-center justify-between py-3 px-12 shadow-sm'>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <div className='w-[35px] h-[35px] bg-[#DCFFAA] rounded-full'></div>
        <h2 className='flex items-center text-[23px] font-[700] text-[#DCFFAA]'>
          <span>A</span><span>2</span><span>Z</span>
          <span> </span>
          <span>H</span><span>e</span><span>a</span><span>l</span><span>t</span><span>h</span>
          <span> </span>
          <span>C</span><span>a</span><span>r</span><span>e</span>
        </h2>
      </div>
      
      {/* Navigation Links */}
      <ul className='bg-white/40 backdrop-blur-sm py-3 px-5 rounded-full flex items-center gap-3'>
        <Link 
          to="/" 
          className={`py-2 px-4 rounded-full transition-all duration-200 ${
            location.pathname === '/' 
              ? 'bg-white text-black' 
              : 'text-black hover:bg-white/20'
          }`}
        >
          Home
        </Link>
        
        <Link 
          to="/about" 
          className={`py-2 px-4 rounded-full transition-all duration-200 ${
            location.pathname === '/about' 
              ? 'bg-white text-black' 
              : 'text-black hover:bg-white/20'
          }`}
        >
          About
        </Link>
        
        <Link 
          to="/services" 
          className={`py-2 px-4 rounded-full transition-all duration-200 ${
            location.pathname === '/services' 
              ? 'bg-white text-black' 
              : 'text-black hover:bg-white/20'
          }`}
        >
          Services
        </Link>
        
        <Link 
          to="/career" 
          className={`py-2 px-4 rounded-full transition-all duration-200 ${
            location.pathname === '/career' 
              ? 'bg-white text-black' 
              : 'text-black hover:bg-white/20'
          }`}
        >
          Career
        </Link>
        
        <Link 
          to="/blog" 
          className={`py-2 px-4 rounded-full transition-all duration-200 ${
            location.pathname === '/blog' 
              ? 'bg-white text-black' 
              : 'text-black hover:bg-white/20'
          }`}
        >
          Blog
        </Link>
        
        <Link 
          to="/contact" 
          className={`py-2 px-4 rounded-full transition-all duration-200 ${
            location.pathname === '/contact' 
              ? 'bg-white text-black' 
              : 'text-black hover:bg-white/20'
          }`}
        >
          Contact
        </Link>
      </ul>
      
      {/* Login Button */}
      <button className='bg-white text-black py-2 px-5 rounded-full hover:bg-[#DCFFAA] transition-colors duration-200'>
        Login
      </button>
    </div>
  );
}
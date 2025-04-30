import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  {
    bgClass: 'bg2',
    title: 'Personal Care Assistance',
    desc: 'Helping with daily activities like bathing, dressing, and meal preparation to ensure comfort and dignity.',
  },
  {
    bgClass: 'bgg3',
    title: '24/7 Live-in Care',
    desc: 'Round-the-clock support for peace of mind and consistent care in the comfort of home.',
  },
  {
    bgClass: 'bg4',
    title: 'Post-Surgical Care',
    desc: 'Professional assistance with wound care, mobility support, and medication management.',
  },
  {
    bgClass: 'bg5',
    title: 'Physical Disability Support',
    desc: 'Compassionate care tailored to individuals with mobility challenges, ensuring independence.',
  },
  {
    bgClass: 'bg6',
    title: 'Dementia & Alzheimer’s Care',
    desc: 'Specialized support for individuals with memory loss, focused on safety and well-being.',
  },
  {
    bgClass: 'bg7',
    title: 'Companion Care',
    desc: 'Emotional and social support to reduce loneliness with meaningful companionship.',
  },
  {
    bgClass: 'bg8',
    title: 'Hospice Support',
    desc: 'Comfort-focused care for those at the end of life, offering peace and dignity.',
  },
];

const Serving = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('.pinned-section');

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='bg-[#FFFFDB] pt-20 pb-12 rounded-2xl mt-20 px-20 w-full' ref={containerRef}>
      <div className=''>
        <h1 className='text-[#2E3D32] text-[36px] font-[600] text-center'>
          Serving You with Care
        </h1>
      </div>

      {sectionsData.map(({ bgClass, title, desc }, i) => (
        <div
          key={i}
          className={`pinned-section ${bgClass} flex flex-col gap-5 pt-72 p-12 mt-12 `}
        >
          <h1 className='text-[32px] font-[600] text-white'>{title}</h1>
          <p className='text-[20px] font-[400] text-white max-w-[555px]'>{desc}</p>
          <Link to="/servicesdetail" className='bg-[#DCFFAA] py-2.5 px-5 rounded-full text-black w-fit'>
            View more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Serving;

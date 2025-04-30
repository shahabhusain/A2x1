import { useState } from 'react';

export default function Card() {
  const [expandedSection, setExpandedSection] = useState(null);
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  const sections = [
    {
      id: 'needs',
      title: 'Understand Your Needs',
      content: 'Choosing the right home care provider is about more than just services—its about trust, comfort, and peace of mind. Take the time to research, ask questions, and meet with potential providers before making a decision. With the right care, your loved one can continue to live safely and happily in the place they call home.'
    },
    {
      id: 'licensing',
      title: 'Check for Proper Licensing & Certification',
      content: 'Choosing the right home care provider is about more than just services—its about trust, comfort, and peace of mind. Take the time to research, ask questions, and meet with potential providers before making a decision. With the right care, your loved one can continue to live safely and happily in the place they call home.'
    },
    {
      id: 'qualifications',
      title: 'Evaluate Caregiver Qualifications & Training',
      content: 'Choosing the right home care provider is about more than just services—its about trust, comfort, and peace of mind. Take the time to research, ask questions, and meet with potential providers before making a decision. With the right care, your loved one can continue to live safely and happily in the place they call home.'
    },
    {
      id: 'final',
      title: 'Final Thoughts',
      content: 'Choosing the right home care provider is about more than just services—its about trust, comfort, and peace of mind. Take the time to research, ask questions, and meet with potential providers before making a decision. With the right care, your loved one can continue to live safely and happily in the place they call home.'
    }
  ];
  
  return (
    <div className=" w-[95%] mx-auto mt-32 p-12 bg-[#FAFFF4] border-[#000] border-[2px] rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 pb-0">
        <div className="flex justify-between items-start">
          <div className="bg-[#DCFFAA] text-[#2E3D32] text-xs font-[600] px-2 py-1 rounded-md">
            Home Health Care
          </div>
          <div className="text-gray-500 font-[500] text-sm">
            May 26, 2024 · 10 min
          </div>
        </div>
        
        <h1 className="text-2xl font-semibold text-gray-800  mb-2 mt-12">
          How to Choose the Right Home Care Provider
        </h1>
        
        <p className="text-gray-600 mb-8">
          Finding the right home care provider is one of the most important decisions you can make for yourself or a loved one. Whether it's for an aging parent, a family member recovering from surgery, or someone with special care needs, the right provider ensures comfort, safety, and quality of life. But with so many options available, how do you choose the best one? This guide will help you navigate the process and make an informed decision.
        </p>
      </div>
      
      <div className="px-6 pb-6">
        {sections.map((section) => (
          <div key={section.id} className="mb-6">
            <h2 
              className="text-2xl font-semibold text-gray-800 mb-2 mt-12 cursor-pointer flex items-center"
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
              <span className="ml-2 text-gray-500">
                {expandedSection === section.id ? '−' : '+'}
              </span>
            </h2>
            
            <div className={`text-gray-600 ${expandedSection === section.id ? 'block' : 'block'}`}>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
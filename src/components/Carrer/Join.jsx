import React, { useState } from 'react';
import hand from '../../assets/hand.png'
import men from '../../assets/man.png'
import { X, Upload } from 'lucide-react';
export default function Join() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    availability: '',
    location: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      availability: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <div className=" w-[80%] mx-auto py-12 px-4 mt-72">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">
        Join Our Team in Just a Few Steps
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Step 1: Browse */}
        <div className="bg-[#DCFFAA] rounded-xl p-6 relative">
          <div className="mb-6">
            <span className="text-gray-700 font-semibold">01.</span>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">Browse</h3>
            <p className="text-gray-600 mt-2 text-xl">
              Explore our selection of openings that match your skills.
            </p>
          </div>
          
          <img 
                    src={hand}
                    alt="Mobile app showing job listings" 
                    className="w-full"
                  />
        </div>
        
        {/* Step 2: Submit */}
             <div className=' flex flex-col gap-12'>
             <div className="bg-[#FAFFF4] rounded-xl p-6 border border-gray-200">
          <div className="mb-16">
            <span className="text-gray-700 font-semibold">02.</span>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">Submit</h3>
            <p className="text-gray-600 mt-2 text-xl">
              Fill out the application form with your details.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button className="flex items-center space-x-2 text-xl bg-[#FAFFF4] border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
              </svg>
              <span>Upload CV</span>
            </button>
          </div>
        </div>
        
        {/* Step 3: Interview */}
        <div className="bg-[#FAFFF4] rounded-xl p-6 border border-gray-200">
          <div className="mb-4">
            <span className="text-gray-700 font-semibold">03.</span>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">Interview</h3>
            <p className="text-gray-600 text-xl mt-2">
              Our team will contact you for the next steps.
            </p>
          </div>
          

              <img 
                src={men} 
                alt="Video interview illustration" 
                className="w-full rounded-lg"
              />
        </div>
             </div>
      </div>
      
      <div className="flex justify-center mt-10">
          <button 
            onClick={openModal} 
            className="bg-gray-800 text-xl hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Apply now
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-50  min-h-[233px] overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 p-4"
          >
              <div className=" flex items-center justify-center p-4 mt-[33rem]">
      <div className="bg-[#FAFFF4] rounded-lg shadow-lg w-full max-w-4xl p-12 relative">
        <button onClick={closeModal} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        
        <div className="mb-8">
          <h1 className=" font-bold text-green-900 mb-2 text-5xl">Apply for a Job</h1>
          <p className="text-gray-600 text-xl mt-6">
            Take the first step toward a rewarding career in home health care. Fill out the form below and submit your details, resume, and cover letter.
          </p>
        </div>

        <div>
          {/* Personal Information Section */}
          <div className="my-8">
            <h2 className="text-lg font-medium text-green-800 mb-4">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full p-3 border text-xl placeholder:text-[14px] border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full p-3 border text-xl placeholder:text-[14px] border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full p-3 border text-xl placeholder:text-[14px] border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address (Optional)</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  className="w-full p-3 border text-xl placeholder:text-[14px] border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* Job Details Section */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-green-800 mb-4">Job Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position Applying For</label>
                <div className="relative">
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full p-3 text-xl placeholder:text-[14px] border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="caregiver">Caregiver</option>
                    <option value="nurse">Nurse</option>
                    <option value="administrator">Administrator</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="full-time"
                      name="availability"
                      value="full-time"
                      onChange={handleRadioChange}
                      checked={formData.availability === 'full-time'}
                      className="h-4 w-4 text-green-600 text-xl placeholder:text-[14px] focus:ring-green-500"
                    />
                    <label htmlFor="full-time" className="ml-2 text-sm text-gray-700">Full-time</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="part-time"
                      name="availability"
                      value="part-time"
                      onChange={handleRadioChange}
                      checked={formData.availability === 'part-time'}
                      className="h-4 w-4 text-xl placeholder:text-[14px] text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="part-time" className="ml-2 text-sm text-gray-700">Part-time</label>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Work Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter your location"
                  className="w-full p-3 text-xl border placeholder:text-[14px] border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* Upload Documents Section */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-green-800 mb-4">Upload Documents</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                <div className="flex items-center justify-center p-4 border border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center">
                    <Upload size={20} className="text-gray-400" />
                    <span className="mt-2 text-sm text-gray-500">Upload CV</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Cover Letter (Optional)</label>
                <div className="flex  items-center justify-center p-4 border border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center">
                    <Upload size={20} className="text-gray-400" />
                    <span className="mt-2 text-sm text-gray-500">Upload CL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 text-xl bg-[#2E3D32]  text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
          </div>
        )}
    </div>
  );
}
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import map from '../assets/map.png'
export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
         <div>
           <div className="min-h-screen bg-[#2E3D32] flex items-center justify-center p-4">
      <div className=" w-[90%] flex flex-col md:flex-row mt-32">
        {/* Left Column - Contact Information */}
        <div className="text-white md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="mb-8 className='max-w-[566px]'">
            Email, call, or complete the form to get best home health
            care journey with us
          </p>
          
          <div className="mb-8">
            <p className="mb-2">info@a2zhomehealthcare.com</p>
            <p>321-221-231</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 ">Customer Support</h2>
            <p className='max-w-[566px]'>
              Our support team is available around the clock to address any
              concerns or queries you may have.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Feedback and Suggestions</h2>
            <p className='max-w-[566px]'>
              We value your feedback and are continuously working to improve
              A2Z Home Health Care.
            </p>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-2xl p-8 md:w-1/2 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mb-6">You can reach us anytime</p>
          
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="bg-[#FAFFF4] p-3 rounded-md flex-1"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="bg-[#FAFFF4] p-3 rounded-md flex-1"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4 relative">
              <div className="absolute left-3 top-3 text-gray-500">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="bg-[#FAFFF4] p-3 pl-10 rounded-md w-full"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4 flex">
              <div className="bg-[#FAFFF4] p-3 rounded-l-md border-r border-gray-200">
                <span className="text-gray-500">+01</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="bg-[#FAFFF4] p-3 rounded-r-md flex-1"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="How can we help?"
                rows="4"
                className="bg-[#FAFFF4] p-3 rounded-md w-full resize-none"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#DCFFAA] hover:bg-green-300 text-green-800 font-medium py-3 px-4 rounded-md transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6 py-8">
          {/* Left Column - Map */}
         <img className='md:w-1/2' src={map} alt="" />
          
          {/* Right Column - Location Info */}
          <div className="md:w-1/2">
            <div className="mb-6">
              <div className="inline-block bg-[#DCFFAA] text-green-800 px-5 py-3 rounded-full text-sm font-medium mb-2">
                Our Location
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Connecting Near and Far</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Headquarters</h3>
                <p className="text-gray-700 mb-1">A2Z Home Health Care</p>
                <p className="text-gray-700 mb-1">9567 Old Lou Hwy Unit #21-C</p>
                <p className="text-gray-700 mb-1">Fort Kir, WI 22930-4931</p>
                <p className="text-gray-700">United States</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4 flex items-start space-x-3">
                  <MapPin size={20} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Visit our office</h4>
                    <p className="text-gray-600 text-sm">We're open Monday through Friday, 9am-5pm</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                    <span className="text-xs font-bold">?</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Need directions?</h4>
                    <p className="text-gray-600 text-sm">Call us at 555-123-4567 for assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         </div>
  );
}
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend here
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Message submitted!');
  };

  return (
    <div className=" w-[90%] mx-auto p-6 bg-white rounded-lg flex justify-between mt-20">
      <div className="mb-8 w-1/2">
        <h2 className="text-[36px] font-bold text-gray-800">We're Here to Help - </h2>
        <h3 className="text-2xl font-bold text-gray-800">Reach Out!</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>
        
        <div className="flex justify-start">
          <button
            type="submit"
            className="px-6 py-2 bg-green-800 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit message
          </button>
        </div>
      </form>
    </div>
  );
}
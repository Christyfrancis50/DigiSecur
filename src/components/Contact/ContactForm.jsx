import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700">Subject</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required 
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-700">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full mt-2 p-2 border border-gray-300 rounded-md h-32"
            required 
          ></textarea>
        </div>
        <div className="mt-6 flex items-center">
          <input 
            type="checkbox" 
            name="consent" 
            checked={formData.consent} 
            onChange={handleChange} 
            className="mr-2"
          />
          <label className="text-gray-700">I consent to having my information processed.</label>
        </div>
        <button 
          type="submit" 
          className="text-white flex leading-8 space-x-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 py-2 px-6 mt-8 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


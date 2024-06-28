"use client"
import React, { useState } from 'react';
const hotel=[
  {
    name: "Meluha, The Fern"
  }
]



const PersonalInfo = ({nextStep}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [result, setResult] = useState("");


  let KEY = process.env.NEXT_PUBLIC_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",KEY);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('number', number);
    // formData.append('message', message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Form submission error", error);
      setResult("An error occurred while submitting the form. Please try again later.");
    }

    nextStep()
  };
  

  const handleSubmit = (e) => {
   ;
   
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      {hotel.map(item=>(
        <div className='font-f_2 font-bold text-xl'>{item.name}</div>
      ))}
      
      <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="my-6 md:px-1">
                <label className="block  text-gray-700">Message</label>
                <textarea
                  name="message"
                  className="w-full h-20 p-2 border border-gray-300 rounded-md hover:border-black"
                  required
                  aria-label="Message"
                  
                ></textarea>
              </div>
        <button type="submit" className="w-full py-2 px-4 bg-black text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;

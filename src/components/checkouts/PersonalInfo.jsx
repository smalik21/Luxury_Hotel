import React from 'react';

const PersonalInfo = ({ nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation if necessary
    nextStep();
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;

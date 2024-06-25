import React from 'react';

const Confirmation = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Blue Origin Farms</span>
          <span>2 Adults</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$99</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>$2</span>
        </div>
        <div className="flex justify-between">
          <span>Payable</span>
          <span>$98</span>
        </div>
      </div>
      <button className="w-full mt-4 py-2 px-4 bg-black text-white rounded-md">
        Save
      </button>
    </div>
  );
};

export default Confirmation;

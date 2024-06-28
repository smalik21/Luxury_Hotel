import React, { useState } from 'react';
import { FaApplePay, FaCreditCard } from 'react-icons/fa';
import Image from 'next/image';

const PaymentDetails = () => {
  
  // const [selectedPayment, setSelectedPayment] = useState('');

  // const handleCheckout = () => {
  //   // Prepare data to pass to next step
  //   const dataForNextStep = {
  //     ...previousFormData, // Previous page data
  //     paymentMethod: selectedPayment,
  //   };
  //   nextStep(dataForNextStep);
  // };

  // const handlePaymentSelect = (paymentMethod) => {
  //   setSelectedPayment(paymentMethod);
  // };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
    
      <div>Your query has been successfully submitted for the hotel. We will review your request and get back to you soon</div>
  </div>
  );
};

export default PaymentDetails;

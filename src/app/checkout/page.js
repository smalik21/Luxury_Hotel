"use client";

import React, { useState } from 'react';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import PersonalInfo from '@/components/checkouts/PersonalInfo';
import PaymentDetails from '@/components/checkouts/PaymentDetails';
import BookingSummary from '@/components/checkouts/Confirmation';
import Link from 'next/link';
import withAuth from '@/utils/withAuth';

const Payment = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getLineColor = (currentStep, targetStep) => {
    return currentStep > targetStep ? 'bg-black' : 'bg-gray-200';
  };

  return (
    <div className="min-h-screen bg-white bg-opacity-50 flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: 'url("/hotel-img3.jpeg")' }}></div>
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-2xl font-bold text-black">LuxuryHotelConcierge</Link>
        <button onClick={prevStep} className="flex items-center text-xl text-gray-900 mt-5 hover:text-black">
          <FaArrowLeft className="mr-2 mt-1" />
          Back
        </button>
      </div>
      <div className="absolute top-20 w-[800px] flex flex-col items-center z-10">
        <div className="flex items-center justify-between w-3/4">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-black text-white' : 'bg-gray-300'}`}>
              {step >= 1 && <FaCheck />}
            </div>
            <span className="text-sm">Hotel</span>
          </div>
          <div className={`flex-1 mb-5 ml-1 h-1 ${getLineColor(step, 1)}`}></div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-black text-white' : 'bg-gray-300'}`}>
              {step >= 2 && <FaCheck />}
            </div>
            <span className="text-sm">Personal</span>
          </div>
          <div className={`flex-1 mb-5 h-1 ${getLineColor(step, 2)}`}></div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 3 ? 'bg-black text-white' : 'bg-gray-300'}`}>
              {step >= 3 && <FaCheck />}
            </div>
            <span className="text-sm">Payment</span>
          </div>
          <div className={`flex-1 mb-5 h-1 ${getLineColor(step, 3)}`}></div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step === 4 ? 'bg-black text-white' : 'bg-gray-300'}`}>
              {step === 4 && <FaCheck />}
            </div>
            <span className="text-sm">Confirm</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl relative z-20 mt-24 shadow-md ">
        {step === 1 && <PersonalInfo nextStep={nextStep} />}
        {step === 2 && <PaymentDetails nextStep={nextStep} />}
        {step === 3 && <BookingSummary />}
      </div>
    </div>
  );
};

export default withAuth(Payment);

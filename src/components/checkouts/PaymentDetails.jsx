"use client";

import React, { useState } from 'react';
import { FaApplePay, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const PaymentDetails = ({ nextStep }) => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showRegisteredCards, setShowRegisteredCards] = useState(false);

  const handleCheckout = () => {
    nextStep();
  };

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    if (paymentMethod === 'card') {
      setShowRegisteredCards(true);
    } else {
      setShowRegisteredCards(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-6">Choose Payment Method</h2>
        <div className="flex justify-around items-center">
          <button
            onClick={() => handlePaymentSelect('card')}
            className={`flex gap-2 items-center justify-center border-2 rounded-md p-5 ${selectedPayment === 'card' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
          >
            <FaCreditCard size={25} />
            <span>Card</span>
          </button>
          <button
            onClick={() => handlePaymentSelect('paypal')}
            className={`border-2 rounded-lg p-6 ${selectedPayment === 'paypal' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
          >
            <Image src="/paypal.png" width={70} height={60} alt="PayPal" />
          </button>
          <button
            onClick={() => handlePaymentSelect('gpay')}
            className={`border-2 rounded-lg py-5 px-7 ${selectedPayment === 'gpay' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
          >
            <Image src="/gpay.png" width={60} height={40} alt="Google Pay" />
          </button>
          <button
            onClick={() => handlePaymentSelect('stripe')}
            className={`border-2 rounded-lg py-4 px-6 ${selectedPayment === 'stripe' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
          >
            <Image src="/stripe.png" width={60} height={40} alt="Stripe" />
          </button>
          <button
            onClick={() => handlePaymentSelect('applepay')}
            className={`border-2 rounded-lg px-5 ${selectedPayment === 'applepay' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
          >
            <FaApplePay size={65} />
          </button>
        </div>
      </div>

      {showRegisteredCards && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Registered cards</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-2xl text-green-500" />
                <div>
                  <p className="font-bold">Bank of India</p>
                  <p>1234</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p>Iamunknown</p>
                <p>12/34</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-2xl text-gray-300" />
                <div>
                  <p className="font-bold">Bank of India</p>
                  <p>1234</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p>Iamunknown</p>
                <p>12/34</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPayment && !showRegisteredCards && (
        <button className="w-full mt-4 py-2 px-4 bg-black text-white rounded-md" onClick={handleCheckout}>
          Checkout
        </button>
      )}

      {showRegisteredCards && (
        <button className="w-full mt-4 py-2 px-4 bg-black text-white rounded-md" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default PaymentDetails;

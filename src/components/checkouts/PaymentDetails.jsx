const PaymentDetails = () => {
    return (
      <section className="p-4 border border-gray-300 rounded-lg mb-6 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block font-semibold mb-1">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block font-semibold mb-1">Expiry Date</label>
          <input type="text" id="expiryDate" name="expiryDate" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block font-semibold mb-1">CVV</label>
          <input type="text" id="cvv" name="cvv" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
      </section>
    );
  };
  
  export default PaymentDetails;
  
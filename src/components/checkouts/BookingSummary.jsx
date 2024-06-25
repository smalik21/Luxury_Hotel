const BookingSummary = () => {
    return (
      <section className="p-4 border border-gray-300 rounded-lg mb-6 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Check-in:</span>
          <span className="text-gray-600">June 25, 2024</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Check-out:</span>
          <span className="text-gray-600">June 30, 2024</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Guests:</span>
          <span className="text-gray-600">2 Adults</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-bold">Total Price:</span>
          <span className="text-gray-600">$2,500</span>
        </div>
      </section>
    );
  };
  
  export default BookingSummary;
  
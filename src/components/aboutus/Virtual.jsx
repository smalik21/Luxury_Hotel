"use client"
import React, { useState } from 'react';
import VirtualCard from './VirtualCard';
import BookingCalendar from './BookingCalendar';

const Virtual = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const Carddata = [
    {img:"./v1.jpg",heading:"Our Virtual Assistance",time:"1 hr",info:"Connect with one of our dedicated travel experts and discuss your future travel needs and plans free of charge!"},
    {img:"./v2.png",heading:"Hotel Reservations",time:"30 mins",info:"Request assistance to book Hotels of your choice anywhere across the globe"},
    {img:"./v3.jpg",heading:"Flight Reservations",time:"30 mins",info:"We Assist you in planning your flights from anywhere to anywhere. Help you get the best costs and recommend dates and times for your travel if you're not certain of your plans."},
    {img:"./v4.jpg",heading:"Cruise Reservations",time:"2 hrs",info:"Enjoy the Luxury of sailing on the best of cruises with one of our Cruise Experts to guide you throughout the process from booking to Embarking and disembarking your cruise"},
    {img:"./v5.jpeg",heading:"Personal Event Planning",time:"3 hrs ",info:"From your Kid's Birthday Party to your Wedding event, one of our event planner's can assist you with your next small/big event at your beck and call!"},
  ];

  const handleContactClick = (card) => {
    setSelectedCard(card);
  };

  const handleCancel = () => {
    setSelectedCard(null);
  };

  const handleSubmit = (date, slot) => {
    console.log(`Scheduled for ${slot} on ${date}`);
    // Redirect to contact page or perform other actions
    setSelectedCard(null);
  };

  return (
    <div className="py-10 md:py-20 bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h1 className="text-black text-3xl md:text-4xl font-bold text-center mb-10">Connect with our Virtual Assistants at a time of your convenience!</h1>
        <div className="grid grid-cols-1 gap-6">
          {selectedCard ? (
            <BookingCalendar
              data={selectedCard}
              onCancel={handleCancel}
              onSubmit={handleSubmit}
            />
          ) : (
            Carddata.map((data, i) => (
              <VirtualCard
                key={i}
                data={data}
                onContactClick={() => handleContactClick(data)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Virtual;

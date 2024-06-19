import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const BestChoice = () => {
  return (
    <div className="w-full">
      <div className="md:w-[928px] mx-auto my-10 bg-no-repeat bg-cover rounded-t-[60px]" style={{ backgroundImage: "url(./best-choice-image.jpg)" }} >
        <div className="flex flex-col gap-6 mt-10">
          <h1 className="font-[600] mt-10 text-[40px] text-center text-[#000000E5]">
            Discover the best choice for you
          </h1>

          <div className="mt-10 mx-auto p-6 rounded-[30px] bg-white md:w-[800px]">
            <div className="flex items-center justify-between px-5">
              <div className="flex flex-col gap-1">
                <h2 className="text-[#000000] text-[18px]">
                  2000+ destinations
                </h2>
                <p className="text-[#00000080] text-[15px]">
                  Explore more than 2000 destinations now.
                </p>
              </div>
              <div className="h-12 w-12 bg-black text-white flex items-center justify-center rounded-full">
                <FaGreaterThan />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {[
                { title: "Goa Hotels", location: "Goa, India" },
                { title: "Pune Hotels", location: "Pune, India" },
                { title: "Delhi Hotels", location: "Delhi, India" },
                { title: "Lonavala Hotels", location: "Lonavala, India" },
                { title: "Capri, Italy Hotels", location: "Capri, Italy" },
                { title: "Paris Hotels", location: "Paris, France" },
              ].map((hotel, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center rounded-lg border border-gray-300 py-3 px-2"
                >
                  <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-black text-[24px]">{hotel.title}</h2>
                    <p className="text-[#00000080] text-[15px]">
                      190 hotels at {hotel.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestChoice;

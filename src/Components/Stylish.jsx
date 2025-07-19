import React from "react";
import Watch_icon from "../assets/Watch-icon.png";
import Sunglasses from "../assets/Sunglasses.jpg";
import Rolex from "../assets/Rolex.jpg";
import Bracelet from "../assets/Bracelet.jpg";

const Stylish = () => {
  return (
    <div className="bg-white mt-8">
      <div className="flex justify-center">
        <img className="w-45" src={Watch_icon} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center space-y-2.5">
        <h1 className=" text-2xl sm:text-4xl font-serif">
          Crafted. Versatile. Distinct.
        </h1>
        <p className="text-sm sm:text-2xl font-light ">
          We craft products designed to stand the test of time.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 m-10 gap-2 sm:gap-8">
        <div className="relative w-full group">
          <img
            src={Sunglasses}
            alt="glasses"
            className="w-full transition-transform duration-500 lg:group-hover:scale-105"
          />

  
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-3xl font-bold mb-4">SUNGLASSES</h2>
            <button className="bg-transparent border-2 text-white px-6 py-3 rounded-sm font-medium lg:hover:text-gray-200 transition cursor-pointer">
              View Collection
            </button>
          </div>
        </div>
       <div className="flex flex-col gap-2 sm:gap-5 ">
  
  <div className="relative w-full group">
    <img
      src={Bracelet}
      alt="bracelet"
      className="w-full transition-transform duration-500 lg:group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
      <h2 className="text-3xl font-bold mb-4">BRACELETS</h2>
      <button className="bg-transparent border-2 text-white px-6 py-3 rounded-sm font-medium lg:hover:text-gray-200 transition cursor-pointer">
        View Collection
      </button>
    </div>
  </div>

  
  <div className="relative w-full group">
    <img
      src={Rolex}
      alt="rolex"
      className="w-full transition-transform duration-500 lg:group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
      <h2 className="text-3xl font-bold mb-4">WATCHES</h2>
      <button className="bg-transparent border-2 text-white px-6 py-3 rounded-sm font-medium lg:hover:text-gray-200 transition cursor-pointer">
        View Collection
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Stylish;

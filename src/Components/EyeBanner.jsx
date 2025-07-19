import React from "react";
import Prada from "../assets/Prada.jpg";
import { Link } from "react-router-dom";

const EyeBanner = () => {
  return (
    <div
      className="bg-center bg-cover relative h-70 md:h-full lg:h-full"
      style={{ backgroundImage: `url(${Prada})` }}
    >
      <div className="flex justify-center lg:justify-end">
        <div className="flex flex-col text-white m-10 sm:m-28 space-y-3.5">
          <h1 className="text-center text-4xl sm:text-7xl">Elegant Eyewear.</h1>
          <p className="text-2xl sm:text-2xl text-center">
            Check out our collection of stylish shades.
          </p>
          <div className="text-center">
           <Link to={"/sunglasses"}> <button onClick={()=>window.scrollTo(0,0)} className=" border-1 text-white py-4 px-5 cursor-pointer md:text-3xl lg:text-2xl rounded-sm  hover:text-gray-200 hover:border-1 transition-all duration-300  ">VIEW SUNGLASSES</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeBanner;

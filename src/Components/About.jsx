import React from "react";
import About_Background from "../assets/About_Background.jpg";

const About = () => {
  return (
    <div
      className="bg-cover bg-center  relative min-h-screen"
      style={{ backgroundImage: `url(${About_Background})` }}
    >
      <div className="flex flex-col justify-center items-center h-screen space-y-3.5">
        <h1 className="text-white text-4xl md:text-7xl font-serif">About Us</h1>
        <p className="text-white  sm:text-lg text-md leading-6 font-bold text-center  lg:w-300">
          At ChronoNest, we believe in bold expression and timeless style. We
          are more than just a brand we're a culture, a movement, and a
          community of creatives who aren’t afraid to stand out. Since our
          inception, we've been featured in industry-leading publications like
          Vogue, GQ, Esquire, and Men’s Health, thanks to our commitment to
          quality, innovation, and storytelling through design.
        </p>
        <button className="bg-transparent text-black border-2 border-black px-10 py-3 hover:border-3 cursor-pointer" >OUR STORY</button>
      </div>
    </div>
  );
};

export default About;

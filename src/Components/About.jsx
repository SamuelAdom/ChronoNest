import React from "react";
import About_Background from "../assets/About_Background.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed  relative min-h-screen"
      style={{ backgroundImage: `url(${About_Background})` }}
    >
      <div className="flex flex-col justify-center items-center h-screen space-y-3.5">
        <h1 className="text-white text-4xl md:text-7xl font-serif">About Us</h1>
        <p className="text-white md:text-2xl md:leading-8  lg:text-lg text-md leading-6 font-bold text-center md:w-200 lg:w-300">
          At ChronoNest, we believe in bold expression and timeless style. We
          are more than just a brand we're a culture, a movement, and a
          community of creatives who aren’t afraid to stand out. Since our
          inception, we've been featured in industry-leading publications like
          Vogue, GQ, Esquire, and Men’s Health, thanks to our commitment to
          quality, innovation, and storytelling through design.
        </p>
      <Link to={"/about-us"} onClick={()=>window.scrollTo(0,0)}>  <button className="bg-transparent sm:text-2xl text-white border-2 border-white px-10 py-3 lg:hover:border-3 cursor-pointer" >OUR STORY</button></Link>
      </div>
    </div>
  );
};

export default About;

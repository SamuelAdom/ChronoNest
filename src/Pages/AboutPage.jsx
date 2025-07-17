import React from "react";
import About_Banner from "../assets/About-Banner.jpg";
import About_Fashion from "../assets/About_Fashion.jpg";
import Craftman from "../assets/Craftman.jpg";
import Variety from "../assets/Variety.jpg";
import TestimonialSection from "../Components/TestimonialSection";

const AboutPage = () => {
  return (
    <>
      <div
        className="relative h-80 lg:h-screen md:h-150  bg-cover bg-center"
        style={{ backgroundImage: `url(${About_Banner})` }}
      >
        <div className="flex justify-center">
          <h1 className="text-white text-6xl mt-25 md:mt-50 lg:mt-60 font-extrabold">ABOUT</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center space-y-15 mt-8">
        <h1 className="sm:text-2xl text-[18px]  font-medium">
          At ChronoNest, we curate a handpicked collection of accessories that
          cater to <br /> the discerning tastes of modern gentlemen.
        </h1>
        <p className="w-95 sm:w-180 leading-7 md:w-200 lg:w-250 text-[16px] md:text-[19px] lg:text-lg">
          Welcome to Chrono, your premier destination for exquisite men’s
          accessories that combine timeless elegance with contemporary style. We
          believe that the right accessories have the power to elevate your
          look, leaving a lasting impression.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-100 mt-10">
        <img
          className="lg:h-full w-full bg-gray-100"
          src={About_Fashion}
          alt=""
        />
        <div className="flex flex-col bg-gray-100 p-10 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-serif sm:mt-40">
            Our Philosophy
          </h1>
          <p className="text-lg font-light">
            {" "}
            At Chrono, we understand that accessories are not merely add-ons to
            an outfit; they are an expression of personal style and
            individuality. Our philosophy is rooted in the belief that every
            accessory tells a story, and we strive to offer a diverse range of
            products that enable you to create your own unique narrative.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-100">
        <div className="flex flex-col bg-gray-100 p-10 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-serif sm:mt-40">
            Quality Craftsmanship
          </h1>
          <p className="text-lg font-light">
            {" "}
            We take pride in sourcing accessories that embody the highest
            standards of craftsmanship and quality. Our products are
            meticulously crafted using premium materials, ensuring durability
            and longevity. From the finest leather bracelets to intricately
            designed cufflinks, every item in our collection undergoes a
            rigorous selection process to ensure it meets our stringent
            criteria.
          </p>
        </div>
        <img className="lg:h-full w-full bg-gray-100" src={Craftman} />
      </div>
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 bg-gray-100">
        <img className="lg:h-full w-full bg-gray-100" src={Variety} />
        <div className="flex flex-col bg-gray-100 p-10 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-serif sm:mt-40">
            Unparalleled Variety
          </h1>
          <p className="text-lg font-light">
            At ChronoNest, we believe that style knows no boundaries, which is
            why we offer a wide range of accessories to suit every taste and
            occasion. From classic and timeless pieces to contemporary designs
            that push the boundaries of fashion, our collection boasts an
            unparalleled variety. Whether you’re looking for a sleek and
            minimalist watch or a statement-making bracelet, we have something
            to suit your personal style.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-3.5 mt-14">
        <h1 className=" flex justify-center  items-center text-[25px] sm:text-5xl font-serif">Join the Chrono Community</h1>
        <p className="text-lg font-light text-center lg:w-280">
          At Chrono, we are not just a store; we are a community of style
          enthusiasts who appreciate the art of accessorizing. We invite you to
          join our community, where you can stay updated on the latest trends,
          styling tips, and exclusive offers. Connect with us through our blog,
          social media platforms, and newsletter to be part of a dynamic
          community that shares a passion for men’s accessories.
        </p>
        <p className="text-lg font-light text-center sm:w-200">
          Thank you for choosing Chrono as your trusted source for men’s
          accessories. We are honored to be a part of your style journey and
          look forward to helping you discover the perfect accessories to
          express your unique personality and enhance your overall look.
        </p>
        <button className="bg-black text-white py-3 px-7 rounded-sm lg:hover:bg-transparent lg:hover:text-black hover:border-2 duration-300 transition-all cursor-pointer">JOIN NOW</button>
      </div>
      <div className="mt-8"><TestimonialSection/></div>
    </>
  );
};

export default AboutPage;

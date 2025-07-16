import React from 'react'
import About_Banner from '../assets/About-Banner.jpg'



const AboutPage = () => {
  return (
    <>
    <div className='relative min-h-screen  bg-cover bg-center' style={{backgroundImage:`url(${About_Banner})`}}>
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-white text-6xl font-extrabold'>ABOUT</h1>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center text-center space-y-15 mt-8'>
        <h1 className='sm:text-2xl text-[18px]  font-medium'>At ChronoNest, we curate a handpicked collection of accessories that cater to <br/> the discerning tastes of modern gentlemen.</h1>
        <p className='w-95 sm:w-180 leading-7 md:w-200 lg:w-250 text-[16px] md:text-[19px] lg:text-lg'>Welcome to Chrono, your premier destination for exquisite men’s accessories that combine timeless elegance with contemporary style. We believe that the right accessories have the power to elevate your look, leaving a lasting impression.</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        <img src="" alt="" />
        <div className='flex flex-col bg-gray-100'>
            <h1 className='text-3xl font-serif'>Our Philosophy</h1>
            <p className='text-lg font-light'> At Chrono, we understand that accessories are not merely add-ons to an outfit; they are an expression of personal style and individuality. Our philosophy is rooted in the belief that every accessory tells a story, and we strive to offer a diverse range of products that enable you to create your own unique narrative.</p>
        </div>
    </div>
    </>
    
  )
}

export default AboutPage
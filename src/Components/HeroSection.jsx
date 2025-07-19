import React from 'react'
import Background from '../assets/Background.jpg'
import { Link } from 'react-router-dom'



export default () => {
    return (
      <div className='bg-cover bg-center relative lg:min-h-screen' style={{backgroundImage: `url(${Background})`}}>
        <div className='relative'>
            <div className='absolute inset-0 blur-xl h-[580px]'></div>
            <div className='relative'>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-white overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>
                    
                            <h1 className="text-4xl  text-white font-extrabold sm:text-6xl">
                       Modern Elegance
                            </h1>
                            <p className='text-lg leading-6 sm:text-md'>
                               Discover a curated collection of premium timepieces designed to elevate your style.
From classic chronographs to cutting-edge smartwatches, find the perfect companion for every moment.
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <Link to={"/shop"} className="flex items-center justify-center gap-x-1 py-4 px-4 text-white font-medium bg-black duration-150 hover:bg-white hover:text-black active:bg-gray-900 rounded-sm md:inline-flex">
                                SHOP PRODUCTS
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                             
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        </div>
        </div>
    )
}
